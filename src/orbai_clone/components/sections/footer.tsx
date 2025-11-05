import React from 'react';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const socialLinks = [
{ href: '#', icon: Twitter, 'aria-label': 'Twitter' },
{ href: '#', icon: Instagram, 'aria-label': 'Instagram' },
{ href: '#', icon: Linkedin, 'aria-label': 'LinkedIn' }];

const footerSections = [
  {
    title: 'Features',
    links: [
      { href: '#', label: 'Features' },
      { href: '#', label: 'Pricing' },
      { href: '#', label: 'Services' },
      { href: '#', label: 'Updates' },
      { href: '#', label: 'Contact' }
    ]
  },
  {
    title: 'Company',
    links: [
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Careers' },
      { href: '#', label: 'Press' },
      { href: '#', label: 'Partners' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Case Studies' },
      { href: '#', label: 'Support' },
      { href: '#', label: 'FAQ' }
    ]
  }
];

const bottomLinks = [
  { href: '#', label: 'Features' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Updates' },
  { href: '#', label: 'Privacy' }
];


const Footer = () => {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#f5f5f5] py-20 rounded-t-[48px] sm:rounded-t-[64px]">

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        {/* Main Footer Content - Exact Layout from Image */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-16">
          
          {/* Left Section - Brand Identity */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              {/* Logo - Simple dark circle with white symbol */}
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#1a1a1a] rounded-sm"></div>
                </div>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: '#1a1a1a' }}>LINK INNOVATIONS</h2>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#1a1a1a' }}>
              Next-gen AI systems, built for tomorrow's innovators
            </p>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex flex-col md:flex-row gap-12">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-sm font-semibold mb-4" style={{ color: '#1a1a1a' }}>{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-sm transition-colors hover:text-gray-600 hover:underline"
                        style={{ color: '#1a1a1a' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Section - Social Media and CTA */}
          <div className="flex flex-col items-start lg:items-end space-y-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors" 
                  aria-label={link['aria-label']}
                >
                  <link.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            
            {/* CTA Button - Exact match to image */}
            <a
              href="#"
              className="footer-cta-button inline-flex items-center gap-2 bg-black px-8 py-4 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
              style={{ color: '#ffffff' }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" style={{ color: '#ffffff' }} />
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="pt-12 border-t border-gray-100/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#1a1a1a' }}>
              © 2024 Link Innovations. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {bottomLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-sm transition-colors hover:text-gray-600 hover:underline"
                  style={{ color: '#1a1a1a' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;