'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
import MagneticButton from './ui/magnetic-button';
import { useGSAP } from '@/hooks/use-gsap';
import { ArrowRight, Download } from 'lucide-react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);

  const heroSocials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ashraful-hoda-jamshed",
      icon: FaLinkedin,
    },
    {
      name: "Github",
      link: "https://github.com/ashrafulhoda789",
      icon: FaGithub,
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;
      const { clientX, clientY } = e;
      gsap.to(spotlightRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-reveal', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-20 px-5 md:px-12"
    >
      {/* Dynamic Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
      />

      <div className="max-w-7xl w-full relative z-10">
        
        {/* ================= MOBILE ONLY LAYOUT (Image ar pashe icons layout) ================= */}
        <div className="flex flex-col sm:hidden space-y-6">
          
          {/* Top Row: Image in center/left with Social Icons neatly aligned on its right */}
          <div className="hero-reveal flex items-center justify-center relative px-4">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/15 glass shadow-2xl shadow-indigo-500/25">
              <img
                src={'/portfolio-my-image.png'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Icons positioned right next to the image */}
            <div className="absolute right-6 flex flex-col gap-2.5">
              {heroSocials.map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 transition-all shadow-lg flex items-center justify-center backdrop-blur-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Status Badge */}
          <div className="hero-reveal inline-flex items-center gap-2 px-3.5 py-1.5 glass rounded-full text-xs font-medium border border-white/10 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for new opportunities
          </div>

          {/* Intro & Details */}
          <div className="hero-reveal space-y-3">
            <p className="uppercase tracking-[0.25em] text-violet-400 text-xs font-medium">
              Hi, I’m
            </p>

            <h1 className="text-3xl font-black tracking-tighter leading-tight">
              Ashraful <br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                Hoda Jamshed.
              </span>
            </h1>

            {/* Animated Designation */}
            <div className="text-base font-bold h-7 flex items-center text-violet-400">
              <span className="text-white mr-1.5 font-normal">I’m a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer", 2000,
                  "Full Stack Developer", 2000,
                  "MERN Stack Developer", 2000,
                  "Web Designer", 2000,
                  "Problem Solver", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Detail Description */}
            <p className="text-sm text-gray-400 leading-relaxed pt-1">
              Passionate about building modern, responsive, and interactive web experiences with clean UI, smooth animations, and scalable frontend architecture.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="hero-reveal flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-white text-black text-sm font-bold rounded-full flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition-all shadow-lg"
            >
              View Projects
              <ArrowRight size={16} />
            </a>

            <a
              href="/resume.pdf"
              download={'Ashraful_Hoda_Resume.pdf'}
              className="px-6 py-3.5 glass border border-white/10 text-sm font-bold rounded-full flex items-center gap-2 hover:bg-white/5 transition-all"
            >
              Resume
              <Download size={16} />
            </a>
          </div>

        </div>


        {/* ================= TABLET & DESKTOP LAYOUT (sm and up) ================= */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <div className="hero-reveal inline-flex items-center gap-3 px-4 py-2 glass rounded-full text-sm font-medium border border-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
              </span>
              Available for new opportunities
            </div>

            <div className="space-y-6 z-10">
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="uppercase tracking-[0.3em] text-violet-400 text-sm font-medium">
                Hi, I’m
              </motion.p>

              <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                Ashraful  <br />
                <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                  Hoda Jamshed.
                </span>
              </motion.h1>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-2xl md:text-4xl font-bold h-12 md:h-14 flex items-center">
                <span className="text-white mr-2">I’m a </span>
                <TypeAnimation
                  sequence={[
                    "Web Developer", 2000,
                    "Full Stack Developer", 2000,
                    "MERN Stack Developer", 2000,
                    "Web Designer", 2000,
                    "Problem Solver", 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-violet-400"
                />
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                Passionate about building modern, responsive, and interactive web experiences with clean UI, smooth animations, and scalable frontend architecture.
              </motion.p>
            </div>

            <div className="hero-reveal flex flex-wrap gap-6 pt-2">
              <MagneticButton strength={30}>
                <a href="#projects" className="group px-8 py-4 md:py-5 bg-white text-black font-bold rounded-full flex items-center gap-3 hover:bg-indigo-500 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5">
                  View Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton strength={20}>
                <a href="/resume.pdf" download={'Ashraful_Hoda_Resume.pdf'} className="px-8 py-4 md:py-5 glass border border-white/10 font-bold rounded-full flex items-center gap-3 hover:bg-white/5 transition-all">
                  Resume
                  <Download size={20} />
                </a>
              </MagneticButton>
            </div>

            <div className="hero-reveal flex items-center gap-6 pt-4">
              {heroSocials.map(({ icon: Icon, link }, i) => (
                <MagneticButton key={i} strength={15}>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all block">
                    <Icon size={24} />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>

          <div className="hero-reveal relative order-1 lg:order-2 flex justify-center">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} className="relative w-[280px] sm:w-[340px] lg:w-full aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] animate-pulse-slow" />
              <div className="relative h-full w-full glass rounded-[2.5rem] overflow-hidden border border-white/10 group">
                <img src={'/portfolio-my-image.png'} alt="Profile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 glass p-5 md:p-6 rounded-2xl border border-white/10">
                  <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-1">Based in</p>
                  <p className="text-xl font-bold">Bangladesh BD</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}