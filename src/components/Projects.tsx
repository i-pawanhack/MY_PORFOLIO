import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Diabetes Prediction System',
      category: 'Machine Learning',
      image: '/diabetes.jpg.jpg',
      description: 'An ML-based system using Python and Scikit-learn to predict diabetes. Performed data preprocessing, feature scaling, and model evaluation.',
      tags: ['Python', 'Scikit-learn', 'SVM'],
      link: '#',
      github: 'https://github.com/i-pawanhack',
    },
    {
      title: 'Spam Email Detection',
      category: 'NLP / Security',
      image: '/spam.jpg.jpg',
      description: 'Built a spam classifier using Logistic Regression and Random Forest. Applied NLP techniques for text preprocessing.',
      tags: ['NLP', 'Random Forest', 'Python'],
      link: '#',
      github: 'https://github.com/i-pawanhack',
    },
    {
      title: 'Customer Churn Prediction',
      category: 'Business Analytics',
      image: '/customer.jpg.jpg',
      description: 'Created a prediction model using Pandas, NumPy, and Scikit-learn. Handled missing values, encoding, and feature selection.',
      tags: ['Pandas', 'NumPy', 'Scikit-learn'],
      link: '#',
      github: 'https://github.com/i-pawanhack',
    },
    {
      title: 'Stock Price Prediction',
      category: 'Finance / ML',
      image: '/stock.jpg.jpg',
      description: 'Implemented a stock price prediction model using Linear Regression. Visualized trends using Matplotlib.',
      tags: ['Matplotlib', 'Regression', 'Python'],
      link: '#',
      github: 'https://github.com/i-pawanhack',
    },
    
    
    
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-black overflow-hidden glow-mesh">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <span className="text-accent font-mono text-sm">[03]</span>
              <span className="h-px w-12 bg-accent/40" />
              <span className="text-muted font-mono uppercase tracking-[0.4em] text-[10px]">Projects</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]"
            >
              Selected <br />
              <span className="text-gradient">Work</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-md text-muted leading-relaxed font-light text-xl"
          >
           Projects and experiments focused on solving impactful problems using analytical and neural-inspired approaches.
          </motion.p>
        </div>

        <div className="flex flex-col border-t border-white/5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ 
                scale: 1.005,
                backgroundColor: 'rgba(0, 240, 255, 0.02)'
              }}
              className="group relative grid grid-cols-1 lg:grid-cols-[80px_180px_1fr_250px] items-center gap-10 py-12 border-b border-white/5 px-6 transition-all duration-700"
            >
              {/* Interactive Background Stream */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Bullet / Index */}
              <div className="font-mono text-xl font-black text-muted/20 group-hover:text-accent transition-colors flex flex-col gap-2">
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <span className="text-[7px] tracking-[0.4em] font-mono opacity-0 group-hover:opacity-100 transition-opacity animate-pulse text-secondary">PROJECT_OK</span>
              </div>

              {/* Technical Display / Image */}
              <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-white/5 group-hover:border-accent/30 transition-colors shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-t-2 border-accent rounded-full blur-[2px]"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-4xl font-black group-hover:text-accent transition-colors tracking-tighter uppercase italic">{project.title}</h3>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] px-3 py-1 rounded-full border border-white/10 text-muted/60 group-hover:border-accent/30 group-hover:text-accent transition-all">{project.category}</span>
                </div>
                <p className="text-muted/70 text-lg leading-relaxed max-w-2xl font-light">
                  {project.description}
                </p>
                
                {/* Visual Data Stream for Hover */}
                <div className="h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-1000 ease-out mt-2" />
              </div>

              {/* Actions & Tags */}
              <div className="flex flex-col items-center lg:items-end gap-8">
                <div className="flex flex-wrap justify-center lg:justify-end gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-muted uppercase tracking-widest bg-white/5 px-2 py-0.5 border border-transparent group-hover:border-white/5 group-hover:text-white transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link} 
                    className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 hover:border-white/40 transition-all"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 flex justify-center">
          <motion.a 
            href="https://github.com/i-pawanhack" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-transparent border border-white/10 rounded-2xl text-xs font-mono uppercase tracking-[0.5em] overflow-hidden transition-all hover:border-accent"
          >
            <span className="relative z-10 group-hover:text-accent transition-colors">Expand More
            </span>
            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
