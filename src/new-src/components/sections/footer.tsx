"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background-primary text-text-primary pt-20 pb-10 lg:pt-24 lg:pb-12">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Top: Newsletter & Nav */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-x-10 gap-y-10 lg:gap-y-0">
                    <div>
                        <h5 className="text-xl font-medium text-text-primary mb-4">
                            Sign up for our newsletter
                        </h5>
                        <div className="w-full max-w-[480px]">
                             <form className="flex flex-col sm:flex-row items-center gap-2" action="#">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@email.com"
                                    className="h-[52px] w-full flex-grow appearance-none bg-white border border-border-subtle rounded-xl px-4 py-2 text-base text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-colors"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="h-[52px] w-full sm:w-auto shrink-0 bg-black text-white rounded-full px-6 py-2 text-base font-medium flex items-center justify-center transition-transform hover:scale-105"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="lg:justify-self-end">
                        <h5 className="text-base font-medium text-text-primary mb-4">
                            Pages
                        </h5>
                        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-base">
                            <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors">Home</Link>
                            <Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors">About Us</Link>
                            <Link href="/services" className="text-text-secondary hover:text-text-primary transition-colors">Services</Link>
                            <Link href="/portfolio" className="text-text-secondary hover:text-text-primary transition-colors">Portfolio</Link>
                            <Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">Contact</Link>
                        </nav>
                    </div>
                </div>

                {/* Divider 1 */}
                <div className="h-px bg-border-subtle my-16"></div>

                {/* Middle: Social & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1fr] items-center gap-y-8 md:gap-y-0">
                    <div className="flex items-center gap-6">
                        <a href="#" aria-label="Twitter" className="text-text-secondary hover:text-text-primary transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-text-secondary hover:text-text-primary transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="text-text-secondary hover:text-text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                     <a href="mailto:hello@linkinnovations.com" className="font-display text-4xl md:text-5xl lg:text-[56px] font-medium tracking-[-0.03em] text-text-primary leading-tight justify-self-start md:justify-self-end hover:text-text-secondary transition-colors">
                        hello@linkinnovations.com
                    </a>
                </div>

                {/* Divider 2 */}
                <div className="h-px bg-border-subtle my-16"></div>

                {/* Bottom: Credits */}
                <div className="flex flex-col gap-y-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col items-start gap-y-3 sm:flex-row sm:items-center sm:gap-x-6 text-sm">
                        <span className="text-text-secondary">© 2025 Link Innovations. All rights reserved.</span>
                        <div className="flex items-center gap-x-6">
                            <Link href="/privacy" className="text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="text-text-secondary hover:text-text-primary transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;