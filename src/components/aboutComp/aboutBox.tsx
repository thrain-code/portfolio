import { FaUser } from "react-icons/fa";
import { useState } from "react";

export default function aboutBox() {
    const [isTyping, setIsTyping] = useState(false);
  
  return(
    <>
     <div className="h-full w-full items-center flex flex-col justify-center">
            <div
              className={`lg:flex-col flex mx-4 z-40 transition-all py-5 rotate-x-50 rotate-z-45 ${
                isTyping ? "lg:mb-10 mb-7" : ""
              }`}
            >
              <div className="border-1 bg-zinc-950 p-1 w-48 h-48 lg:w-92 lg:h-96 relative border-zinc-400 rounded-xl">
                <div className="flex items-center lg:space-x-2 space-x-1 px-1 lg:py-2 py-1 rounded-t-lg">
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                </div>
                <div className="border-1 space-y-2 lg:h-84 h-41 rounded-lg border-zinc-400 p-3">
                  <div className="flex gap-3">
                    <FaUser className="lg:h-6 h-3" />
                    <div className="border rounded-xl w-full border-zinc-400" />
                  </div>
                  <div className="border-1 flex border-zinc-400 h-28 lg:h-70 rounded-xl">
                    <div className="border-l-1 border-zinc-400 h-full ml-6 lg:ml-13" />
                    <div className="flex flex-col">
                      <textarea
                        className="border border-zinc-400 lg:text-xl text-xs lg:m-3 m-2 h-full w-29 lg:w-63 resize-y rounded-xl text-center flex items-center justify-center p-4 placeholder:text-zinc-500 placeholder:text-sm focus:outline-none"
                        placeholder="type here"
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                      />
                      <button className="border lg:text-xl text-xs font-semibold border-zinc-400 rounded-xl mx-3 mb-3 py-1 text-zinc-300 transition-all duration-300 ease-in-out hover:bg-zinc-400 hover:text-black active:scale-95">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex-col flex mx-4 z-30 absolute rotate-x-50 rotate-z-45 shadow-xl shadow-zinc-900 rounded-lg">
              <div className="border-1 bg-zinc-950 p-1 w-48 h-48 lg:w-92 lg:h-96 border-zinc-400 rounded-xl">
                <div className="flex items-center lg:space-x-2 space-x-1 px-1 lg:py-2 py-1 rounded-t-lg">
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                  <span className="lg:h-5 lg:w-5 h-2 w-2 border-1 border-zinc-400 rounded-full"></span>
                </div>
                <div className="border-1 space-y-2 lg:h-84 h-41 rounded-lg border-zinc-400 p-3">
                  <div className="flex gap-3">
                    <FaUser className="h-6" />
                    <div className="border rounded-xl w-full border-zinc-400" />
                  </div>
                  <div className="border-1 flex border-zinc-400 h-28 lg:h-70 rounded-xl">
                    <div className="border-l-1 border-zinc-400 h-full ml-6 lg:ml-13" />
                    <div className="flex flex-col">
                      <textarea
                        className="border border-zinc-400 lg:text-md text-xs lg:m-3 m-2 h-full w-29 lg:w-63 resize-y rounded-xl text-center flex items-center justify-center p-4 placeholder:text-zinc-500 placeholder:text-sm focus:outline-none"
                        placeholder="type here"
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                      />
                      <button className="border lg:text-md text-xs font-semibold border-zinc-400 rounded-xl mx-3 mb-3 py-1 text-zinc-300 transition-all duration-300 ease-in-out hover:bg-zinc-400 hover:text-black active:scale-95">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}