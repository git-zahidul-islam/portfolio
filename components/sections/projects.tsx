"use client";

import { motion } from "framer-motion";
import { Github, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";
import data from "@/data/portfolio.json";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Projects() {
    const { projects } = data;

    return (
        <section id="projects" className="py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <div className="flex gap-2">
                                    <ProjectLinkButton icon={Github} links={project.links.github || []} />
                                    <ProjectLinkButton icon={Globe} links={project.links.live || []} />
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6 h-20 overflow-hidden line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function ProjectLinkButton({ icon: Icon, links }: { icon: any, links: { label: string, url: string }[] }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!links || links.length === 0) return null;

    if (links.length === 1) {
        return (
            <a
                href={links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                title={links[0].label}
            >
                <Icon className="w-5 h-5" />
            </a>
        );
    }

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className={cn(
                "p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-0.5",
                isOpen && "text-gray-900 bg-gray-100"
            )}>
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-bold">{links.length}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-10 flex flex-col">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-xs text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
