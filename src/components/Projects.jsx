import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink, ChevronRight, Code2, Layers } from 'lucide-react';

const Projects = ({ theme }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="projects" className="py-32 md:py-40 relative overflow-hidden" style={{ marginTop: "40px" }}>
            {/* Background effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full -z-10" />

            <div className="container relative z-10 px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-block">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                            Curated <span className="text-sky-400">Creations</span>
                        </h2>
                        <div className="h-1.5 w-full bg-sky-500 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.5)]" />
                    </div>
                    <p className="text-slate-400 font-medium text-lg mt-6 max-w-xl mx-auto" style={{ marginTop: "20px" }}>
                        Systems and products I've built from the ground up
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="max-w-5xl mx-auto space-y-6" style={{ margin: "40px" }}>
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group"
                            style={{ padding: "10px" }}
                        >
                            <div className="glass-card !rounded-3xl relative overflow-hidden hover:border-sky-500/30 transition-all duration-500"
                                style={{ padding: 5 }}>

                                {/* Hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Animated side accent bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-indigo-500 rounded-l-3xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                                <div className="p-6 sm:p-8 md:p-12 relative z-10">
                                    <div className="flex flex-row items-start gap-4 sm:gap-6 md:gap-8">
                                        {/* Project Icon */}
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                                                <Code2 size={22} className="text-sky-400 sm:hidden" />
                                                <Code2 size={28} className="text-sky-400 hidden sm:block" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 mb-4">
                                                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-sky-400 transition-colors tracking-tight">
                                                    {project.title}
                                                </h3>
                                                {/* Action Buttons */}
                                                <div className="flex items-center gap-2">
                                                    {project.github && project.github !== '#' && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20 text-sm font-bold"
                                                            aria-label="View source on GitHub"
                                                        >
                                                            <Github size={14} />
                                                            <span className="hidden sm:inline">Source</span>
                                                        </a>
                                                    )}
                                                    {project.link && project.link !== '#' && (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition-all border border-sky-500/20 hover:border-sky-500/40 text-sm font-bold"
                                                            aria-label="View live demo"
                                                        >
                                                            <ExternalLink size={14} />
                                                            <span className="hidden sm:inline">Live</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-slate-400 text-base leading-relaxed font-medium mb-6 max-w-2xl">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map(t => (
                                                    <span
                                                        key={t}
                                                        className="px-3 py-1.5 rounded-lg bg-white/5 text-[13px] font-bold text-slate-300 border border-white/5 group-hover:border-sky-500/20 group-hover:text-sky-300 transition-all"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right: Arrow indicator */}
                                        <div className="hidden md:flex items-center shrink-0 self-center">
                                            <motion.div
                                                animate={hoveredIndex === index ? { x: 4 } : { x: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronRight size={24} className="text-slate-700 group-hover:text-sky-400 transition-colors" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Background decorative */}
                                <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none rotate-12">
                                    <Layers size={160} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
