import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, Globe, Zap, BarChart3, Binary } from 'lucide-react';

const Experience = ({ theme }) => {
    return (
        <section id="experience" className="py-40 relative overflow-hidden bg-slate-950/20">
            <div className="container relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-block">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                            Professional <span className="text-sky-400">Chronicles</span>
                        </h2>
                        <div className="h-1.5 w-full bg-sky-500 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.5)]" />
                    </div>
                </motion.div>

                <div className="max-w-7xl mx-auto relative px-4">
                    <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-500/50 via-indigo-500/50 to-transparent md:-translate-x-1/2 hidden sm:block" />

                    <div className="space-y-16">
                        {portfolioData.experience.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{ marginTop: "20px" }}
                                className={`relative flex flex-col md:flex-row items-start gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Node */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-slate-950 border-4 border-sky-500 rounded-full z-20 md:-translate-x-1/2 shadow-[0_0_15px_rgba(14,165,233,0.8)] flex items-center justify-center hidden sm:flex">
                                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-ping" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] mx-auto sm:mx-0">
                                    <div className="glass-card !rounded-3xl p-10 md:p-14 hover:border-sky-500/30 transition-all duration-500 group relative overflow-hidden">

                                        <div className="flex flex-col gap-6 mb-8" style={{ margin: "10px" }}>
                                            <div className="flex items-center gap-4">
                                                {exp.logo && (
                                                    <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shrink-0">
                                                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="text-2xl font-black text-white group-hover:text-sky-400 transition-colors tracking-tight">
                                                        {exp.role}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                                                        {exp.company} <span className="h-1 w-1 bg-slate-600 rounded-full" /> {exp.location}
                                                    </div>
                                                    <span className="px-3 py-1 rounded-lg bg-sky-500/10 text-sky-300 text-[15px] font-black uppercase tracking-widest border border-sky-500/20">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-3 mt-2">
                                                {exp.techStack?.map(tech => (
                                                    <span key={tech} className="px-2 py-1 rounded-lg bg-white/5 text-slate-100 text-[15px] font-bold border border-white/5 group-hover:border-white/10 transition-all">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>


                                        <ul className="space-y-6" style={{ margin: "10px", padding: "10px" }}>
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="flex gap-4 text-sm md:text-base text-slate-400 leading-relaxed group/li" style={{ padding: "5px" }}>
                                                    <span className="text-sky-500 font-black shrink-0 mt-1 transition-transform group-hover/li:translate-x-1">→</span>
                                                    <span className={`${theme === 'light' ? 'group-hover/li:text-slate-900' : 'group-hover/li:text-slate-200'} transition-colors font-medium`}>
                                                        {point.split(' ').map((word, idx) => {
                                                            // Highlight numbers or percentages
                                                            if (word.match(/\d/)) return <span key={idx} className="text-sky-300 font-bold">{word} </span>;
                                                            return word + ' ';
                                                        })}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty spacer for md:flex-row-reverse layout */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
