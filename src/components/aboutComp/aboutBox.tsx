import { useState, useEffect } from 'react';

export default function AboutBox() {
  const [isFocused, setIsFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 50, z: 45 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [textContent, setTextContent] = useState('');

  // Add subtle animation on mouse move for immersive effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isFocused) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Calculate rotation based on mouse position
        const rotX = 50 + ((clientY - centerY) / centerY) * 5;
        const rotZ = 45 + ((clientX - centerX) / centerX) * 5;
        
        setRotation({ x: rotX, z: rotZ });
        setPosition({ 
          x: ((clientX - centerX) / centerX) * 10,
          y: ((clientY - centerY) / centerY) * 10
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFocused]);

  const handleSubmit = () => {
    console.log('Submitted content:', textContent);
    // Add your submit logic here
    alert('Content submitted: ' + textContent);
    setTextContent('');
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Enhanced styles */}
      <style>
        {`
          .fade-mask {
            -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%);
            mask-image: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%);
          }
          
          @media (min-width: 640px) {
            .fade-mask {
              -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 75%);
              mask-image: radial-gradient(circle, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 75%);
            }
          }
          
          @media (min-width: 1024px) {
            .fade-mask {
              -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%);
              mask-image: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%);
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

          .animated-grid td {
            transition: background-color 0.5s ease;
          }

          .animated-grid td:hover {
            background-color: rgba(90, 90, 255, 0.1);
          }

          .window-content {
            height: 240px;
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

          .submit-button {
            background-color: #3b82f6;
            transition: all 0.3s ease;
          }

          .submit-button:hover {
            background-color: #2563eb;
            transform: translateY(-1px);
          }

          .submit-button:active {
            transform: translateY(1px);
          }
        `}
      </style>

      <div
        className={`flex-col flex z-30 bg-zinc-950 rounded-lg transition-all duration-300 
          w-10/12 sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-7/12 
          scale-65 sm:scale-75 md:scale-95 lg:scale-110 xl:scale-120
          my-8 sm:my-0
        `}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateZ(${rotation.z}deg) translateZ(${
            isFocused ? '40px' : hovered ? '20px' : '0px'
          }) translateX(${position.x}px) translateY(${position.y}px)`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Title bar with improved interaction */}
        <div className="flex justify-between items-center p-2 border-t border-x border-zinc-400 rounded-t-lg w-full bg-gradient-to-r from-zinc-900 to-zinc-800">
          <div className="flex space-x-2">
            <span className="h-3 w-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></span>
            <span className="h-3 w-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></span>
            <span className="h-3 w-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></span>
          </div>
          <div className="text-zinc-400 text-xs font-mono">about.js</div>
          <div className="w-16"></div> {/* Spacer for balance */}
        </div>

        {/* Enhanced content with multiple sections */}
        <div className="window-content border-x border-zinc-400">
          {/* Code section */}
          <div className="p-3 border-b border-zinc-700 bg-zinc-900 font-mono text-xs text-zinc-300">
            <div><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = {`{`}</div>
            <div className="pl-4"><span className="text-green-400">name</span>: <span className="text-amber-300">&quot;Your Name&quot;</span>,</div>
            <div className="pl-4"><span className="text-green-400">skills</span>: [<span className="text-amber-300">&quot;React&quot;</span>, <span className="text-amber-300">&quot;Next.js&quot;</span>, <span className="text-amber-300">&quot;Tailwind&quot;</span>],</div>
            <div className="pl-4"><span className="text-green-400">passion</span>: <span className="text-amber-300">&quot;Building beautiful UIs&quot;</span></div>
            <div>{`}`};</div>
          </div>

          {/* Data section */}
          <div className="w-full p-4 bg-zinc-800">
            <textarea
              className="w-full bg-zinc-800 text-zinc-200 border border-zinc-600 p-2 rounded resize-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-20"
              placeholder="Write here..."
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            ></textarea>
            
            {/* Submit button */}
            <button 
              onClick={handleSubmit}
              className="submit-button mt-2 w-full text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex justify-between items-center px-2 py-1 border border-zinc-400 rounded-b-lg bg-gradient-to-r from-zinc-800 to-zinc-900 text-xs text-zinc-500">
          <span>Status: {isFocused ? "Editing" : "Ready"}</span>
          <span>v1.0.0</span>
        </div>
      </div>

      {/* Improved grid background with subtle animation */}
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
                      style={{
                        backgroundColor: (rowIndex + colIndex) % 4 === 0 ? 'rgba(59, 130, 246, 0.03)' : '',
                      }}
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