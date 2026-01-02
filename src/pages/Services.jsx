import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES } from '../data/constants';

const Services = () => {
    return (
        <div className="pt-32 pb-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <SectionHeader title="Core Services" subtitle="Technical excellence meets strategic execution." />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((s, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-emerald-100 group">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl mb-6 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                                <s.icon size={24} className="text-slate-700 group-hover:text-emerald-600 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 font-serif">{s.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;