export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-display font-bold tracking-tighter uppercase">PT<span className="text-muted">.</span></span>
          <p className="text-muted text-sm">© {currentYear} Pawan Tiwari — Making the digital world a bit more beautiful.</p>
        </div>
        
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-muted">
           <a href="#" className="hover:text-accent transition-colors">Privacy</a>
           <a href="#" className="hover:text-accent transition-colors">Terms</a>
           <a href="#" className="hover:text-accent transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
