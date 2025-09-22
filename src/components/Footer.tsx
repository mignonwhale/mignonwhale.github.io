import {Github, Mail, MapPin} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

export default function Footer() {
  const skills = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'JavaScript', 'jQuery', 'Supabase', 'Firebase', 'Vibe coding', 'java', 'Spring', 'PostgreSQL', 'Oracle', 'MySQL'];
  return (
    <>
      <footer className="bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">프로필 문의</h3>
              <div className="space-y-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mignonwhale@gmail.com&su=%EC%99%B8%EC%A3%BC%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EB%AC%B8%EC%9D%98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-zinc-300 hover:text-gray-300 transition-colors"
                >
                  <Mail className="w-5 h-5"/>
                  <span>mignonwhale@gmail.com</span>
                </a>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <MapPin className="w-5 h-5"/>
                  <span>대한민국</span>
                </div>
                <a
                  href="https://github.com/mignonwhale"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="flex items-center space-x-3 text-zinc-300 hover:text-gray-300 transition-colors"
                >
                  <Github className="w-5 h-5"/>
                  <span>Github</span>
                </a>
              </div>

              <div className="bg-zinc-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">24시간 내 답변 보장</h4>
                <p className="text-sm text-zinc-400">평일 기준, 주말 48시간 이내</p>
                <p className="text-sm text-zinc-400">빠른 소통을 약속드립니다</p>
              </div>
            </div>

            {/* Career Goals */}
            <div className="space-y-6 text">
              <h3 className="text-xl font-semibold text-white">전문 분야</h3>
              <div className="space-y-4 text-zinc-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">풀스택 웹 개발 (11년 경력)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Next.js + Supabase 웹 개발</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">관리자 대시보드 구축</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">API 연동 및 백엔드 개발</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Tech Stack */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">프로젝트 사용기술</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400 mb-3">11년차 개발자와 함께</p>
                  <p className="text-sm text-zinc-400 mb-3">성공적인 프로젝트를 만들어보세요</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-700">
                  <Button variant="outline" className="w-full border-zinc-600 text-zinc-700 hover:bg-zinc-800">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=mignonwhale@gmail.com&su=%EC%99%B8%EC%A3%BC%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EB%AC%B8%EC%9D%98"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      프로젝트 문의
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-zinc-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-zinc-400">
                © 2025 Portfolio. 11년차 풀스택 개발자 
              </p>
              {/*<div className="flex space-x-6">*/}
              {/*  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">*/}
              {/*    개인정보처리방침*/}
              {/*  </Button>*/}
              {/*  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">*/}
              {/*    이용약관*/}
              {/*  </Button>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}
