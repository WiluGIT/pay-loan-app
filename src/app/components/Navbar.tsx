"use client"

import React, { JSX, useEffect, useState } from 'react'
import { scrollToSection } from '@/app/utils/scrollToSection';
import Image from "next/image";

interface NavItem {
    id: string;
    label: string;
}

export default function Navbar(): JSX.Element {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { id: 'about', label: 'Aboutóżćź' },
        { id: 'services', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'contact', label: 'Contact' }
    ];

    // Change navbar style on scroll
    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            const target = event.target as HTMLElement;
            if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Handle navigation item click
    const handleNavItemClick = (id: string): void => {
        scrollToSection(id);
        setIsMobileMenuOpen(false);
    };

    // Toggle mobile menu
    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(prev => !prev);
    };

    return (
        // <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 text-gray-800' : 'bg-transparent py-4 text-white'}`}>
        <nav className={`top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4 text-gray-800' : 'bg-transparent py-8 text-white'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <a
                        href="#"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>): void => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex items-center"
                    >
                        <div className="relative h-15 w-30">
                            <Image
                                src="/logo-full.png"
                                alt="Company Logo"
                                fill
                                priority
                                quality={90}
                                style={{
                                    objectFit: 'contain'
                                }}
                                className="transition-opacity"
                            />
                        </div>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="hover:text-blue-500 transition-colors"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>): void => {
                                e.preventDefault();
                                handleNavItemClick(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden mobile-menu-container">
                    <button
                        className="p-2 focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute w-[90%] right-[5%] rounded-xl bg-[#152c2c] shadow-2xl py-2 px-4 mt-4 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col space-y-4 py-2">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-white-800 hover:bg-[#275252] rounded-lg transition-colors py-2 px-4 border-gray-100"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>): void => {
                                e.preventDefault();
                                handleNavItemClick(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}