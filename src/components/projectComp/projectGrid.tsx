"use client"
import { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  tags?: string[];
  fullDescription?: string; // Extended description for expanded view
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  // Track which project is being viewed in expanded mode
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  // Close expanded view when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.project-card') && expandedIndex !== null) {
        setExpandedIndex(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedIndex]);

  return (
    <div className="px-8 py-12 lg:px-20 lg:py-16 bg-zinc-950 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              delay={index * 0.1}
              isExpanded={expandedIndex === index}
              onExpand={() => setExpandedIndex(index === expandedIndex ? null : index)}
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
  isExpanded, 
  onExpand 
}: { 
  project: Project; 
  index: number;
  delay?: number; 
  isExpanded: boolean;
  onExpand: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered) return;
      
      if (e.key === 'Enter') {
        onExpand();
      } else if (e.key === 'b') {
        setIsBookmarked(!isBookmarked);
      } else if (e.key === 'l') {
        setIsLiked(!isLiked);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHovered, isBookmarked, isLiked, onExpand]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isExpanded) return;
    
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
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Dynamic styles
  const cardStyles = isExpanded ? {
    transform: 'scale(1.02) translateZ(0)',
    zIndex: '50',
    gridRow: 'span 2',
    height: 'auto'
  } : {
    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    transformStyle: 'preserve-3d' as const,
    zIndex: isHovered ? '20' : '10'
  };

  const imageStyles = isExpanded ? {
    transform: 'translateZ(0) scale(1)',
    filter: 'grayscale(0) brightness(1)'
  } : {
    transform: `translateZ(${isHovered ? '40px' : '0px'}) scale(${isHovered ? 1.05 : 1})`,
    filter: `grayscale(0.8) brightness(${isHovered ? 1.1 : 0.9})`
  };

  return (
    <div
      ref={cardRef}
      className={`project-card group relative h-full transition-all duration-500 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} 
        ${isExpanded ? 'sm:col-span-2 lg:col-span-3' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={resetRotation}
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      {/* Glow effect */}
      <div 
        className={`absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-400 rounded-xl 
          opacity-0 ${isHovered || isExpanded ? 'opacity-30' : ''} blur-xl transition-all duration-500`}
      />

      {/* 3D Card Container */}
      <div
        className={`relative bg-gradient-to-b from-zinc-900 to-zinc-950 
          border border-zinc-800 ${isHovered ? 'border-zinc-600' : ''} ${isExpanded ? 'border-zinc-500' : ''}
          rounded-xl p-6 shadow-xl transition-all duration-500 overflow-hidden cursor-pointer`}
        style={{
          ...cardStyles,
          boxShadow: isHovered || isExpanded ? '0 25px 50px -12px rgba(0, 0, 0, 0.7)' : '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
        }}
        onClick={() => onExpand()}
      >
        {/* Interaction buttons */}
        <div 
          className={`absolute top-4 right-4 z-30 flex space-x-2 opacity-0 
            ${isHovered || isExpanded ? 'opacity-100' : ''} transition-opacity duration-300`}
          style={{ transform: `translateZ(${isHovered ? '50px' : '0px'})` }}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className={`p-2 rounded-full ${isBookmarked ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-300'} 
              hover:bg-zinc-700 transition-all duration-300`}
            onClick={() => setIsBookmarked(!isBookmarked)}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </button>
          <button 
            className={`p-2 rounded-full ${isLiked ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-300'} 
              hover:bg-zinc-700 transition-all duration-300`}
            onClick={() => setIsLiked(!isLiked)}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Front Face */}
        <div 
          className={`relative overflow-hidden rounded-xl transition-all duration-500
            ${isExpanded ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <Image
            src={project.image}
            alt={project.title}
            width={isExpanded ? 1200 : 800}
            height={isExpanded ? 675 : 450}
            className="object-cover w-full h-full rounded-xl transition-all duration-500"
            style={imageStyles}
          />
          
          {/* 3D Edge Effect */}
          <div className="absolute inset-0 rounded-xl border border-zinc-700/30 mix-blend-overlay pointer-events-none" />
        </div>

        {/* Tags */}
        {project.tags && (
          <div 
            className="flex flex-wrap gap-2 mt-6"
            style={{
              transform: `translateZ(${isHovered && !isExpanded ? '40px' : '0px'})`,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className={`px-2 py-1 bg-zinc-800/80 text-zinc-300 text-xs font-medium rounded-full
                  ${isHovered ? 'bg-zinc-700/80' : ''} transition-colors duration-300`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div 
          className="mt-6 space-y-4"
          style={{
            transform: `translateZ(${isHovered && !isExpanded ? '50px' : '0px'})`,
            transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <h3 className={`text-xl font-bold ${isExpanded ? 'text-white' : 'text-zinc-100'} transition-all duration-500`}>
            {project.title}
          </h3>
          
          <p className={`text-base text-zinc-400 leading-relaxed transition-all duration-500
            ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
            {isExpanded && project.fullDescription ? project.fullDescription : project.description}
          </p>
          
          {/* Action buttons */}
          <div className={`flex ${isExpanded ? 'justify-between' : 'justify-start'} items-center`}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-zinc-300 transition-colors duration-300 mt-2"
              onClick={(e) => e.stopPropagation()}
              style={{
                transform: `translateZ(${isHovered && !isExpanded ? '60px' : '0px'})`,
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
            
            {isExpanded && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onExpand();
                }}
                className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full text-sm font-medium transition-colors duration-300"
              >
                Close
              </button>
            )}
          </div>
        </div>

        {/* Expanded content sections - only shown when expanded */}
        {isExpanded && (
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Features</h4>
              <ul className="space-y-2">
                {Array(4).fill(0).map((_, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-zinc-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-400">Feature {i + 1} description here</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {Array(6).fill(0).map((_, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    Tech {i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project number */}
        <div 
          className="absolute bottom-4 right-6 text-8xl font-bold text-zinc-800 opacity-20 pointer-events-none"
          style={{
            transform: isExpanded ? 'none' : `translateZ(${isHovered ? '-20px' : '0px'})`,
          }}
        >
          {(index + 1).toString().padStart(2, '0')}
        </div>

        {/* 3D Shadow */}
        <div
          className="absolute inset-0 rounded-xl bg-black/40 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: (isHovered && !isExpanded) ? 0.4 : 0,
            transform: `translateZ(${(isHovered && !isExpanded) ? '-30px' : '0px'})`,
            filter: 'blur(24px)'
          }}
        />
      </div>
    </div>
  );
}
