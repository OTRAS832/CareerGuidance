import React from 'react';
import { LINKS } from '../data/constants';

const Footer = () => (
    <footer className="bg-slate-50 py-12 text-center text-slate-500 text-sm border-t border-slate-200">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <span className="text-2xl font-bold text-slate-900 flex items-center gap-1 font-serif">
                    MAAWAABRO<span className="w-2 h-2 rounded-full bg-emerald-600 mt-2"></span>
                </span>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-emerald-600 transition-colors font-medium">Privacy</a>
                    <a href="#" className="hover:text-emerald-600 transition-colors font-medium">Terms</a>
                    <a href={LINKS.twitter} className="hover:text-emerald-600 transition-colors font-medium">Twitter</a>
                </div>
            </div>
            <p className="text-slate-400">© 2026 Maawaabro IT Solutions. All rights reserved. Made with precision in India.</p>
        </div>
    </footer>
);

export default Footer;