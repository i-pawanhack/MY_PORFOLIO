import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'internship',
    title: 'AI Virtual Internship',
    organization: 'Codec technologies & Alfido tech (Supported by GDG)',
    duration: '1 Month | Grade A',
    description: 'Learned ML libraries and AI concepts through virtual training and hands-on projects.',
    icon: Briefcase,
    tools: ['Python', 'ML Libraries', 'AI Concepts']
  },
  {
    type: 'internship',
    title: 'IoT & Robotics Internship',
    organization: 'Eduskills',
    duration: 'Current / Recent',
    description: 'Specialized training in IoT systems and Robotics architectures.',
    icon: Cpu,
    tools: ['IoT', 'Robotics']
  }
];

const certifications = [
  {
    title: 'Presentation — ICACTA 2025',
    detail: 'Hybrid AI for Deepfake Detection',
    date: '2025',
    icon: Award
  },
  {
    title: 'Power BI Dashboard Showdown',
    detail: 'Invertis University',
    date: '2025',
    icon: BarChart3
  },
  {
    title: 'ML / AI Courses',
    detail: 'Ongoing learning in AI Development',
    date: 'Ongoing',
    icon: GraduationCap
  }
];

import { Cpu, BarChart3 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-black overflow-hidden glow-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <div className="mb-12 flex flex-col gap-4">
              <span className="text-muted font-mono uppercase tracking-[0.4em] text-[10px] flex items-center gap-4">
                <span className="text-accent">[04]</span>
                <span className="h-px w-12 bg-accent/30" />
                Evolutionary Journey
              </span>
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
                My <br />
                <span className="text-gradient">Journey</span>
              </h2>
            </div>
            
            <div className="relative border-l border-white/5 ml-4 space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-[3px] border-black shadow-[0_0_20px_rgba(0,240,255,0.5)]" />
                  
                  <div className="glass-card p-10 rounded-[2.5rem] group hover:border-accent/40 transition-all duration-700 bg-surface/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl group-hover:bg-accent group-hover:text-bg transition-all duration-500 shadow-xl">
                        <exp.icon size={24} />
                      </div>
                      <span className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] font-bold">{exp.duration}</span>
                    </div>
                    <h3 className="text-3xl font-black mb-1 italic tracking-tight uppercase group-hover:text-accent transition-colors">{exp.title}</h3>
                    <p className="text-muted/40 text-xs mb-6 font-mono tracking-widest uppercase">{exp.organization}</p>
                    <p className="text-muted/80 leading-relaxed mb-8 font-light text-lg">{exp.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.tools.map(tool => (
                        <span key={tool} className="text-[9px] py-1 px-4 rounded-full bg-white/5 border border-white/5 text-muted/60 uppercase tracking-widest font-mono group-hover:border-accent/20 transition-colors">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="mb-12 flex flex-col gap-4">
              <span className="text-muted font-mono uppercase tracking-[0.4em] text-[10px] flex items-center gap-4">
                <span className="text-secondary">[05]</span>
                <span className="h-px w-12 bg-secondary/30" />
                Validations
              </span>
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
                Expert <br />
                <span className="text-gradient">Status</span>
              </h2>
            </div>

            <div className="grid gap-6">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-[2rem] group flex items-center gap-8 hover:bg-white/[0.03] transition-all border-white/5 duration-500"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl group-hover:bg-accent group-hover:text-bg transition-all duration-500 shrink-0 shadow-2xl">
                    <cert.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar size={14} className="text-accent" />
                      <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{cert.date}</span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight group-hover:text-accent transition-colors italic uppercase">{cert.title}</h3>
                    <p className="text-muted/50 text-sm font-light uppercase tracking-wider">{cert.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
