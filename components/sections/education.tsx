"use client";

import { motion } from "framer-motion";
import data from "@/data/portfolio.json";

export function Education() {
    const { education } = data;

    return (
        <motion.section
            id="education"
            className="py-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
                {education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-slate-500" />
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                            <div className="text-sm text-gray-500 font-medium">{edu.institution} • {edu.year}</div>
                            <p className="text-gray-600 leading-relaxed mt-2">{edu.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
