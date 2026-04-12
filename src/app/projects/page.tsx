"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Plasma from "./extras/Plasma"
import CompleteNavBar from "../components/CompleteNavBar";

const PROJECT_IMAGES = [
    { id: 1, url: 'https://picsum.photos/id/1/1600/900', link: '#' },
    { id: 2, url: 'https://picsum.photos/id/2/1600/900', link: '#' },
    { id: 3, url: 'https://picsum.photos/id/3/1600/900', link: '#' },
    { id: 4, url: 'https://picsum.photos/id/4/1600/900', link: '#' },
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div>
            <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
                <Plasma color="#B5260E" speed={0.2} direction="forward" scale={1.4} opacity={0.4} mouseInteractive={false} />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <CompleteNavBar />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center h-auto pb-20">
                <div ref={containerRef} className="relative w-[90vw] h-[400vh] mt-[9vh]">
                    <section className="sticky top-[9vh] flex z-10 flex-col items-center w-full h-[85vh] bg-black/70 border border-white/30 rounded-4xl overflow-hidden shadow-2xl">

                        <div className="w-full pt-[8vh] text-center px-10">
                            <h1 className="font-oswald text-5xl font-normal text-white tracking-tight">All projects are tailored to the customer</h1>
                            <div className="my-8 flex items-center gap-4 max-w-2xl mx-auto opacity-50">
                                <div className="h-px flex-1 bg-white" />
                                <span className="text-[10px] text-white uppercase tracking-[0.3em] whitespace-nowrap">IT - By humans. For humans</span>
                                <div className="h-px flex-1 bg-white" />
                            </div>
                        </div>

                        <div className="relative w-full flex-1 flex items-center justify-center p-12 mb-8">
                            <div className="relative w-full h-full flex items-center justify-center max-w-5xl">
                                {PROJECT_IMAGES.map((item, index) => (
                                    <ProjectCard
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        total={PROJECT_IMAGES.length}
                                        progress={scrollYProgress}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

function ProjectCard({ item, index, total, progress }: { item: any, index: number, total: number, progress: MotionValue<number> }) {
    const isLast = index === total - 1;
    const step = 1 / total;
    const start = index * step;
    const end = (index + 1) * step;

    // Last card x remains at 0% so it never slides away
    const x = useTransform(progress, [start, end], ["0%", isLast ? "0%" : "-160%"]);
    const scale = useTransform(progress, [start - step, start], [0.85, 1]);

    // Last card stays at opacity 1 once reached
    const opacity = useTransform(
        progress,
        [start - (step/3), start, end, end + (step/3)],
        [0, 1, 1, isLast ? 1 : 0]
    );

    return (
        <motion.a
            href={item.link}
            style={{ x, scale, opacity, zIndex: total - index }}
            className="absolute w-full aspect-video bg-zinc-900 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer group"
        >
            <img src={item.url} alt="" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <span className="text-white font-oswald text-3xl uppercase tracking-wider">Explore Project</span>
            </div>
        </motion.a>
    );
}