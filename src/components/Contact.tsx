import { motion } from 'motion/react';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black overflow-hidden glow-mesh">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_auto_1fr] gap-20 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-mono text-sm">[06]</span>
            <span className="h-px w-12 bg-accent/40" />
            <span className="text-muted font-mono uppercase tracking-[0.4em] text-[10px]">Signal Link</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black italic uppercase mb-10 leading-[0.8] tracking-tighter">
            Let's <br />
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted leading-relaxed font-light text-xl max-w-md mb-12">
            Establishing a direct communication  requests 24/7.
          </p>
          
          <div className="flex flex-col gap-8">
            <a href="mailto:pt0996191@gmail.com" className="group flex items-center gap-6 text-2xl font-black italic tracking-tighter uppercase italic">
               <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 group-hover:bg-accent group-hover:text-bg group-hover:border-accent transition-all duration-500 shadow-2xl">
                  <Mail size={24} />
               </div>
               <span className="group-hover:text-accent transition-colors duration-500">pt0996191@gmail.com</span>
            </a>
            
            <div className="flex gap-6 mt-4">
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://github.com/i-pawanhack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 hover:border-accent hover:text-accent transition-all duration-500"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://www.linkedin.com/in/pawan-tiwari-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 hover:border-accent hover:text-accent transition-all duration-500"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="hidden lg:block w-px h-64 bg-white/5" />

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glass-card p-12 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Send size={120} className="-rotate-12" />
          </div>

          <form className="flex flex-col gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div className="flex flex-col gap-3 group">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-muted font-mono group-focus-within:text-accent transition-colors">Identification</label>
                  <span className="text-[8px] font-mono text-muted/30">KEY: NAME</span>
                </div>
                <input 
                  type="text" 
                  placeholder="NAME"
                  className="bg-white/3 border border-white/5 rounded-2xl px-6 py-5 outline-hidden focus:border-accent focus:bg-accent/5 transition-all text-white font-mono text-sm placeholder:text-muted/40"
                />
              </div>

              <div className="flex flex-col gap-3 group">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-muted font-mono group-focus-within:text-accent transition-colors">Routing_Path</label>
                  <span className="text-[8px] font-mono text-muted/30">KEY: EMAIL</span>
                </div>
                <input 
                  type="email" 
                  placeholder="USER@DOMAIN.COM"
                  className="bg-white/3 border border-white/5 rounded-2xl px-6 py-5 outline-hidden focus:border-accent focus:bg-accent/5 transition-all text-white font-mono text-sm placeholder:text-muted/40"
                />
              </div>
              
              <div className="flex flex-col gap-3 group">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-muted font-mono group-focus-within:text-accent transition-colors">Data_Packet</label>
                  <span className="text-[8px] font-mono text-muted/30">KEY: MSG</span>
                </div>
                <textarea 
                  rows={4}
                  placeholder="ASK_QUERY..."
                  className="bg-white/3 border border-white/5 rounded-2xl px-6 py-5 outline-hidden focus:border-accent focus:bg-accent/5 transition-all text-white font-mono text-sm placeholder:text-muted/40 resize-none"
                />
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-4 w-full bg-accent text-bg font-black py-6 rounded-2xl flex items-center justify-center gap-4 transition-all hover:shadow-[0_0_50px_rgba(0,240,255,0.4)] relative overflow-hidden uppercase tracking-[0.4em] text-xs"
            >
              <span className="relative z-10">TRANSMIT_INQUIRY</span>
              <Send size={20} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              <motion.div 
                className="absolute inset-0 bg-white/40"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.button>

            <div className="mt-4 flex items-center gap-3 justify-center opacity-30">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[8px] font-mono uppercase tracking-widest text-muted">Ready for transmission</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
