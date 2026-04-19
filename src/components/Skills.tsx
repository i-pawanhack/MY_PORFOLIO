import { motion } from 'motion/react';
import { Code2, Palette, Database, Zap, Cpu, BarChart3 } from 'lucide-react';

export default function Skills() {
  const skills = [
    { 
      category: 'Technical Skills', 
      icon: Code2, 
      items: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'] 
    },
    { 
      category: 'AI / Data Skills', 
      icon: Cpu, 
      items: ['Machine Learning', 'Data Analysis', 'Data Visualization', 'NLP Basics'] 
    },
    { 
      category: 'Tools', 
      icon: Database, 
      items: ['Power BI', 'Jupyter Notebook', 'GitHub'] 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-32 px-6 bg-black overflow-hidden glow-mesh">
      {/* Decorative flair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <span className="text-secondary font-mono text-sm">[02]</span>
              <span className="h-px w-12 bg-secondary/40" />
              <span className="text-muted font-mono uppercase tracking-[0.4em] text-[10px]">Expertise</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]"
            >
              Mastered <br />
              <span className="text-gradient">Skills</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-md text-muted leading-relaxed font-light text-xl"
          >
            Deploying a comprehensive suite of AI architectures and analytical frameworks to decode complex operational challenges.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, idx) => (
            <motion.div 
              key={skill.category}
              variants={item}
              className="glass-card p-12 rounded-[2.5rem] group hover:border-accent/30 transition-all duration-700 relative overflow-hidden backdrop-blur-2xl"
            >
              {/* Complex Radar Scanning Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(0,240,255,0.08)_25%,transparent_50%)]"
                />
                <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_50%,transparent_50%,rgba(0,0,0,0.5)_100%)" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl mb-12 group-hover:bg-accent group-hover:text-bg transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg] shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                  <skill.icon size={32} strokeWidth={1.5} />
                </div>

                <div className="mb-10">
                   <h3 className="text-3xl font-black mb-3 group-hover:text-accent transition-colors uppercase tracking-tight italic">
                    {skill.category}
                  </h3>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                    />
                    <span className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">Module_Status: Active</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {skill.items.map((it, i) => (
                    <motion.div 
                      key={it} 
                      whileHover={{ x: 12 }}
                      className="flex items-center justify-between group/item py-1"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-accent/30 tracking-tighter">0{i+1}</span>
                        <span className="text-muted/60 group-hover:text-white transition-colors font-mono text-sm uppercase tracking-wider">{it}</span>
                      </div>
                      <div className="h-px flex-1 mx-4 bg-white/5 group-hover:bg-accent/20 transition-colors" />
                      <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-accent transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 right-8 opacity-20 font-mono text-[8px] tracking-[1em] uppercase text-muted -rotate-90 origin-right translate-x-full">
                Encrypted_Data
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
