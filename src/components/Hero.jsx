import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Download, Sparkles, Brain } from 'lucide-react';

const Hero = ({ theme }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHeroResumeHovered, setIsHeroResumeHovered] = useState(false);

    const springConfig = { damping: 25, stiffness: 700 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="about" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-32">
            {/* Interactive Spotlight */}
            {theme === 'dark' && (
                <motion.div
                    className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${dx}px ${dy}px, rgba(14, 165, 233, 0.15), transparent 80%)`
                    }}
                />
            )}

            <div className="container relative z-10 px-6">
                <div className="max-w-10xl mx-auto text-center flex flex-col items-center">
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-lg shadow-sky-500/5"
                    >
                        <Sparkles size={14} /> Available for new opportunities
                    </motion.div> */}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-5xl font-black mb-8 leading-[1.1] tracking-tight text-white max-w-6xl"
                    >
                        Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Sneh Shah</span> — a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Software Engineer</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center gap-6 mb-12"
                        style={{ "margin": "30px" }}
                    >
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto font-medium">
                            Software Engineer with 2 year experience building scalable, high-performance distributed systems across fintech and cloud platforms. Currently working at Coinbase, where I design and optimize Kafka-based pipelines, GraphQL services, and observability-driven systems supporting large-scale user workflows. I enjoy solving complex backend problems, improving system reliability, and building production-ready solutions that scale to millions of users.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-8"
                    >
                        <motion.a
                            href={portfolioData.personal.resume}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: isHeroResumeHovered ? '#38bdf8' : '#0ea5e9', // Sky-400 : Sky-500
                                color: 'white',
                                padding: '5px 10px'
                            }}
                            onMouseEnter={() => setIsHeroResumeHovered(true)}
                            onMouseLeave={() => setIsHeroResumeHovered(false)}
                            className="group relative rounded-2xl font-black text-lg flex items-center gap-4 overflow-hidden shadow-[0_20px_40px_rgba(14,165,233,0.3)] transition-all"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Download size={24} strokeWidth={3} /> <span>📄 Download Resume (PDF)</span>
                        </motion.a>
                        {/* 
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: '#333c3fff',
                                color: 'white',
                                padding: '5px 10px'
                            }}
                            className="px-10 py-5 bg-white/5 text-white border border-white/20 rounded-2xl font-black text-lg flex items-center gap-4 hover:bg-white/10 transition-all backdrop-blur-md shadow-xl"
                        >
                            <Brain size={24} strokeWidth={3} /> <span>🧠 View Case Studies</span>
                        </motion.a> */}
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Ethereal Glows */}
            {theme === 'dark' && (
                <>
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                    <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>
                </>
            )}
        </section>
    );
};

export default Hero;
