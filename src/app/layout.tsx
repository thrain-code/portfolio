"use client";

import Navbar from "@/components/navbar";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Poppins } from 'next/font/google';

// Initialize the font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  return (
    <html lang="en" className={`h-full ${poppins.variable}`}>
      <body className="font-poppins">
        <Navbar />
        <main className="pt-16 lg:pt-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="min-h-screen"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </body>
    </html>
  );
}