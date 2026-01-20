import data from "@/data/portfolio.json";
import { Github, Linkedin, Twitter, Facebook, Mail } from "lucide-react";

const iconMap: Record<string, any> = {
    Github, Linkedin, Twitter, Facebook, Mail
};

export function Footer() {
    return (
        <footer className="w-full py-8 mt-12 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6">
                <div className="flex gap-4">
                    {data.socials.map((social, idx) => {
                        const Icon = iconMap[social.icon];
                        if (!Icon) return null;
                        return (
                            <a
                                key={idx}
                                href={social.url}
                                className="text-gray-400 hover:text-gray-900 transition-colors"
                                aria-label={social.name}
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        );
                    })}
                </div>
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} {data.hero.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
