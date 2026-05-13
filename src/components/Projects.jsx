'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/use-gsap';
import GlassCard from './ui/glass-card';
import MagneticButton from './ui/magnetic-button';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'BookBee',
    description: 'A premium bookstore platform with real-time inventory and elegant transitions.',
    tech: ['Next.js', 'React', 'BetterAuth', 'MongoDB'],
    image: '/bookbee.png',
    links: {
      live: 'https://bookbee-online-platform.vercel.app/',
      github: 'https://github.com/ashrafulhoda789/bookbee-online-platform'
    },
  },
  {
    title: 'Keen-Keeper',
    description: 'Advanced productivity suite for high-performance teams and creative professionals.',
    tech: ['React', 'Tailwind', 'DaisyUI'],
    image: '/keen-keeper.png',
    links: {
      live: 'https://keen-keeper-project-ph.netlify.app/',
      github: 'https://github.com/ashrafulhoda789/keen-keeper-project-ph'
    },
  },
  {
    title: 'English Janala',
    description: 'Interactive language learning experience featuring immersive speech recognition.',
    tech: ['JavaScript', 'Tailwind CSS', 'DaisyUI'],
    image: '/english-janala.png',
    links: {
      live: 'https://ashrafulhoda789.github.io/English-Janala-Project-PH/',
      github: 'https://github.com/ashrafulhoda789/English-Janala-Project-PH'
    },
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    if (!sliderRef.current || !containerRef.current) return;

    const sections = gsap.utils.toArray('.project-card');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + sliderRef.current?.offsetWidth,
      }
    });
  }, []);

  return (
    <section ref={containerRef} id="projects" className="bg-black/40 overflow-hidden">

      <div className="min-h-screen flex items-center">

        <div
          ref={sliderRef}
          className="flex gap-6 md:gap-12 px-6 md:px-32"
        >

          {/* Intro */}
          <div className="w-[260px] sm:w-[300px] md:min-w-[400px] flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 md:mb-8">
              Projects
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium">
              Recent Projects.
            </p>
          </div>

          {/* Projects */}
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card w-[280px] sm:w-[350px] md:w-[600px]"
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
                <div className="p-6 sm:p-8 md:p-12 space-y-6 md:space-y-8 flex-1 flex flex-col">

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
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
                  <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 mt-auto">

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

          {/* End card */}
          <div className="w-[260px] sm:w-[300px] md:min-w-[400px] flex flex-col justify-center items-center text-center">
            <p className="text-gray-500 font-bold uppercase tracking-widest mb-4 text-xs sm:text-sm">
              Interested in more?
            </p>

            <MagneticButton strength={30}>
              <a
                href="#"
                className="text-xl sm:text-2xl md:text-3xl font-black hover:text-indigo-500 transition-all"
              >
                Github Archive →
              </a>
            </MagneticButton>
          </div>

        </div>
      </div>
    </section>
  );
}