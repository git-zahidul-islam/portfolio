"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Youtube, Linkedin, Facebook, Twitter, Github, Mail, Download } from "lucide-react";
import data from "@/data/portfolio.json";

const iconMap: Record<string, any> = {
    Globe, Youtube, Linkedin, Facebook, Twitter, Github, Mail
};

export function Hero() {
    const { hero, socials } = data;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
        >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                            {hero.name}
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                            {hero.bio}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-5 h-5" />
                        <span>{hero.location}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-3">
                            {socials.map((social, idx) => {
                                const Icon = iconMap[social.icon] || Globe;
                                return (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:text-black hover:border-gray-400 transition-colors"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                        <div>
                            <a
                                href="https://drive.google.com/uc?export=download&id=1HeVTvEgLDU3KfvykZyzSwy58v4XM9JFT"
                                className="p-2.5 border border-gray-200 rounded-lg text-gray-500 hover:text-black hover:border-gray-400 transition-colors"
                                aria-label="Download Resume"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                </div>

                <div className="relative shrink-0 mx-auto md:mx-0">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-1.5">
                        <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-gray-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={hero.avatar}
                                alt={hero.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
