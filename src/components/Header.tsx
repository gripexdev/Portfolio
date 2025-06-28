// Header.tsx
// This component renders the responsive navigation header for the portfolio site.
// It includes scroll-based styling, smooth section navigation, and adapts for mobile and desktop views.

import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, GraduationCap, Mail } from 'lucide-react';

const Header: React.FC = () => {
    // State to control mobile menu open/close
    const [isOpen, setIsOpen] = useState(false);
    // State to track if the page is scrolled past a threshold
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect: Add scroll listener to update header style on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll smoothly to a section by ID and close mobile menu
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    // Navigation menu items with icons and section IDs
    const menuItems = [
        { icon: User, label: 'About', id: 'about' },
        { icon: Code, label: 'Skills', id: 'skills' },
        { icon: GraduationCap, label: 'Education', id: 'education' },
        { icon: Briefcase, label: 'Experience', id: 'experience' },
        { icon: Mail, label: 'Contact', id: 'contact' },
    ];

    return (
        // Header container: fixed, responsive, with scroll-based background
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and site title */}
                    <div className="flex items-center space-x-2">
                        <Code className="h-8 w-8 text-blue-600" />
                        <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'
                            }`}>
                            Portfolio
                        </span>
                    </div>

                    {/* Desktop Navigation: visible on md+ screens */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                                    }`}
                            >
                                <item.icon className="h-4 w-4" />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button: toggles mobile nav, visible on small screens */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                            }`}
                    >
                        {/* Hamburger or close icon depending on menu state */}
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation: slides down when menu is open */}
                {isOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
                        <div className="flex flex-col space-y-2 mt-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-left ${isScrolled
                                        ? 'text-slate-700 hover:bg-slate-100'
                                        : 'text-white hover:bg-white/10'
                                        }`}
                                >
                                    {/* Icon and label for each nav item */}
                                    <item.icon className="h-5 w-5" />
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;