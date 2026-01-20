"use client";

import { motion } from "framer-motion";
import data from "@/data/portfolio.json";

export function Skills() {
    const { skills } = data;

    return (
        <section id="skills" className="py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-black hover:bg-slate-50 transition-colors cursor-default"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
