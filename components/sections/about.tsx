"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">About Me</h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                    I am a Bangladeshi tech entrepreneur, software engineer, and educator who has spent the last decade building impactful <a href="#" className="inline-flex items-center gap-1 font-medium text-gray-900 border-b border-gray-300">products <span className="text-[10px]">↗</span></a> and helping developers grow. Through my platforms Learn with Sumit, logicBase Labs, and Analyzen, I work at the intersection of technology, education, and <a href="#" className="inline-flex items-center gap-1 font-medium text-gray-900 border-b border-gray-300">innovation <span className="text-[10px]">↗</span></a>.
                </p>
                <p>
                    My <a href="#" className="inline-flex items-center gap-1 font-medium text-gray-900 border-b border-gray-300">tutorials <span className="text-[10px]">↗</span></a> and courses have reached millions of learners, and I regularly <a href="#" className="inline-flex items-center gap-1 font-medium text-gray-900 border-b border-gray-300">contribute <span className="text-[10px]">↗</span></a> to the global developer community through <a href="#" className="inline-flex items-center gap-1 font-medium text-gray-900 border-b border-gray-300">technical writing <span className="text-[10px]">↗</span></a>, open-source projects, and <a href="#" className="inline-flex items-center gap-1 font-medium text-gray-900 border-b border-gray-300">speaking <span className="text-[10px]">↗</span></a> at events.
                </p>
            </div>

        </motion.section >
    );
}
