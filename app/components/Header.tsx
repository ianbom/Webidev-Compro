"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full z-50 transition-all duration-300 sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto flex justify-center w-full">
                <div className="flex flex-1 max-w-[1280px] px-4 md:px-10 py-4 items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 cursor-pointer">
                        <div className="size-8 text-primary flex items-center justify-center rounded-lg bg-[#181710]">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "20px" }}
                            >
                                terminal
                            </span>
                        </div>
                        <h2 className="text-[#181710] text-xl font-bold leading-tight tracking-[-0.015em]">
                            WebIDev
                        </h2>
                    </Link>

                    {/* Navigation Links (Hidden on mobile, visible on lg) */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/services"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Layanan
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Portofolio
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            href="/blog"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Blog
                        </Link>
                    </div>

                    {/* Contact Button / Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden sm:flex items-center justify-center h-10 px-5 rounded-full border border-[#e5e7eb] bg-white hover:bg-gray-50 transition-colors text-sm font-semibold"
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
