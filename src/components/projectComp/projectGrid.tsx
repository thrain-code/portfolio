"use client"
import { useRef, useState } from 'react';
import Image, { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="px-8 py-12 lg:px-20 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotate({
      x: -(y - centerY) / 25,
      y: (x - centerX) / 25
    });
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="group relative h-full transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
    >
      {/* 3D Card Container */}
      <div
        className="relative h-full bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-all duration-500"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Face */}
        <div className="relative overflow-hidden rounded-xl aspect-video transform-gpu transition-transform duration-500">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="object-cover w-full h-full rounded-xl"
            style={{
              transform: `translateZ(${isHovered ? '40px' : '0px'})`,
              filter: `brightness(${isHovered ? 1.1 : 1})`
            }}
          />
          
          {/* 3D Edge Effect */}
          <div className="absolute inset-0 rounded-xl border-2 border-white/10 mix-blend-overlay pointer-events-none" />
        </div>

        {/* Content */}
        <div 
          className="mt-6 space-y-4"
          style={{
            transform: `translateZ(${isHovered ? '30px' : '0px'})`,
            transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-base text-zinc-400 leading-relaxed">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <span>Explore Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* 3D Shadow */}
        <div
          className="absolute inset-0 rounded-xl bg-black/30 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovered ? 0.3 : 0,
            transform: `translateZ(${isHovered ? '-20px' : '0px'})`,
            filter: 'blur(20px)'
          }}
        />
      </div>
    </div>
  );
}