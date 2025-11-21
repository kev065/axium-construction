"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-md py-2 dark:bg-neutral-900/90"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/images/axium_logo_2.webp"
                            alt="Axium Construction"
                            width={180}
                            height={60}
                            className="object-contain h-12 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? "text-foreground" : "text-white mix-blend-difference"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                        >
                            Get a Quote
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white mix-blend-difference"}`} />
                        ) : (
                            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white mix-blend-difference"}`} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background border-t border-border shadow-xl md:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <Link
                                    href="/contact"
                                    className="bg-primary text-primary-foreground w-full py-3 rounded-md text-center font-bold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get a Quote
                                </Link>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                                    <Phone className="w-4 h-4" />
                                    <span>+254 700 000 000</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
