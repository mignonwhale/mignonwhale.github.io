'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from "next/link";

type PortfolioItem = {
  id: number;
  title: string;
  year: string;
  preview: string;
  link: string;
  skills?: string[];
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Calendar Booking App',
    year: '2025.06',
    preview: '/calendar-booking-app-main.png',
    link: 'https://calendar-booking-app-nine.vercel.app/calendar/mignonwhale',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'supabase'],
  },
  {
    id: 2,
    title: '[Vibe coding] AI Dashboard',
    year: '2025.08',
    preview: '/ai-dashboard-main.png',
    link: 'https://ai-dashboard-beta-mocha.vercel.app/',
    skills: ['Claude Code', 'Figma make', 'ChatGPT', 'Gimini AI API'],
  },
  {
    id: 3,
    title: 'Game Promotion Website',
    year: '2025.09',
    preview: '/game-promotion-main.png',
    link: 'https://unicon-demo.vercel.app/',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  }
];

const getItemIcon = (itemId: number) => {
  const iconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 100,
    height: 100,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    preserveAspectRatio: "xMidYMid meet",
    style: {width: '100px', height: '100px'},
    className: "w-full h-full object-contain transition-all duration-500 opacity-100"
  };

  switch (itemId) {
    case 1: // Calendar Booking App
      return (
        <svg {...iconProps}>
          <path d="M16 14v2.2l1.6 1"/>
          <path d="M16 2v4"/>
          <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/>
          <path d="M3 10h5"/>
          <path d="M8 2v4"/>
          <circle cx="16" cy="16" r="6"/>
        </svg>
      );
    case 2: // AI Dashboard
      return (
        <svg {...iconProps}>
          <path d="M12 8V4H8"/>
          <rect width="16" height="12" x="4" y="8" rx="2"/>
          <path d="M2 14h2"/>
          <path d="M20 14h2"/>
          <path d="M15 13v2"/>
          <path d="M9 13v2"/>
        </svg>
      );
    case 3: // Game Promotion Website
      return (
        <svg {...iconProps}>
          <line x1="6" x2="10" y1="11" y2="11"/>
          <line x1="8" x2="8" y1="9" y2="13"/>
          <line x1="15" x2="15.01" y1="12" y2="12"/>
          <line x1="18" x2="18.01" y1="10" y2="10"/>
          <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path d="M16 14v2.2l1.6 1"/>
          <path d="M16 2v4"/>
          <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/>
          <path d="M3 10h5"/>
          <path d="M8 2v4"/>
          <circle cx="16" cy="16" r="6"/>
        </svg>
      );
  }
};

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
        <div className="flex flex-wrap gap-8 justify-center items-center max-w-[550px] lg:max-w-[1200px]"
             style={{minHeight: '675px'}}>
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
                  <div className="flex-[9] relative overflow-hidden flex justify-center items-center">
                    {isHovered && item.preview ? (
                      <Image
                        src={item.preview}
                        alt={item.title}
                        width={375}
                        height={540}
                        className="w-full h-full object-contain opacity-100 translate-y-0 transition-all duration-500"
                      />
                    ) : (
                      getItemIcon(item.id)
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
