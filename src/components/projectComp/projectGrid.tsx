"use client"
import { useRef, useState, useCallback, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  tags?: string[];
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title || index} 
              project={project} 
              index={index}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ 
  project, 
  index,
  delay = 0, 
}: { 
  project: Project; 
  index: number;
  delay?: number; 
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotate({
      x: -(y - centerY) / 15,
      y: (x - centerX) / 15
    });
  }, []);

  const resetRotation = useCallback(() => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);

  const cardStyles = {
    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    transformStyle: 'preserve-3d' as const,
    zIndex: isHovered ? '20' : '10'
  };

  const imageStyles = {
    transform: `translateZ(${isHovered ? '40px' : '0px'}) scale(${isHovered ? 1.05 : 1})`,
    filter: `grayscale(0.8) brightness(${isHovered ? 1.1 : 0.9})`
  };

  return (
    <div
      ref={cardRef}
      className={`project-card group relative h-full transition-all duration-500 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
      tabIndex={0}
    >
      <div
        className="relative border border-zinc-800 rounded-xl p-6 shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
        style={cardStyles}
      >
        <div className="relative overflow-hidden rounded-xl aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="object-cover w-full h-full rounded-xl transition-all duration-500"
            style={imageStyles}
          />
          
          <div className="absolute inset-0 rounded-xl border border-zinc-700/30 mix-blend-overlay pointer-events-none" />
        </div>

        {project.tags && (
          <div 
            className="flex flex-wrap gap-2 mt-6"
            style={{
              transform: `translateZ(${isHovered ? '40px' : '0px'})`,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className={`px-2 py-1 text-zinc-300 text-xs font-medium rounded-full
                  ${isHovered ? 'bg-zinc-700/80' : ''} transition-colors duration-300`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div 
          className="mt-6 space-y-4"
          style={{
            transform: `translateZ(${isHovered ? '50px' : '0px'})`,
            transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <h3 className="text-xl font-bold text-zinc-100">
            {project.title}
          </h3>
          
          <p className="text-base text-zinc-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex justify-start items-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-zinc-300 transition-colors duration-300 mt-2"
              style={{
                transform: `translateZ(${isHovered ? '60px' : '0px'})`,
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <span className="font-medium">View Project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1.5' : 'translate-x-0'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div 
          className="absolute bottom-4 right-6 text-8xl font-bold text-zinc-800 opacity-20 pointer-events-none"
          style={{
            transform: `translateZ(${isHovered ? '-20px' : '0px'})`,
          }}
        >
          {(index + 1).toString().padStart(2, '0')}
        </div>

        <div
          className="absolute inset-0 rounded-xl bg-black/40 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovered ? 0.4 : 0,
            transform: `translateZ(${isHovered ? '-30px' : '0px'})`,
            filter: 'blur(24px)'
          }}
        />
      </div>
    </div>
  );
}