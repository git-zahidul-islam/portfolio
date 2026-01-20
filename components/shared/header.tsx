import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about", active: false },
    { name: "Experience", href: "#experience", active: false },
    { name: "Education", href: "#education", active: false },
    { name: "Projects", href: "#projects", active: false },
    { name: "Skills", href: "#skills", active: false },
    { name: "Contact", href: "#contact", active: false },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/70 border-b border-black/5">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/placeholder-logo.jpg" alt="Logo" className="object-cover w-full h-full" />
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
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
