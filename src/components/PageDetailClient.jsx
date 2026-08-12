'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2, Sparkles, Layers, ShieldCheck, Code2 } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailClient({ project }) {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            // Hero Image Parallax
            gsap.fromTo(
                '.project-hero-image',
                { scale: 1.1, y: -15 },
                {
                    scale: 1,
                    y: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.hero-image-frame',
                        start: 'top top+=80',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );

            // Stagger Reveal for Sections
            const revealElements = containerRef.current.querySelectorAll('.reveal');
            revealElements.forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 88%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        },
        { scope: containerRef, dependencies: [] }
    );

    return (
        <main
            ref={containerRef}
            className="min-h-screen bg-black text-zinc-100 relative overflow-hidden selection:bg-indigo-600 selection:text-white pt-20 md:pt-24"
        >
            {/* Background Ambient Lighting - Indigo Soft Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-900/20 via-indigo-800/10 to-transparent blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] bg-indigo-600/10 blur-[150px] pointer-events-none" />

            <div className="px-6 md:px-24 py-8 max-w-7xl mx-auto space-y-10 relative z-10">
                {/* Back Link & Case Study Badge */}
                <div className="reveal flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider text-zinc-400 hover:text-white transition-colors"
                    >
                        <span className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 group-hover:border-indigo-500/50 group-hover:-translate-x-1 transition-all">
                            <ArrowLeft size={16} />
                        </span>
                        <span>Back to Projects</span>
                    </Link>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
                        <Sparkles size={13} />
                        <span>Case Study</span>
                    </div>
                </div>

                {/* Title Header */}
                <div className="reveal space-y-4 max-w-4xl">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-zinc-400 text-base sm:text-xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Hero Image Showcase */}
                <div className="reveal hero-image-frame relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/50 shadow-2xl group">
                    <div className="project-hero-image w-full h-full relative">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Details Grid: Left Narrative | Right Sticky Tech Spec */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
                    {/* Main Description & Features */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Overview */}
                        <div className="reveal p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md space-y-4 hover:border-indigo-500/30 transition-colors">
                            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest">
                                <Layers size={15} />
                                <span>Project Overview</span>
                            </div>
                            {project.longDescription?.map((para, i) => (
                                <p key={i} className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                                    {para}
                                </p>
                            )) || (
                                    <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                )}
                        </div>

                        {/* Features */}
                        {project.features?.length > 0 && (
                            <div className="reveal space-y-4">
                                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest">
                                    <ShieldCheck size={15} />
                                    <span>Key Features</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {project.features.map((f) => (
                                        <div
                                            key={f}
                                            className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3 hover:border-indigo-500/40 transition-colors"
                                        >
                                            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                                            <span className="text-zinc-300 text-sm font-medium leading-snug">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Tech Meta */}
                    <div className="lg:col-span-4">
                        <div className="reveal sticky top-24 p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md space-y-6">
                            <div className="flex items-center gap-2 text-white font-bold text-sm border-b border-zinc-800 pb-4">
                                <Code2 size={16} className="text-indigo-400" />
                                <span>Technologies Used</span>
                            </div>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-xs font-mono font-bold uppercase tracking-wider text-indigo-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-4 border-t border-zinc-800 space-y-3">
                                {project.links?.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-3.5 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 font-bold text-xs uppercase tracking-wider hover:bg-indigo-600/30 hover:border-indigo-500/50 transition-all"
                                    >
                                        <span>Visit Live Site</span>
                                        <ExternalLink size={15} />
                                    </a>
                                )}
                                {project.links?.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 hover:text-white transition-all"
                                    >
                                        <span>View Repository</span>
                                        <BsGithub size={15} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}