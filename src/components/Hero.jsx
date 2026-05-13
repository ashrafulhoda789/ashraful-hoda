'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
import MagneticButton from './ui/magnetic-button';
import { useGSAP } from '@/hooks/use-gsap';
import { Code, Globe, MessageCircle, ArrowRight, Download } from 'lucide-react';
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
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 px-6"
    >
      {/* Dynamic Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
      />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="hero-reveal inline-flex items-center gap-3 px-4 py-2 glass rounded-full text-sm font-medium border border-white/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            Available for new opportunities
          </div>

          <div className="space-y-6 z-10">

            {/* Small Intro */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.3em] text-violet-400 text-sm font-medium"
            >
              Hi, I’m
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-black tracking-tighter leading-tight"
            >
              Ashraful  <br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
                Hoda Jamshed.
              </span>
            </motion.h1>

            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-4xl font-bold h-14"
            >
              <span className="text-white">I’m a </span>

              <TypeAnimation
                sequence={[
                  "Web Designer",
                  2000,
                  "Web Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Frontend Developer",
                  2000,
                  "MERN Stack Learner",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-violet-400"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
            >
              Passionate about building modern, responsive, and interactive web
              experiences with clean UI, smooth animations, and scalable frontend
              architecture.
            </motion.p>

          </div>


          <div className="hero-reveal flex flex-wrap gap-6 pt-4">
            <MagneticButton strength={30}>
              <a
                href="#projects"
                className="group px-8 py-5 bg-white text-black font-bold rounded-full flex items-center gap-3 hover:bg-indigo-500 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>

            <MagneticButton strength={20}>
              <a
                href="/resume.pdf"
                download={'Ashraful_Hoda_Resume.pdf'}
                className="px-8 py-5 glass border border-white/10 font-bold rounded-full flex items-center gap-3 hover:bg-white/5 transition-all"
              >
                Resume
                <Download size={20} />
              </a>
            </MagneticButton>
          </div>

          <div className="hero-reveal flex items-center gap-6 pt-8">
            {heroSocials.map(({ icon: Icon, link }, i) => (
              <MagneticButton key={i} strength={15}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all block"
                >
                  <Icon size={24} />
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>

        <div className="hero-reveal relative order-1 lg:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative w-full aspect-[4/5] max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] animate-pulse-slow" />
            <div className="relative h-full w-full glass rounded-[2.5rem] overflow-hidden border border-white/10 group">
              <img
                src={'/portfolio-my-image.png'}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110  hover:grayscale-0"
              />
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-1">Based in</p>
                <p className="text-xl font-bold">Bangladesh BD</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-50">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
      </div>
    </section>
  );
}
