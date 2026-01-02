import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PILLARS } from '../data/constants';

const Home = () => {
    return (
        <>
            <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
                {/* Abstract Light Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] font-serif">
                            Building India's Future <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600 italic pr-2">
                                Powered by Technology
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        Career guidance for individuals. OTRAS for government systems. <br className="hidden md:block" />
                        Technology & startup support for India's builders.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="flex flex-col md:flex-row justify-center gap-4 px-4"
                    >
                        <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-slate-200">
                            Get Career Guidance <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/products" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-700 transition-all shadow-sm">
                            Explore OTRAS
                        </Link>
                        <Link to="/startup" className="px-8 py-4 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full font-semibold hover:bg-emerald-100 transition-all">
                            Start Your Startup Journey
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="py-24 bg-slate-50/50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {PILLARS.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${p.color} flex items-center justify-center mb-6`}>
                                    <p.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-slate-900 font-serif">{p.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;