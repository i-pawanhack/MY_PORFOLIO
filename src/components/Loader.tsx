import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
          }, 800);
          
          // Call onComplete slightly before the exit shutters finish so Hero starts background init
          setTimeout(() => {
            onComplete();
          }, 1200);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <>
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="fixed inset-0 z-[100] flex flex-col pointer-events-none"
          >
            <motion.div 
              initial={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-black origin-top border-b border-accent/20"
            />
            <motion.div 
              initial={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-black origin-bottom border-t border-accent/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.2,
              filter: 'blur(20px)',
              transition: { duration: 0.5 }
            }}
            className="fixed inset-0 z-[101] bg-black flex flex-col items-center justify-center p-6"
          >
          <div className="max-w-xl w-full">
            <div className="flex justify-between items-end mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col"
              >
                <span className="text-[10px] font-mono text-muted uppercase tracking-[0.4em] mb-1">Pawan Tiwari</span>
                <span className="text-xl font-bold tracking-tighter">INITIALIZING Data</span>
              </motion.div>
            </div>
            
            <div className="relative pt-8">
              {/* Animated Car riding the line */}
              <motion.div 
                className="absolute top-0"
                style={{ left: `${count}%`, x: '-100%' }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                {/* Small Sports Car SVG Representation */}
                <div className="relative w-24 h-8">
                  {/* Car Body - Optimized Sports Profile */}
                  <svg viewBox="0 0 140 40" className="w-full h-full fill-accent">
                    <path d="M5,32 L135,32 L135,22 L125,22 L125,26 L120,26 L105,8 L40,8 L25,22 L5,22 Z" />
                    {/* Windshield/Windows */}
                    <path d="M45,11 L65,11 L65,20 L35,20 Z" className="fill-black/50" />
                    <path d="M70,11 L95,11 L102,20 L70,20 Z" className="fill-black/50" />
                    {/* Headlight */}
                    <rect x="128" y="24" width="4" height="2" className="fill-white animate-pulse" />
                  </svg>

                  {/* Percentage on Car */}
                  <div className="absolute inset-0 flex items-center justify-center pr-2 pt-1.5">
                    <span className="text-[10px] font-black italic text-black leading-none select-none tracking-tighter">
                      {count}%
                    </span>
                  </div>
                  
                  {/* Wheels */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.3, ease: "linear" }}
                    className="absolute bottom-[-1px] left-[20px] w-5 h-5 border-[1.5px] border-accent rounded-full flex items-center justify-center bg-black"
                  >
                    <div className="w-full h-[1px] bg-accent/60 rotate-45" />
                    <div className="w-full h-[1px] bg-accent/60 -rotate-45" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.3, ease: "linear" }}
                    className="absolute bottom-[-1px] right-[18px] w-5 h-5 border-[1.5px] border-accent rounded-full flex items-center justify-center bg-black"
                  >
                    <div className="w-full h-[1px] bg-accent/60 rotate-45" />
                    <div className="w-full h-[1px] bg-accent/60 -rotate-45" />
                  </motion.div>

                  {/* Enhanced Speed lines */}
                  <div className="absolute top-[60%] left-[-20px] flex flex-col gap-1 opacity-60">
                    <motion.div 
                      animate={{ x: [0, -30], opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.2 }}
                      className="w-8 h-[1px] bg-accent" 
                    />
                    <motion.div 
                      animate={{ x: [0, -25], opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.25, delay: 0.1 }}
                      className="w-6 h-[1px] bg-accent" 
                    />
                  </div>
                </div>
              </motion.div>

              {/* The Line */}
              <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${count}%` }}
                />
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-between items-center text-[10px] font-mono text-muted uppercase tracking-widest"
            >
              <span>{count < 30 ? 'Pumping Nitro...' : count < 70 ? 'Engaging Turbos...' : 'Full Velocity Achieved...'}</span>
              
            </motion.div>
          </div>
          
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-12"
          >
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
               <span className="text-xs font-mono uppercase tracking-[0.2em]">WELCOME TO MY WORLD</span>
             </div>
          </motion.div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
}
