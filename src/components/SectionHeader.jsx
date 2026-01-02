import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, align = "center" }) => (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // 'font-serif' applies the new Classy Playfair Display font
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif"
        >
            {title}
        </motion.h2>
        {subtitle && <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light">{subtitle}</p>}
    </div>
);

export default SectionHeader;