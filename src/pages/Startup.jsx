import React from 'react';
import { motion } from 'framer-motion';
import { STARTUP_STEPS } from '../data/constants';

const Startup = () => {
    return (
        <div className="pt-32 pb-20 bg-slate-50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">End-to-End Startup Support</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">From napkin sketch to market dominance. We don't just build code; we build businesses.</p>
                </div>

                <div className="relative max-w-4xl mx-auto mt-20">
                    {/* Central Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />

                    {STARTUP_STEPS.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`relative flex items-center gap-8 mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="hidden md:block w-1/2" />

                                {/* Dot Node */}
                                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 bg-emerald-600 rounded-full border-[4px] border-white ring-4 ring-emerald-50 z-10 -translate-x-1/2 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Card */}
                                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                    <div className={`p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 ${isEven ? 'md:mr-12 text-right' : 'md:ml-12 text-left'}`}>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Startup;