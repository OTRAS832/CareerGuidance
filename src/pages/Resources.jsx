import React from 'react';
import { MessageCircle, Youtube, ArrowRight } from 'lucide-react';
import { BLOGS, LINKS } from '../data/constants';

const Resources = () => {
    return (
        <div className="pt-32 pb-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-2 font-serif">Resources & Insights</h2>
                    <p className="text-slate-500">Stay updated with the latest in Career, Exams, and Tech.</p>
                </div>
                <div className="flex gap-4">
                    <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border border-emerald-100 text-emerald-700 rounded-full font-medium hover:bg-emerald-50 transition-colors shadow-sm">
                        <MessageCircle size={20} /> Join WhatsApp
                    </a>
                    <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border border-red-100 text-red-600 rounded-full font-medium hover:bg-red-50 transition-colors shadow-sm">
                        <Youtube size={20} /> Subscribe Channel
                    </a>
                </div>
            </div>

            {/* Infinite Horizontal Scroll */}
            <div className="relative w-full py-12 bg-slate-50 border-y border-slate-100">
                <div className="flex w-max animate-scroll gap-8 px-6 hover:[animation-play-state:paused]">
                    {[...BLOGS, ...BLOGS, ...BLOGS].map((blog, i) => (
                        <div key={i} className="w-96 p-8 bg-white rounded-2xl shadow-sm border border-slate-200 flex-shrink-0 cursor-pointer hover:border-emerald-300 transition-all group">
                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3 block">Article</span>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2 group-hover:text-emerald-700 transition-colors font-serif">{blog}</h3>
                            <div className="flex items-center text-sm text-slate-500 gap-2 font-medium">
                                <span>Read Full Article</span> <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;