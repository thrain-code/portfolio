import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


export default function Footer() {
  // Data untuk social links
  const socialLinks = [
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" }
  ];

  // Data untuk quick links
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" }
  ];

  // Data untuk contact info
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "123 Main Street, City, Country" },
    { icon: <FaEnvelope />, text: "info@example.com" },
    { icon: <FaPhoneAlt />, text: "+123 456 7890" }
  ];

  return (
    <>
    <div className="border-b-1 border-zinc-800"/>
    <div className="w-full px-8 lg:px-20">
      <div className="flex justify-between bg-zinc-950 border-x border-x-zinc-800 px-2">
        <p className="text-zinc-700 text-xs lg:text-lg font-light">anjay</p>
        <p className="text-zinc-700 text-xs lg:text-lg font-light">Footer Components</p>
      </div>
    </div>
    <div className="border-b-1 border-zinc-800 w-full"/>
    <footer className="bg-zinc-950 text-white">
      <div className="container flex items-center justify-between mx-auto px-6 py-12">
        <div>bangsat</div>
      </div>
    </footer>
    <div className="border-b-1 border-zinc-800"/>
    <div className="w-full px-8 lg:px-20 h-12">
      <div className="flex justify-center items-center h-full bg-zinc-950 border-x border-x-zinc-800 px-2">
        <div className="lg:text-lg text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </div>
    <div className="border-b-1 border-zinc-800 w-full"/>
    </>
  );
}