import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, ChevronRight, Calendar, MessageSquare, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ recruiterMode }) => {
    return (
        <section id="contact" className="py-40 mt-20 relative overflow-hidden bg-slate-950/20" style={{ marginTop: "40px", paddingTop: "50px" }}>
            {/* Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-sky-500/10 blur-[150px] -z-10" />

            <div className="container relative z-10 px-4">
                {/* Section divider */}
                <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent mb-20" />

                <div className="max-w mx-auto">
                    <div className="glass-card p-12 md:p-24 border-white/5 relative overflow-hidden text-center bg-white/[0.01]">
                        {/* Decorative Grid background */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                            style={{ margin: "20px" }}
                        >
                            <span className="text-sky-500 font-black text-sm uppercase tracking-[0.3em] mb-6 block">Connection</span>
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=snehshah1675@gmail.com&su=Let%27s%20Connect&body=Hi%20Sneh,%0D%0A%0D%0A" className="hover:opacity-80 transition-opacity cursor-pointer">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Let's Connect</span>
                                </a>
                            </h2>

                            <div className="max-w mx-auto mb-16">
                                <p className="text-slate-400 text-lg md:text-2xl mb-8 leading-relaxed font-medium italic">
                                    "I design systems that scale, perform, and last. Let's build something impactful together."
                                </p>
                                {/* <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                                    Currently open to senior engineering roles and high-scale distributed systems opportunities.
                                    Whether you have a specific opening or just want to brainstorm, I'm always game for a technical deep dive.
                                </p> */}
                            </div>

                            {/* <div className="flex flex-wrap justify-center gap-6 mb-16">
                                {[
                                    { icon: <Calendar size={20} />, label: 'Schedule a Chat', link: '#', primary: true },
                                    { icon: <MessageSquare size={20} />, label: 'Let’s Collaborate', link: `mailto:${portfolioData.personal.email}`, primary: false },
                                ].map((item, i) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.link}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl ${item.primary ? 'bg-sky-500 text-white shadow-sky-500/20 hover:bg-sky-400' : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'}`}
                                    >
                                        {item.icon} {item.label}
                                    </motion.a>
                                ))}
                            </div> */}

                            <div className="flex justify-center gap-10" style={{ margin: "20px" }}>
                                {[
                                    { icon: <Github size={24} />, link: portfolioData.personal.github },
                                    { icon: <Twitter size={24} />, link: portfolioData.personal.twitter },
                                    { icon: <Linkedin size={24} />, link: portfolioData.personal.linkedin },
                                    { icon: <Mail size={24} />, link: `mailto:${portfolioData.personal.email}` },
                                ].map((item, i) => (
                                    <motion.a
                                        key={i}
                                        href={item.link}
                                        whileHover={{ scale: 1.2, color: '#0ea5e9' }}
                                        className="text-slate-500 transition-all p-2"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        {item.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Crafted for Excellence.</p>
                    <div className="flex gap-10">
                        <a href="#about" className="hover:text-white transition-colors">Hero</a>
                        <a href="#experience" className="hover:text-white transition-colors">Timeline</a>
                        <a href="#projects" className="hover:text-white transition-colors">Case Studies</a>
                        <a href="#skills" className="hover:text-white transition-colors">Arsenal</a>
                    </div>
                </footer> */}
            </div>
        </section>
    );
};

export default Contact;
