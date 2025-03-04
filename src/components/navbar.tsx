'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Project', path: '/project' },
  { name: 'Contact', path: '/contact' },
];

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: { opacity: 0, y: -20 },
};

const itemVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -20 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full text-white border-b-1 border-b-zinc-800 bg-zinc-950 z-50 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div
              className="lg:text-3xl text-xl font-bold cursor-pointer"
            >
              Portofolio
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className="relative px-3 py-2 cursor-pointer group">
                  <span className="relative z-10 block text-gray-200 transition-colors duration-300 group-hover:text-zinc-400">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <motion.button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden inset-0 bg-opacity-90 backdrop-blur-sm"
            >
              <div className="px-4 pb-6 space-y-1">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                  >
                    <Link
                      href={item.path}
                      className="block px-3 py-1 text-lg rounded-lg hover:text-zinc-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;