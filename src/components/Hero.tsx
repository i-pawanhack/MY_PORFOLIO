import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Robot from './Robot';

type IntroStage = 'booting' | 'scanning' | 'projecting_bio' | 'projecting_photo' | 'revealed';

export default function Hero({ isStarted = true }: { isStarted?: boolean }) {
  const [stage, setStage] = useState<IntroStage>('booting');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    let timers: any[] = [];
    if (isStarted) {
      timers = [
        setTimeout(() => setStage('scanning'), 500),
        setTimeout(() => setStage('projecting_bio'), 3000),
        setTimeout(() => setStage('revealed'), 8000),
      ];
    }

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isStarted]);

  const getRobotText = () => {
    if (stage === 'booting') return 'BOOTING...';
    if (stage === 'scanning') return 'SCANNING';
    if (stage === 'projecting_bio') return 'BCA AI STUDENT';
    return '';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-black">
      {/* Dynamic Background Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ x: -mousePos.x * 1.8, y: -mousePos.y * 1.8 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left min-h-[400px] justify-center">
          <AnimatePresence mode="wait">
            {(stage === 'revealed' || stage === 'projecting_bio' || stage === 'projecting_photo') ? (
              <motion.div
                key="content"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                  }
                }}
              >
                <div className={(stage !== 'revealed') ? "opacity-20 blur-md grayscale brightness-50 pointer-events-none" : ""}>
                  <motion.div 
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center justify-center lg:justify-start gap-4 mb-8"
                  >
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-mono uppercase tracking-[0.5em] text-muted">BCA AI Candidate</span>
                  </motion.div>
                  
                  <motion.h1 
                    variants={{ 
                      hidden: { opacity: 0, y: 80, rotate: 2 }, 
                      visible: { opacity: 1, y: 0, rotate: 0 } 
                    }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] font-black tracking-tighter uppercase italic mb-8 text-white"
                  >
                    Pawan <br />
                    <span className="text-accent">Tiwari</span>
                  </motion.h1>
                </div>
                
                {stage === 'revealed' && (
                  <div className="space-y-10">
                    <motion.p 
                      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                      className="max-w-sm mx-auto lg:mx-0 text-xl md:text-2xl text-muted font-light leading-relaxed flex items-start gap-4"
                    >
                      <span className="text-accent text-3xl mt-1">/</span>
                      Highly motivated AI student specializing in Python and Data Intelligence.
                    </motion.p>

                    <motion.div
                      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                      className="flex flex-wrap justify-center lg:justify-start gap-6"
                    >
                      <motion.a 
                        href="#projects" 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex items-center gap-4 bg-accent text-bg px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs overflow-hidden transition-shadow hover:shadow-[0_0_50px_rgba(0,240,255,0.4)]"
                      >
                        <span className="relative z-10 text-black">Initialize Work</span>
                        <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1 text-black" size={20} />
                        <motion.div 
                          className="absolute inset-0 bg-white/30"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.a>
                      <motion.a 
                        href="#contact" 
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'var(--color-accent)' }}
                        className="px-10 py-5 rounded-2xl border border-white/10 font-bold uppercase tracking-widest text-xs transition-all hover:text-accent text-white"
                      >
                        Contact Source
                      </motion.a>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center lg:items-start gap-4"
              >
                <div className="flex gap-2">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-2 h-2 bg-accent rounded-full" 
                  />
                  <span className="text-xs font-mono uppercase tracking-[0.4em] text-muted">
                    {stage === 'booting' ? 'System Rebooting...' : stage === 'scanning' ? 'Initializing Bio-Scan...' : 'Projecting Identity...'}
                  </span>
                </div>
                <div className="h-2 w-48 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: stage === 'booting' ? '15%' : stage === 'scanning' ? '33%' : '100%' }}
                    className="h-full bg-accent"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Robot - Back in action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative flex justify-center items-center order-first lg:order-last"
        >
          <Robot 
            isScanning={stage === 'scanning'} 
            displayText={getRobotText()} 
            beamTarget={
              stage === 'revealed' ? 'floor' : 
              stage === 'projecting_bio' ? 'floor' : 'floor'
            }
          />
        </motion.div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-6 bottom-12 hidden lg:flex flex-col items-center gap-12 pointer-events-none">
        <div className="w-[1px] h-24 bg-white/20" />
        <span className="vertical-rl rotate-180 text-[10px] uppercase tracking-[0.4em] font-mono text-muted/50 whitespace-nowrap">
          Creative Developer — Pawan Tiwari 
        </span>
      </div>
    </section>
  );
}

