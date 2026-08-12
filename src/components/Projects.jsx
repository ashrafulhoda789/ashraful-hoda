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
import { BsGithub } from 'react-icons/bs';

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

          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card w-[300px] sm:w-[380px] md:w-[450px] shrink-0"
            >
              <div
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="block h-full cursor-pointer group"
              >
                <GlassCard className="p-0 h-full overflow-hidden flex flex-col bg-zinc-900/50 border border-zinc-800/80 hover:border-indigo-500/50 transition-all duration-500 relative shadow-2xl hover:shadow-indigo-500/10">
                  {/* Subtle Top Glow on Hover */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* Quick View Icon */}
                    <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-white opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-md">
                      <ArrowUpRight size={18} className="group-hover:text-indigo-400 transition-colors" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-indigo-300"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-zinc-800 text-[10px] font-mono text-zinc-400">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                      <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                        View Details →
                      </span>

                      <div className="flex items-center gap-3">
                        {project.links?.github && (
                          <Link
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-zinc-800/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all"
                            title="GitHub Repository"
                          >
                            <BsGithub size={15} />
                          </Link>
                        )}
                        {project.links?.live && (
                          <MagneticButton strength={15}>
                            <Link
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 text-xs font-bold transition-all"
                            >
                              <span>Live</span>
                              <ExternalLink size={13} />
                            </Link>
                          </MagneticButton>
                        )}
                      </div>
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