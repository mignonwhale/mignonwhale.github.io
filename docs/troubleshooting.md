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

`node --no-experimental-webstorage` 플래그로 Next CLI를 직접 실행하도록 [package.json](../package.json)의 스크립트를 수정했다.

```json
"dev": "node --no-experimental-webstorage node_modules/next/dist/bin/next dev",
"build": "node --no-experimental-webstorage node_modules/next/dist/bin/next build",
```

`NODE_OPTIONS` 환경변수 대신 이 방식을 쓴 이유는, `VAR=value command` 형태의 셸 문법이 Windows(cmd.exe)에서는 동작하지 않아 `cross-env` 같은 별도 의존성 없이 OS에 상관없이 동일하게 동작하도록 하기 위함이다.

### 참고

- Node LTS(v22.x 등)를 사용하면 이 플래그 없이도 문제가 발생하지 않는다.
- Node 버전은 `node --version`으로 확인 가능.
