"use client";

import React, { useState } from 'react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Login', href: '#login' },
];

export default function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-6 left-0 right-0 flex justify-center z-50">
            <div className="w-[90%] max-w-5xl bg-black/40 backdrop-blur-md rounded-full h-16 flex items-center justify-between px-8 border border-white/10 relative">

                <div className="text-white font-bold text-lg tracking-tight shrink-0">
                    The Tech Gap
                </div>

                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out rounded-full ${isOpen ? 'rotate-45 translate-y-2' : 'opacity-80 group-hover:opacity-100'}`} />
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out rounded-full ${isOpen ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'}`} />
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out rounded-full ${isOpen ? '-rotate-45 -translate-y-2' : 'opacity-80 group-hover:opacity-100'}`} />
                    </button>

                    {isOpen && (
                        <ul className="absolute top-[calc(100%+12px)] right-0 min-w-[200px] bg-black/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 flex flex-col gap-1 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="block px-5 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-200 hover:translate-x-1 text-sm font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}