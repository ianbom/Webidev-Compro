"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full z-50 transition-all duration-300 sticky top-0 bg-white/80 backdrop-blur-md border-b-2 border-primary shadow-sm">
            <div className="container mx-auto flex justify-center w-full">
                <div className="flex flex-1 max-w-[1280px] px-4 md:px-10 py-5 items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 cursor-pointer group">
                        <Image
                            src="/favicon-webidev.png"
                            alt="WebIDev Logo"
                            width={100}
                            height={100}
                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                        <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em]">
                          
                            <span className="text-[#181710]">WebIDev</span>
                           
                        </h2>
                    </Link>

                    {/* Navigation Links (Hidden on mobile, visible on lg) */}
                    <div className="hidden lg:flex items-center gap-10">
                        {[
                            { name: "Beranda", href: "/" },
                            { name: "Layanan", href: "/services" },
                            { name: "Portofolio", href: "/portfolio" },
                            { name: "Tentang Kami", href: "/about" },
                            { name: "Blog", href: "/blog" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-semibold text-text-main hover:text-accent-blue transition-colors py-1 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Contact Button / Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden sm:flex items-center justify-center h-11 px-6 rounded-full bg-primary text-text-main text-sm font-bold shadow-[0_4px_14px_0_rgba(253,223,73,0.39)] hover:shadow-[0_6px_20px_rgba(253,223,73,0.23)] hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Hubungi Kami
                        </Link>
                        <button
                            className="lg:hidden p-2 text-[#181710]"
                            onClick={toggleMenu}
                        >
                            <span className="material-symbols-outlined">
                                {isMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
                    <Link
                        href="/"
                        className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/services"
                        className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Layanan
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Portofolio
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Tentang Kami
                    </Link>
                    <Link
                        href="/blog"
                        className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium hover:text-primary transition-colors py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Hubungi Kami
                    </Link>
                </div>
            )}
        </header>
    );
}
