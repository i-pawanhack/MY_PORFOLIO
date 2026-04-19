import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="relative min-h-screen py-32 px-6 overflow-hidden bg-black">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Side (Circular Profile with Projection) */}
          <div className="lg:col-span-5 flex justify-center order-first lg:order-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[320px] aspect-square"
            >
              {/* Rotating Outer Tech Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-accent/30 rounded-full"
              />
              
              {/* Pulsing Glow */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse" />

              {/* Main Circular Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 p-2 bg-surface/20 backdrop-blur-xl group">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src="/my photo.jpg.jpg" 
                    alt="Pawan Tiwari" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Circular Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 border-[8px] border-black/20 rounded-full pointer-events-none" />
                </div>
              </div>

              {/* Orbiting Data Node */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(0,240,255,0.8)]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7 space-y-12"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-accent font-mono text-sm">[01]</span>
              <span className="h-px flex-1 bg-white/5" />
              <span className="text-muted font-mono uppercase tracking-[0.3em] text-[10px]">INTRODUCTION</span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
                About <span className="text-gradient"></span>
              </motion.h2>
              
              <div className="space-y-6 text-muted font-light leading-relaxed text-lg max-w-2xl">
                <motion.p variants={itemVariants}>
                  Hi, I’m Pawan Tiwari, a passionate and curious developer with a strong interest in building creative and impactful digital experiences. I enjoy turning ideas into reality through code and continuously learning new technologies to improve my skills.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I have experience in Python, JavaScript, and web development, along with a growing interest in AI/ML and data science. From developing projects to solving real-world problems, I focus on writing clean, efficient, and scalable code.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I believe in learning by doing, and every project in my portfolio reflects my dedication, creativity, and problem-solving mindset.
                </motion.p>
              </div>
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 items-end">
              <div className="space-y-2">
                <span className="block text-[8px] font-mono text-muted uppercase tracking-widest">Location</span>
                <span className="block text-sm font-medium">BAREILLY /INDIA </span>
              </div>
              <div className="space-y-2">
                <span className="block text-[8px] font-mono text-muted uppercase tracking-widest">Focus</span>
                <span className="block text-sm font-medium">AI / ML</span>
              </div>
              
              <div className="flex items-center gap-4 sm:justify-end">
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/i-pawanhack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:border-accent hover:text-accent transition-all duration-300"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/pawan-tiwari-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:border-accent hover:text-accent transition-all duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
