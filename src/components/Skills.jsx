import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Skills = ({ recruiterMode }) => {
    // Flatten and deduplicate skills
    const allSkills = [
        ...portfolioData.skills.foundations,
        ...portfolioData.skills.infrastructure,
        ...portfolioData.skills.observability
    ];

    // Helper to get Simple Icons slug
    const getIconSlug = (name) => {
        const slugs = {
            "Golang": "go",
            "C++": "cplusplus",
            "Node.js": "nodedotjs",
            "GitHub Actions": "githubactions",
            "SQL": "postgresql", // Defaulting to postgres for generic SQL
            "Google Cloud": "googlecloud",
            "AWS": "amazonaws"
        };
        return slugs[name] || name.toLowerCase().replace('.', 'dot').replace(/\s+/g, '');
    };

    const SkillCard = ({ skill }) => (
        <div className="flex items-center gap-4 px-6 py-4 bg-slate-900/50 border border-white/5 rounded-2xl backdrop-blur-sm shrink-0 min-w-[200px]">
            <img
                src={`https://cdn.simpleicons.org/${getIconSlug(skill.name)}/38bdf8`}
                alt={skill.name}
                className="w-8 h-8 opacity-80"
                onError={(e) => { e.target.style.display = 'none'; }} // Fallback if icon fails
            />
            <span className="text-slate-200 font-bold text-lg">{skill.name}</span>
        </div>
    );

    return (
        <section id="skills" className="py-40 mt-20 relative overflow-hidden bg-slate-950/30" style={{ marginTop: "40px", paddingTop: "50px" }}>
            <div className="container relative z-10 px-4">
                {/* Section divider */}
                <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent mb-20" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                    style={{ margin: "10px" }}
                >
                    <span className="text-sky-500 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Expertise</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Technical <span className="text-sky-400">Weaponry</span></h2>
                </motion.div>

                {/* Infinite Carousel */}
                <div className="relative w-full overflow-hidden mask-linear-gradient mb-40">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: [0, -1920] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {/* Triple the skills list to ensure seamless looping on large screens */}
                        {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
                            <SkillCard key={`${skill.name}-${i}`} skill={skill} />
                        ))}
                    </motion.div>
                </div>

                {/* Enhanced Achievement Cards */}
                <div className="space-y-12 max-w-7xl mx-auto" style={{ marginTop: "70px", paddingTop: "50px" }}>
                    <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                        <div className="hidden sm:block h-[1px] md:h-[2px] flex-grow bg-gradient-to-r from-transparent to-white/10" />
                        <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-white tracking-tight flex items-center justify-center gap-3 md:gap-4 mx-auto sm:mx-0 text-center sm:text-left">
                            <Award className="text-sky-500 w-6 h-6 md:w-8 md:h-8 shrink-0" /> <span className="break-words">Recognition & Rankings</span>
                        </h3>
                        <div className="hidden sm:block h-[1px] md:h-[2px] flex-grow bg-gradient-to-l from-transparent to-white/10" />
                    </div>  

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioData.achievements.map((ach, i) => (
                            <motion.div
                                key={ach.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card p-6 border-white/5 hover:border-sky-500/20 group relative overflow-hidden !rounded-none"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <ShieldCheck size={16} className="text-sky-400" />
                                </div>

                                <div className="flex flex-col h-full text-center p-2">
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <h4 className="text-lg md:text-xl font-black text-white group-hover:text-sky-400 transition-colors tracking-tight leading-tight">
                                            {ach.title}
                                        </h4>
                                        {ach.link && (
                                            <a href={ach.link} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors shrink-0">
                                                <ArrowUpRight size={18} />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-slate-500 text-xs md:text-sm font-bold mb-4">{ach.rank}</p>
                                    <p className="text-slate-400 text-xs leading-relaxed mt-auto pt-4 border-t border-white/5">{ach.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
