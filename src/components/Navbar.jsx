import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Rocket, FileText, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-500">
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[3px] bg-sky-500 origin-left z-50 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                style={{ scaleX }}
            />

            <div className="container mx-auto px-4">
                <div className={`
          mx-auto px-8 py-3 rounded-full border 
          transition-all duration-500 backdrop-blur-2xl
          ${scrolled ? 'bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/10 scale-95' : 'bg-white/5 border-white/5'}
          flex items-center justify-between gap-12
        `}>
                    <div className="flex items-center gap-12">
                        <motion.a
                            href="#about"
                            className="flex items-center gap-2 group shrink-0"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] transition-all">
                                <Rocket size={20} className="text-white" />
                            </div>
                            <span className="text-white font-black tracking-tighter text-xl uppercase hidden sm:inline">{portfolioData.personal.name.split(' ')[0]}</span>
                        </motion.a>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-400 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all"
                            title="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* Resume Button - Solid and High Contrast */}
                        <a
                            href={portfolioData.personal.resume}
                            style={{
                                color: "black",
                                padding: "10px"
                            }}
                            className="hidden sm:flex  bg-white items-center gap-2 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <FileText size={16} strokeWidth={3} /> <span>Resume</span>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-24 left-4 right-4 p-8 bg-slate-950 border border-slate-800 border-white/10 text-center z-50 shadow-2xl overflow-hidden"
                        style={{ "padding": "10px" }}
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white text-lg font-black uppercase tracking-widest"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">

                                <a
                                    href={portfolioData.personal.resume}
                                    className="bg-sky-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl hover:bg-sky-400 transition-all"
                                // style={{ "marginBottom": "10px" }}
                                >
                                    <FileText size={20} strokeWidth={3} /> Download Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
