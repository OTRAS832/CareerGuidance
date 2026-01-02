import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Changed to Link
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Startup Support', path: '/startup' },
    { name: 'Resources', path: '/resources' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass-panel shadow-sm' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-1 font-serif">
                    MAAWAABRO<span className="w-2 h-2 rounded-full bg-emerald-600 mt-2"></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-emerald-700 font-bold' : 'text-slate-600 hover:text-emerald-600'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-colors shadow-lg shadow-slate-200">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="xl:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu (Keep existing AnimatePresence logic here) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {NAV_LINKS.map((link) => (
                                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50">
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2 text-lg font-bold text-emerald-600">Contact Us</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;