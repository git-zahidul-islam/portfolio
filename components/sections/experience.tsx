"use client";

import { motion } from "framer-motion";
import data from "@/data/portfolio.json";

export function Experience() {
    const { experience } = data;

    return (
        <motion.section
            id="experience"
            className="py-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
            <div className="space-y-8">
                {experience.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-4 md:gap-8 items-start group"
                    >
                        <div className="w-12 h-12 shrink-0 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 font-bold text-lg group-hover:bg-slate-200 transition-colors">
                            {exp.company[0]}
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                            <div className="text-sm text-gray-500 font-medium">{exp.company} • {exp.period}</div>
                            <p className="text-gray-600 leading-relaxed mt-2">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
