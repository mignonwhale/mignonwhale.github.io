'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from "next/link";

type PortfolioItem = {
  id: number;
  title: string;
  year: number;
  preview: string;
  link: string;
  skills?: string[];
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Calendar Booking App',
    year: 2025,
    preview: '/main-page.png',
    link: 'https://calendar-booking-app-nine.vercel.app/calendar/mignonwhale',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'supabase'],
  },
  {
    id: 2,
    title: '[Vibe coding] AI Dashboard',
    year: 2025,
    preview: '/ai_dashboard-home.png',
    link: 'https://ai-dashboard-beta-mocha.vercel.app/',
    skills: ['Claude Code', 'Figma make', 'ChatGPT', 'Gimini AI API'],
  }
];

export default function PortfolioGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-10">
      <div className="flex items-center gap-16 lg:gap-24">
        {/* ✅ 타이틀 */}
        <h1 className="text-white text-5xl lg:text-9xl font-bold whitespace-nowrap">
          PORTFOLIOS
        </h1>

        {/* ✅ 카드 전체 wrapper */}
        <div className="flex flex-wrap gap-8 justify-center items-center max-w-[550px] lg:max-w-[1200px]" style={{ minHeight: '675px' }}>
          {portfolioItems.map((item) => {
            const isHovered = item.id === hoveredId;

            return (
              <Link
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-black border border-white/20 cursor-pointer overflow-hidden w-[375px] block ${
                  isHovered ? 'h-[600px] scale-[1.03] transition-all duration-500' : 'h-[450px]'
                }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex flex-col h-full">
                  {/* 이미지 영역 */}
                  <div className="flex-[9] relative overflow-hidden">
                    {isHovered && item.preview ? (
                      <Image
                        src={item.preview}
                        alt={item.title}
                        width={375}
                        height={540}
                        className="w-full h-full object-contain opacity-100 translate-y-0 transition-all duration-500"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={100}
                        height={100}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        preserveAspectRatio="xMidYMid meet"
                        style={{width: '375px', height: '540px'}}
                        className="w-full h-full object-contain transition-all duration-500 invert opacity-100 translate-y-[-100%]"
                      >
                        <path d="M16 14v2.2l1.6 1"/>
                        <path d="M16 2v4"/>
                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/>
                        <path d="M3 10h5"/>
                        <path d="M8 2v4"/>
                        <circle cx="16" cy="16" r="6"/>
                      </svg>
                    )}
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="flex-[1] text-white text-center py-8 flex flex-col gap-2">
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-xs">{item.year}</p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {item.skills?.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-white/10 text-gray-400 text-xs px-2 pb-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
