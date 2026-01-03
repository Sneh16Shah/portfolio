import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Terminal, ArrowUpRight, Layers, Target, Info, CheckCircle2 } from 'lucide-react';

const Projects = ({ recruiterMode }) => {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section id="projects" className="py-40 mt-32 relative bg-slate-900/10" style={{ margin: "40px", padding: "50px" }}>
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-sky-500/5 blur-[120px] -z-10" />

            <div className="container px-4">
                {/* Section divider */}
                <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent mb-20" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    {/* <span className="text-sky-500 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Portfolio</span> */}
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Creations</span></h2>
                </motion.div>

                <div className={`grid grid-cols-1 ${recruiterMode ? 'lg:grid-cols-2' : 'lg:grid-cols-6'} gap-10`}>
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900/50 backdrop-blur-xl hover:border-sky-500/30 transition-all duration-500 flex flex-col ${recruiterMode ? 'col-span-1' : (index === 0 ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2')}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 md:p-10 flex flex-col justify-between h-full relative z-10">
                                <div className="flex flex-col h-full">
                                    <div className="flex flex-col items-center text-center mb-6">
                                        <h3 className="text-3xl font-black text-white group-hover:text-sky-400 transition-colors tracking-tight leading-tight mb-4" style={{ marginTop: "10px"}}>
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-3 shrink-0">
                                            {project.github !== '#' && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.link !== '#' && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition-all border border-sky-500/20 hover:border-sky-500/40">
                                                    <ArrowUpRight size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-base leading-relaxed mb-auto font-medium text-center" style={{ margin: "5px" }}>
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-2 mt-8 pt-6 border-t border-white/5" style={{ marginBottom: "10px" }}>
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1.5 rounded-xl bg-white/5 text-[13px] font-bold text-slate-300 border border-white/5 group-hover:border-sky-500/30 group-hover:text-sky-300 transition-all">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Architecture Pattern in Background */}
                            <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none transform rotate-12">
                                <Layers size={200} />
                            </div>
                        </motion.div>
                    ))}

                    {/* More Card */}
                    {!recruiterMode && (
                        <div className="md:col-span-2 rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center justify-center p-12 bg-white/[0.01] hover:bg-white/[0.02] transition-colors group cursor-wait">
                            <Info size={40} className="text-slate-700 mb-4 group-hover:text-sky-500/50 transition-colors" />
                            <span className="text-slate-500 font-bold text-base text-center group-hover:text-slate-400 transition-colors">Exploring more high-scale <br /> system designs...</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
