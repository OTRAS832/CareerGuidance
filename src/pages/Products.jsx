import React from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Products = () => {
    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionHeader title="Our Products" subtitle="Scalable platforms built for Governments and Individuals." />

                {/* OTRAS SECTION */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-blue-50 rounded-[3rem] transform rotate-3 scale-95" />
                        <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200"><ShieldCheck size={32} /></div>
                                <h3 className="text-3xl font-bold text-slate-900 font-serif">OTRAS</h3>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {['One-Time Registration (OTR)', 'DigiLocker & Document Vault', 'AI-based Fraud Detection', 'Admit Card & Result Engine', 'Admin & Gov Dashboard'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-slate-700 font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Request Pilot</button>
                                <button className="px-8 py-3.5 text-slate-600 font-semibold hover:text-blue-600 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">Download Concept Note</button>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-sm tracking-wide mb-6 uppercase">Government Solution</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-serif">Secure. Scalable. <br />Trustworthy.</h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            A centralized digital platform for government exam registration, verification, and processing. Built for State Governments, PSCs, and Universities to eliminate fraud.
                        </p>
                    </div>
                </div>

                {/* GUIDANCE SECTION */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm tracking-wide mb-6 uppercase">People-First Platform</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-serif">Not Coaching. <br />Only Guidance.</h2>
                        <blockquote className="border-l-4 border-emerald-500 pl-6 mb-8 italic text-slate-600 text-lg font-serif">
                            "For the student feeling stuck, the fresher looking for a path, and the dreamer facing failure."
                        </blockquote>
                        <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200">
                            Book Guidance Session
                        </button>
                    </div>
                    <div className="relative">
                        <div className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl">
                            <h3 className="text-2xl font-bold mb-8 text-slate-900 font-serif">Career Paths We Cover</h3>
                            <div className="space-y-4">
                                {['Government Exams', 'IT & Software', 'Startups & Business', 'Creative Careers', 'International Opportunities'].map((path, i) => (
                                    <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center group cursor-pointer hover:border-emerald-200 transition-all">
                                        <span className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">{path}</span>
                                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;