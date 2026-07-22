# 트러블슈팅

## `yarn dev` 실행 시 500 에러 (`localStorage.getItem is not a function`)

### 증상

`yarn dev` 실행 후 브라우저에서 접속하면 500 에러가 발생하고, 서버 로그에 아래와 같은 에러가 반복 출력된다.

```
⨯ [TypeError: localStorage.getItem is not a function] {
  digest: '...'
}
(node:XXXX) Warning: `--localstorage-file` was provided without a valid path
```

### 원인

프로젝트 코드의 버그가 아니라 **Node.js 버전 호환성 문제**다.

Node.js v25부터 실험적 Web Storage API(`--experimental-webstorage`)가 기본으로 활성화되어, 서버 사이드(Node) 전역에도 `localStorage` 객체가 노출된다. 하지만 `--localstorage-file` 옵션으로 저장 경로를 지정하지 않으면 이 객체는 껍데기뿐인 상태라 `getItem` 같은 메서드가 정의되어 있지 않다.

Next.js(15.3.5) dev overlay 코드 일부가 `typeof localStorage !== 'undefined'` 형태로 브라우저 환경 여부를 체크하는데, 예전에는 Node 환경에서 `localStorage`가 아예 존재하지 않아 이 체크가 안전하게 `false`였다. Node 25부터는 이 체크가 `true`가 되어 버려, SSR 중에 깨진 `localStorage.getItem`을 호출하면서 500 에러가 발생한다.

### 해결

처음에는 `node --no-experimental-webstorage`를 `package.json` 스크립트에 직접 하드코딩했는데, 이렇게 하면 이 플래그 자체가 없는 구버전 Node(예: GitHub Actions의 Node 20)에서 `bad option`으로 빌드가 죽는 문제가 생긴다:

```
Run yarn build
/opt/hostedtoolcache/node/20.20.2/x64/bin/node: bad option: --no-experimental-webstorage
Error: Process completed with exit code 9.
```

그래서 [scripts/run-next.js](../scripts/run-next.js) 래퍼 스크립트를 만들어, 실행 중인 Node가 해당 플래그를 지원하는지 먼저 프로브(probe)한 뒤 지원할 때만 붙이도록 처리했다. Node 20(CI)에서는 플래그 없이, Node 25(로컬)에서는 플래그를 붙여서 각각 정상 동작한다.

```json
"dev": "node scripts/run-next.js dev",
"build": "node scripts/run-next.js build",
```

`NODE_OPTIONS` 환경변수 대신 이 방식을 쓴 이유는, `VAR=value command` 형태의 셸 문법이 Windows(cmd.exe)에서는 동작하지 않아 `cross-env` 같은 별도 의존성 없이 OS/Node 버전에 상관없이 동일하게 동작하도록 하기 위함이다.

### 참고

- Node LTS(v22.x 등)를 사용하면 이 플래그 없이도 문제가 발생하지 않는다.
- Node 버전은 `node --version`으로 확인 가능.
