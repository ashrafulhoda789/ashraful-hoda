'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/hooks/use-gsap';

import GlassCard from './ui/glass-card';
import MagneticButton from './ui/magnetic-button';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    if (!sliderRef.current || !containerRef.current) return;

    const getScrollAmount = () => {
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
      className="overflow-hidden"
    >
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
              className="project-card w-[280px] sm:w-[340px] md:w-[420px] shrink-0"
            >
              {/* Card Container with onClick programmatic navigation */}
              <div
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="block h-full cursor-pointer"
              >
                <GlassCard className="p-0 h-full overflow-hidden flex flex-col group">

                  {/* Image (Next.js Image Optimized) */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                    <div className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full glass opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col">
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {project.title}
                    </h3>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 glass rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Live link */}
                    <div className="pt-2 mt-auto">
                      <MagneticButton strength={20}>
                        <Link
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 font-bold text-xs sm:text-sm hover:text-indigo-400 transition-colors w-fit"
                        >
                          Live Demo <ExternalLink size={16} />
                        </Link>
                      </MagneticButton>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}

          {/* Github Archive */}
          <div className="w-[260px] sm:w-[300px] md:min-w-[400px] shrink-0 flex flex-col justify-center items-center text-center">
            <p className="text-gray-500 font-bold uppercase tracking-widest mb-4 text-xs sm:text-sm">
              Interested in more?
            </p>

            <MagneticButton strength={30}>
              <Link
                href="https://github.com/ashrafulhoda789/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl md:text-3xl font-black hover:text-indigo-500 transition-all"
              >
                Github Archive →
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}