"use client";

import React, { useEffect, useState } from 'react';

export default function LoginForm() {
    // Optional: Add state to manage specific animation events
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simple delay to simulate loading or entry animation
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Custom pulse keyframes for the "glowing" effect on focus
    const pulseKeyframes = `
        @keyframes glowingPulse {
            0% { border-color: rgba(94, 16, 220, 0.4); box-shadow: 0 0 5px rgba(94, 16, 220, 0.3); }
            50% { border-color: rgba(94, 16, 220, 0.9); box-shadow: 0 0 20px rgba(94, 16, 220, 0.6); }
            100% { border-color: rgba(94, 16, 220, 0.4); box-shadow: 0 0 5px rgba(94, 16, 220, 0.3); }
        }
    `;

    return (
        <div className="flex items-center justify-center min-h-[700px] p-6">
            <style>{pulseKeyframes}</style> {/* Injecting keyframes */}
            <form
                className={`transition-all duration-700 ease-out transform ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } bg-white/[0.04] backdrop-blur-[30px] border border-white/10 p-14 rounded-[3rem] w-full max-w-xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] text-white relative overflow-hidden`}
            >
                {/* A hidden background element that 'slow-pulses' to create depth */}
                <div className="absolute inset-0 bg-white/[0.01] animate-pulse rounded-[3rem] -z-10" />

                <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight font-sans text-white/95">
                    LOGIN
                </h2>

                <div className="space-y-10">
                    <div className="flex flex-col gap-4">
                        <label className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80 ml-2">
                            EMAIL
                        </label>
                        <input
                            type="email"
                            className="bg-black/20 border border-white/15 rounded-2xl px-8 py-5 text-xl text-white/100 transition-all placeholder:text-white/30 focus:outline-none focus:bg-black/30 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/30"
                            style={{ animation: 'glowingPulse 3s infinite ease-in-out' }} // Pulsing border on focus
                            placeholder="human@thetechgap.com"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80 ml-2">
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            className="bg-black/20 border border-white/15 rounded-2xl px-8 py-5 text-xl text-white/100 transition-all placeholder:text-white/30 focus:outline-none focus:bg-black/30 focus:border-purple-600 focus:ring-4 focus:ring-purple-600/30"
                            style={{ animation: 'glowingPulse 3s infinite ease-in-out' }} // Pulsing border on focus
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black text-2xl font-black py-6 rounded-full mt-8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-purple-700/60 hover:scale-[1.03] active:scale-[0.98] transform relative group"
                    >
                        {/* A hidden glow behind the button that appears on hover */}
                        <span className="absolute inset-0 bg-purple-700/0 rounded-full blur-xl group-hover:bg-purple-700/30 transition-all -z-10"></span>
                        Sign In
                    </button>
                </div>

                <p className="mt-16 text-center text-sm font-medium text-white/40 tracking-[0.2em] uppercase transition-all duration-300 hover:text-white/90 cursor-default">
                    IT - By humans. For humans.
                </p>
            </form>
        </div>
    );
}