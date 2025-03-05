import { useState, useEffect, Key } from 'react';

export default function TerminalBox() {
  const [hovered, setHovered] = useState(false);
  const [rotation] = useState({ x: 50, z: 45 });
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [typingIndex, setTypingIndex] = useState(0);
  
  const fullText = `const thrain: Developer = {
    name: "Arkadani Fathir Fahrezi",
    skills: ["TypeScript", "Vue.js", "Nuxt 3", "Tailwind CSS", "Laravel", "Spring Boot"],
    passion: "Crafting futuristic and interactive web experiences",
    projects: ["Portfolio", "Admin Dashboard", "E-commerce", "Learning System Management"],
  };
  
  type Developer = {
    name: string;
    skills: string[];
    passion: string;
    projects: string[];
  };
  
  console.log("System initialized. Welcome, Arkadani!");`;

  const [showCursor, setShowCursor] = useState(true);
  
  const typingSpeed = 50; 
  const cursorBlinkRate = 530;

  useEffect(() => {
    if (isTyping && typingIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(fullText.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(typingTimer);
    } else if (typingIndex >= fullText.length) {
      setIsTyping(false);
    }
  }, [isTyping, typingIndex, fullText]);
  
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkRate);
    
    return () => clearInterval(cursorTimer);
  }, []);

  const formatText = (text: string) => {
    return text.split('\n').map((line: string, lineIndex: Key) => {
      const formattedLine = line
        .replace(/\b(const|let|var|function|return|if|else|for|while)\b/g, '<span class="text-pink-400">$1</span>')
        .replace(/\b(developer|projects|console)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/\b(name|skills|passion|log)\b/g, '<span class="text-green-400">$1</span>')
      
      return (
        <div key={lineIndex} dangerouslySetInnerHTML={{ __html: formattedLine }} />
      );
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
      <style>
        {`
          .fade-mask {
            -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%);
            mask-image: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 45%);
          }
          
          @media (min-width: 640px) {
            .fade-mask {
              -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 75%);
              mask-image: radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 60%);
            }
          }
          
          @media (min-width: 1024px) {
            .fade-mask {
              -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%);
              mask-image: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%);
            }
          }
          
          /* Added custom scale classes */
          .scale-65 {
            transform: scale(0.65);
          }
          
          .scale-110 {
            transform: scale(1.1);
          }
          
          .scale-120 {
            transform: scale(1.2);
          }

          .window-content {
            height: 320px;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: #666 #222;
          }

          .window-content::-webkit-scrollbar {
            width: 6px;
          }

          .window-content::-webkit-scrollbar-track {
            background: #222;
          }

          .window-content::-webkit-scrollbar-thumb {
            background-color: #666;
            border-radius: 6px;
          }
          
          .cursor {
            display: inline-block;
            width: 8px;
            height: 16px;
            background-color: #4f94ef;
            animation: blink 1s step-end infinite;
            vertical-align: middle;
            margin-left: 1px;
          }
          
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>

      <div
        className={`flex-col flex z-30 bg-zinc-950 rounded-lg transition-all duration-300 
          w-10/12 sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-7/12 
          scale-65 sm:scale-75 md:scale-95 lg:scale-110 xl:scale-120
        `}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateZ(${rotation.z}deg) translateZ(${
            hovered ? '20px' : '0px'
          })`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex justify-between items-center p-2 border border-zinc-400 rounded-t-lg w-full bg-zinc-950">
          <div className="flex space-x-2">
            <span className="h-3 w-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></span>
            <span className="h-3 w-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></span>
            <span className="h-3 w-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></span>
          </div>
          <div className="text-zinc-400 text-xs font-mono">terminal.js</div>
          <div className="w-16"></div>
        </div>

        <div className="window-content border-x border-zinc-400">
          <div className="p-4 bg-zinc-950 font-mono lg:text-md text-xs text-zinc-300 h-full">
            {formatText(displayText)}
            {showCursor && <span className="inline-block w-2 h-4 bg-zinc-400 ml-1 animate-pulse"></span>}
          </div>
        </div>

        <div className="flex justify-between items-center px-2 py-1 border border-zinc-400 rounded-b-lg bg-zinc-950 text-xs text-zinc-500">
          <span>Status: {isTyping ? "Typing..." : "Ready"}</span>
          <span>v1.0.0</span>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
        <div className="relative fade-mask" style={{ transform: 'rotateX(50deg) rotateZ(45deg)' }}>
          <table
            className="border border-zinc-700 border-collapse animated-grid
            w-[90vh] h-[90vh] sm:w-[100vh] sm:h-[100vh] md:w-[120vh] md:h-[120vh] lg:w-[140vh] lg:h-[140vh]"
          >
            <tbody>
              {Array.from({ length: 15 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 15 }).map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-zinc-800
                      w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}