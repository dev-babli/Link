"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
  ];

  const NavLinkComponent = ({ href, label, onClick }: { href: string; label: string, onClick?: () => void }) => {
    return <Link href={href} onClick={onClick} className="text-black text-base font-normal px-4 py-2 hover:opacity-70 transition-opacity whitespace-nowrap">{label}</Link>
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-[100] flex justify-center">
      <div
        className={cn(
          "relative flex w-auto items-center h-[80px] mt-6 bg-white/80 backdrop-blur-md rounded-[40px] p-4 pl-5 transition-shadow duration-300",
          isScrolled ? "shadow-[0_1px_20px_0_rgba(224,215,198,0.5)]" : "shadow-none"
        )}
      >
        <Link href="/" className="flex-shrink-0 mr-4">
          <div className="relative h-20 w-auto overflow-hidden rounded-[20px]">
            <Image
              src="/logos/Logo_link__1_-removebg-preview.png"
              alt="Link Innovations"
              width={300}
              height={90}
              className="h-20 w-auto rounded-[20px] scale-110 object-cover"
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center justify-center flex-grow">
          <nav className="flex items-center bg-black/[.04] rounded-full p-1">
            {navLinks.map((link) => (
              <NavLinkComponent key={link.label} href={link.href} label={link.label} />
            ))}
          </nav>
        </div>

        <div className="hidden md:block ml-4">
          <Link href="/contact" className="group flex items-center bg-black text-white rounded-full py-2 pl-4 pr-2 text-base font-medium h-11 whitespace-nowrap transition-transform duration-200 ease-in-out hover:scale-[1.02] shadow-[0_5px_16px_0_rgba(0,0,0,0.2)]">
            Contact us
            <span className="ml-2 flex items-center justify-center bg-white rounded-full w-7 h-7 relative overflow-hidden">
              <span className="transition-transform duration-300 ease-in-out transform group-hover:-translate-x-8">
                <ArrowRight className="text-black h-3.5 w-3.5" />
              </span>
              <span className="absolute transition-transform duration-300 ease-in-out transform translate-x-8 group-hover:translate-x-0">
                <ArrowRight className="text-black h-3.5 w-3.5" />
              </span>
            </span>
          </Link>
        </div>

        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2.5 rounded-full hover:bg-black/5" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X className="h-5 w-5 text-black" /> : <Menu className="h-5 w-5 text-black" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-[90px] left-4 right-4 bg-white rounded-2xl shadow-lg p-5 border border-black/5">
          <nav className="flex flex-col items-center space-y-2">
            {[...navLinks, { href: "/contact", label: "Contact us" }].map((link) => (
              <NavLinkComponent key={link.label} href={link.href} label={link.label} onClick={() => setIsOpen(false)} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}