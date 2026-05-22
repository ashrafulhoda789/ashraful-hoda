'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/hooks/use-gsap';

import GlassCard from './ui/glass-card';
import MagneticButton from './ui/magnetic-button';
import { ExternalLink, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Wanderlast',
    description:
      'A modern travel and destination booking web application where users can explore, add, manage, and book travel destinations with personalized user profiles and secure authentication.',
    tech: ['Node.js','Express.js', 'MongoDB', 'JWT', 'Next.js', 'React', 'BetterAuth'],
    image: '/wanderlast.jpg',
    links: {
      live: 'https://wonderlust-brown.vercel.app/',
      github: 'https://github.com/ashrafulhoda789/wanderlust-discover-adventure',
    },
  },
  {
    title: 'BookBee',
    description:
      'A premium bookstore platform with real-time inventory and elegant transitions.',
    tech: ['Next.js', 'React', 'BetterAuth', 'MongoDB'],
    image: '/bookbee.png',
    links: {
      live: 'https://bookbee-online-platform.vercel.app/',
      github: 'https://github.com/ashrafulhoda789/bookbee-online-platform',
    },
  },
  {
    title: 'Keen-Keeper',
    description:
      'Advanced productivity suite for high-performance teams and creative professionals.',
    tech: ['React', 'Tailwind', 'DaisyUI'],
    image: '/keen-keeper.png',
    links: {
      live: 'https://keen-keeper-project-ph.netlify.app/',
      github: 'https://github.com/ashrafulhoda789/keen-keeper-project-ph',
    },
  },

];

export default function Projects() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    if (!sliderRef.current || !containerRef.current) return;

    const getScrollAmount = () => {
      // extra buffer prevents bottom cut issue
      const extra = 80;
      return (
        sliderRef.current.scrollWidth -
        window.innerWidth +
        extra
      );
    };

    const tween = gsap.to(sliderRef.current, {
      x: () => -getScrollAmount(),
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: () => '+=' + getScrollAmount(),
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      animation: tween,
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="bg-black/40 overflow-hidden"
    >
      {/* TITLE (NOT PINNED → FIXED ISSUE) */}
      <div className="px-6 md:px-32 pt-20 pb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
          Projects
        </h2>
        <p className="text-gray-500 mt-4 text-base sm:text-lg">
          Recent Projects.
        </p>
      </div>

      {/* PIN AREA */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-6 md:gap-12 pl-6 md:pl-32 pr-6 md:pr-32 w-max items-stretch"
        >
          {/* Intro */}
          <div className="w-[260px] sm:w-[300px] md:min-w-[400px] shrink-0 flex flex-col justify-center">
            <p className="text-gray-500 font-medium">
              Scroll to explore →
            </p>
          </div>

          {/* Projects */}
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card w-[280px] sm:w-[350px] md:w-[600px] shrink-0"
            >
              <GlassCard className="p-0 h-full overflow-hidden flex flex-col group">

                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 md:p-12 space-y-6 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 glass rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-2 mt-auto">
                    <MagneticButton strength={20}>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-bold text-xs sm:text-sm hover:text-indigo-400 transition-colors"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    </MagneticButton>

                    <MagneticButton strength={20}>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-bold text-xs sm:text-sm hover:text-indigo-400 transition-colors"
                      >
                        Source Code <Code size={16} />
                      </a>
                    </MagneticButton>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}

          {/* END CARD (FIXED VISIBILITY) */}
          <div className="w-[260px] sm:w-[300px] md:min-w-[400px] shrink-0 flex flex-col justify-center items-center text-center">
            <p className="text-gray-500 font-bold uppercase tracking-widest mb-4 text-xs sm:text-sm">
              Interested in more?
            </p>

            <MagneticButton strength={30}>
              <a href='https://github.com/ashrafulhoda789/' className="text-xl sm:text-2xl md:text-3xl font-black hover:text-indigo-500 transition-all">
                Github Archive →
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}