import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header({ isVisible = true }: { isVisible?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Journey', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5 transition-opacity duration-1000 ${!isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.a 
          href="#"
          onClick={(e) => {
            window.location.hash = '';
            setActiveHash('#');
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-bg transition-all duration-300">
            <span className="text-xs">PT</span>
          </div>
          <span className="hidden sm:inline">Pawan<span className="text-accent">.</span></span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 items-center bg-white/5 p-1 rounded-full border border-white/5">
          {navItems.map((item, index) => {
            const isActive = activeHash === item.href;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setActiveHash(item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative px-6 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-bg' : 'text-muted hover:text-white'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Status Indicator */}
        <div className="hidden lg:flex items-center gap-4 font-mono text-[10px] text-muted tracking-tighter">
          <div className="flex items-center gap-2">
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
            />
            <span>SYSTEM_ONLINE</span>
          </div>
          <div className="w-[1px] h-3 bg-white/10" />
          <span>PORT: 3000</span>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-accent p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-surface overflow-hidden border-b border-white/10"
      >
        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-muted hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
