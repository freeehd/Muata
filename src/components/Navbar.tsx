import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Github, Linkedin, Monitor, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/research", label: "Research" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#121414]/95 backdrop-blur-sm fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-24 max-w-full border-[#3b4949] border-b">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col"
      >
        <div className="text-[10px] font-mono text-primary mb-1 tracking-widest uppercase">Status // Optimized</div>
        <NavLink to="/" className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white leading-none font-display group">
          Muata <span className="text-primary">.SYS</span>
        </NavLink>
      </motion.div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8 items-center font-mono text-[10px] uppercase font-black tracking-widest">
        {navLinks.map(link => (
          <NavLink 
            key={link.to}
            to={link.to} 
            className={({ isActive }) => 
              `relative px-2 py-1 transition-all duration-200 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-4">
          <SocialIcon href="https://github.com/siddig395" icon={<Github size={18} />} />
          <SocialIcon href="https://my.linkedin.com/in/mohammed-muatasim-4785b7313" icon={<Linkedin size={18} />} />
        </div>
        
        <NavLink to="/contact" className="hidden sm:block chamfer bg-primary text-black font-black uppercase text-[10px] px-6 py-3 tracking-[0.2em] hover:bg-white transition-colors">
          INITIALIZE
        </NavLink>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-[#121414] border-b border-[#3b4949] lg:hidden z-40 p-8 flex flex-col gap-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `text-2xl font-black italic uppercase tracking-tighter transition-all ${
                      isActive ? 'text-primary pl-4 border-l-4 border-primary' : 'text-on-surface-variant hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            
            <div className="flex justify-between items-center pt-8 border-t border-[#333535]">
              <div className="flex gap-6">
                <SocialIcon href="https://github.com/siddig395" icon={<Github size={24} />} />
                <SocialIcon href="https://my.linkedin.com/in/mohammed-muatasim-4785b7313" icon={<Linkedin size={24} />} />
              </div>
              <NavLink 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="chamfer bg-primary text-black font-black uppercase text-[10px] px-6 py-3"
              >
                CONTACT
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-on-surface-variant hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
}
