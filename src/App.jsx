import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { FileText, Target } from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [recruiterMode, setRecruiterMode] = useState(false);

  return (
    <div className={`selection:bg-sky-500/30 transition-colors duration-500 ${recruiterMode ? 'recruiter-theme' : 'bg-[#000814]'}`}>
      <Navbar recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />

      <main className={`transition-all duration-500 ${recruiterMode ? 'max-w-6xl mx-auto px-4 md:px-0 pt-32 pb-32' : ''}`}>
        <Hero recruiterMode={recruiterMode} />
        <Experience recruiterMode={recruiterMode} />
        <Projects recruiterMode={recruiterMode} />
        <Skills recruiterMode={recruiterMode} />
        <Contact recruiterMode={recruiterMode} />
      </main>

      {/* Recruiter Mode Helper Badge */}
      <AnimatePresence>
        {recruiterMode && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-28 right-8 z-[100] hidden lg:block"
          >
            <div className="bg-sky-600 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-sky-400/30">
              <Target size={20} className="animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest">Recruiter Mode Active</span>
                <span className="text-[10px] font-bold opacity-80 leading-tight">Optimized for scanning & PDF export</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm">
        <div className="bg-slate-950/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-2 flex items-center gap-2 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
          <a href={portfolioData.personal.resume} className="flex-1 bg-white text-black py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] text-center flex items-center justify-center gap-2">
            <FileText size={16} strokeWidth={3} /> RESUME
          </a>
          <a href="#contact" className="flex-1 bg-sky-500 text-white py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] text-center flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" /> CONTACT
          </a>
        </div>
      </div>

      {/* Footer Branding */}
      <footer className="py-40 border-t border-white/5 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-6xl md:text-4xl font-black text-white mb- tracking-tighter">
            Thank <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">You.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl font-medium max-w mx-auto mb-16 leading-relaxed">
            I appreciate you taking the time to explore my work and journey.
            Let's build something extraordinary together.
          </p>

          <div className="flex justify-center gap-12 mb-16"style={{"margin":"20px"}}>
            {[
              { label: 'GITHUB', link: portfolioData.personal.github },
              { label: 'LINKEDIN', link: portfolioData.personal.linkedin },
              { label: 'X / TWITTER', link: portfolioData.personal.twitter },
            ].map(link => (
              <a
                key={link.label}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-sky-400 transition-all text-xs font-black tracking-[0.3em] group relative"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-sky-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Sneh Shah • Ahmedabad, Gujarat, India
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
