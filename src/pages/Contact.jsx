import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    // Accessing ENV variables for potential API use
    const API_URL = import.meta.env.VITE_API_ENDPOINT;

    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Here you would normally fetch(API_URL + '/contact', { ... })
        // For now, we simulate:
        setTimeout(() => {
            setLoading(false);
            setNotification("We will contact you shortly in 2 hours.");
            e.target.reset();
            setTimeout(() => setNotification(null), 5000);
        }, 2000);
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
                <div>
                    <h2 className="text-5xl font-bold mb-6 text-slate-900">Let's Build Something <br />Great Together.</h2>
                    <p className="text-slate-600 text-lg mb-12">
                        Whether you are a student seeking guidance, a government body needing security, or a startup founder ready to scale.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100"><Mail className="text-emerald-600" size={24} /></div>
                            <div>
                                <p className="text-sm text-slate-500 mb-1">Email Us</p>
                                <p className="text-xl font-medium tracking-wide text-slate-900">info@maawaabroitsolutions.com</p>
                            </div>
                        </div>
                        <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                            <p className="text-blue-700 text-sm font-bold">✨ Promise</p>
                            <p className="text-slate-700 mt-1">We respond to all pilot requests within 24 hours.</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm text-slate-500 mb-2 font-medium">Your Name</label>
                                <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-900 placeholder-slate-400 transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm text-slate-500 mb-2 font-medium">I am interested in</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-900 transition-all appearance-none cursor-pointer">
                                    <option>Career Guidance</option>
                                    <option>OTRAS Pilot (Govt)</option>
                                    <option>Startup Support</option>
                                    <option>Other Services</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-8">
                            <label className="block text-sm text-slate-500 mb-2 font-medium">Message</label>
                            <textarea required rows="4" placeholder="Tell us about your requirements..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-900 placeholder-slate-400 transition-all"></textarea>
                        </div>
                        <button disabled={loading} className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-bold text-lg text-white transition-all flex justify-center items-center gap-2 shadow-lg shadow-emerald-200">
                            {loading ? (
                                <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</span>
                            ) : "Send Request"}
                        </button>
                    </form>

                    {/* Notification Toast */}
                    <AnimatePresence>
                        {notification && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                className="absolute -bottom-20 left-0 right-0 mx-auto w-max max-w-full bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50"
                            >
                                <CheckCircle2 className="text-emerald-400" />
                                <span className="font-semibold">{notification}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Contact;