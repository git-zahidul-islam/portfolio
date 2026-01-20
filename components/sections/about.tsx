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
                    I’m a Bangladeshi <span className="font-medium text-gray-900">Full Stack Developer</span> focused on building scalable web and mobile applications using modern technologies like
                    <a href="#" className="inline-flex items-center gap-1 mx-1 font-medium text-gray-900 border-b border-gray-300">
                        React, Next.js, and Node.js <span className="text-[10px]">↗</span>
                    </a>.
                    I enjoy turning ideas into clean, efficient, and production-ready
                    <a href="#" className="inline-flex items-center gap-1 mx-1 font-medium text-gray-900 border-b border-gray-300">
                        products <span className="text-[10px]">↗</span>
                    </a>
                    that solve real-world problems.
                </p>

                <p>
                    I work across the full development stack, including
                    <a href="#" className="inline-flex items-center gap-1 mx-1 font-medium text-gray-900 border-b border-gray-300">
                        PostgreSQL, Prisma, and MongoDB <span className="text-[10px]">↗</span>
                    </a>,
                    and build mobile applications using
                    <a href="#" className="inline-flex items-center gap-1 mx-1 font-medium text-gray-900 border-b border-gray-300">
                        React Native (Expo) <span className="text-[10px]">↗</span>
                    </a>.
                    I’m passionate about clean architecture, performance optimization, and continuously learning new technologies to grow as a developer.
                </p>
            </div>


        </motion.section >
    );
}
