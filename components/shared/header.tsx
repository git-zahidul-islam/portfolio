"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { animate } from "framer-motion";

const navItems = [
    { name: "About", href: "#about", active: false },
    { name: "Experience", href: "#experience", active: false },
    { name: "Education", href: "#education", active: false },
    { name: "Projects", href: "#projects", active: false },
    { name: "Skills", href: "#skills", active: false },
    { name: "Contact", href: "#contact", active: false },
];

export function Header() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);

        if (elem) {
            const headerOffset = 80; // height of sticky header + padding
            const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            animate(window.scrollY, offsetPosition, {
                type: "spring",
                stiffness: 100,
                damping: 20,
                onUpdate: (latest) => window.scrollTo(0, latest)
            });

            // Update URL hash without jumping
            window.history.pushState(null, "", href);
        } else if (href === "/") {
            animate(window.scrollY, 0, {
                type: "spring",
                stiffness: 100,
                damping: 20,
                onUpdate: (latest) => window.scrollTo(0, latest)
            });
            window.history.pushState(null, "", "/");
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/70 border-b border-black/5">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://res.cloudinary.com/dcjkiiozz/image/upload/v1768896439/zahidulislam-dev_lsl8a7.jpg" alt="Logo" className="object-cover w-full h-full" />
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScroll(e, item.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-black text-gray-600"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
