"use client";

import { useState, useEffect } from "react";
import Title from "@/components/titleComp/title";
import { 
  FaEnvelopeOpenText, 
  FaUser, 
  FaPaperPlane
} from "react-icons/fa";
import { motion } from "framer-motion";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactComp() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  // Animation control
  const [animationReady, setAnimationReady] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimationReady(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "Your message has been sent. I'll get back to you soon!"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <>
      <Title 
        title="Contact" 
        subtitle="Contact Components" 
        Icon={FaEnvelopeOpenText} 
      />
      <div className="border-b border-zinc-800 w-full" />
      <div className="h-auto lg:h-auto px-8 lg:px-20 overflow-hidden">
        <motion.div 
          className="flex flex-col h-full bg-zinc-950 border-x border-x-zinc-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex lg:flex-row flex-col-reverse justify-center gap-4 p-4 lg:p-6">
            
            {/* Contact Form with Animation */}
            <motion.div 
              className="bg-zinc-900/30 w-full backdrop-blur-sm rounded-lg border border-zinc-800 p-6 shadow-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={animationReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3 // Slightly delayed from the code box
              }}
            >
              <h3 className="text-xl font-medium text-zinc-200 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input with Animation */}
                <motion.div 
                  className="space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={animationReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaUser className="text-zinc-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 py-2.5 bg-zinc-800/50 border border-zinc-700 rounded-md 
                        text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-1 
                        focus:ring-zinc-600 focus:border-zinc-600 transition-all duration-200"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </motion.div>
                
                {/* Email Input with Animation */}
                <motion.div 
                  className="space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={animationReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaEnvelopeOpenText className="text-zinc-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 py-2.5 bg-zinc-800/50 border border-zinc-700 rounded-md 
                        text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-1 
                        focus:ring-zinc-600 focus:border-zinc-600 transition-all duration-200"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </motion.div>
                
                {/* Message Textarea with Animation */}
                <motion.div 
                  className="space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={animationReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full py-2.5 px-3 bg-zinc-800/50 border border-zinc-700 rounded-md 
                      text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-1 
                      focus:ring-zinc-600 focus:border-zinc-600 transition-all duration-200
                      resize-none"
                    placeholder="Hello, I'd like to talk about..."
                    required
                  ></textarea>
                </motion.div>
                
                {/* Submit Button with Animation */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700
                    text-zinc-200 rounded-md font-medium flex items-center justify-center
                    transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed
                    focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-opacity-50 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={animationReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
                
                {/* Status Message with Animation */}
                {submitStatus && (
                  <motion.div 
                    className={`mt-4 p-3 rounded-md text-sm ${
                      submitStatus.success 
                        ? "bg-green-900/20 border border-green-800/50 text-green-300" 
                        : "bg-red-900/20 border border-red-800/50 text-red-300"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Simple Code Box with Animation */}
            <motion.div 
              className="bg-zinc-900/30 rounded-lg border border-zinc-800 overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={animationReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
                delay: 0.1
              }}
            >
              <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-700">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-zinc-400 font-mono">contact.tsx</span>
              </div>
              
              <div className="p-4 font-mono text-xs lg:text-sm overflow-auto max-h-[550px]">
                <div className="flex text-zinc-400">
                  <div className="flex-1">
                    <div className="text-emerald-400">{'// Contact form'}</div>
                    <div className="text-pink-400">export default <span className="text-cyan-400">function</span> <span className="text-yellow-300">ContactForm</span>() {'{'}</div>
                    <div className="ml-4 text-cyan-400">const [formData, setFormData] = useState({'{'}</div>
                    <div className="ml-8 text-zinc-300">name: <span className="text-amber-300">&quot;&quot;</span>,</div>
                    <div className="ml-8 text-zinc-300">email: <span className="text-amber-300">&quot;&quot;</span>,</div>
                    <div className="ml-8 text-zinc-300">message: <span className="text-amber-300">&quot;&quot;</span></div>
                    <div className="ml-4 text-cyan-400">{'}'})</div>
                    <br/>
                    <div className="ml-4 text-cyan-400">return (</div>
                    <div className="ml-8 text-pink-400">{'<form '}<span className="text-blue-400">className</span>=<span className="text-amber-300">&quot;space-y-4&quot;</span>{'>'}</div>
                    <div className="ml-12 text-emerald-400">{'/* Name, email & message inputs */'}</div>
                    <div className="ml-12 text-pink-400">{'<input '}<span className="text-blue-400">className</span>=<span className="text-amber-300">&quot;bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-md&quot;</span> /{'>'}</div>
                    <div className="ml-12 text-zinc-500">...</div>
                    <div className="ml-12 text-pink-400">{'<button '}<span className="text-blue-400">type</span>=<span className="text-amber-300">&quot;submit&quot;</span>{'>'}</div>
                    <div className="ml-16 text-zinc-300">Send Message</div>
                    <div className="ml-12 text-pink-400">{'</button>'}</div>
                    <div className="ml-8 text-pink-400">{'</form>'}</div>
                    <div className="ml-4 text-cyan-400">)</div>
                    <div className="text-pink-400">{'}'}</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </>
  );
}