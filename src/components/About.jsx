'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from './ui/glass-card';
import { useGSAP } from '@/hooks/use-gsap';
import gsap from 'gsap';

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // ✅ FIXED GSAP (no flicker + proper scope + no re-run issue)
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none', // 🔥 IMPORTANT FIX
        },
      });
    }, containerRef);

    return () => ctx.revert(); // 🔥 cleanup (prevents flicker)
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* IMAGE SIDE */}
        <motion.div style={{ y }} className="relative group">

          <div className="absolute -inset-4 bg-indigo-500/10 rounded-[3rem] blur-2xl group-hover:bg-indigo-500/20 transition-all duration-700" />

          <div className="relative aspect-square glass rounded-[2.5rem] overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
              alt="Workspace"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 glass p-4 sm:p-6 md:p-8 rounded-3xl border border-white/10 hidden md:block animate-float">
            <p className="text-xl sm:text-2xl font-black text-indigo-500 leading-tight">
              Growing
            </p>
            <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">
              Developer Journey
            </p>
          </div>

        </motion.div>

        {/* TEXT SIDE */}
        <div className="space-y-10 sm:space-y-12">

          <div className="space-y-5 sm:space-y-6">

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Building <br />
              <span className="text-gradient">Modern Web Apps.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
              I&apos;m Ashraful Hoda Jamshed, a software engineering student passionate about
              building clean, responsive, and scalable web applications. I specialize in React.js
              and Next.js while improving backend and DSA skills.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

            <GlassCard className="about-card w-full h-full">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-indigo-400">
                Clean UI Focus
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I design and build interfaces that are simple, intuitive, and user-friendly,
                focusing on real usability rather than just visuals.
              </p>
            </GlassCard>

            <GlassCard className="about-card w-full h-full">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-purple-400">
                Problem Solver
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I enjoy solving real-world problems using DSA fundamentals, logical thinking,
                and efficient code structure.
              </p>
            </GlassCard>

          </div>

          {/* STATS */}
          <div className="pt-6 sm:pt-8 flex flex-wrap gap-6 sm:gap-12">

            <div className="glass p-4 sm:p-5 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-bold text-red-400">Pupil</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                Codeforces
              </p>
            </div>

            <div className="glass p-4 sm:p-5 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-bold text-yellow-400">2★</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                CodeChef
              </p>
            </div>

            <div className="glass p-4 sm:p-5 rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-bold">100%</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                Dedication
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}