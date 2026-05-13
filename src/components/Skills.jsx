'use client';

import { motion } from 'framer-motion';
import GlassCard from './ui/glass-card';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCheck,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiReact,
  SiDaisyui,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#aaaaaa" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
  { name: "Framer Motion", icon: SiFramer, color: "#BB4BFF" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },

  // 🆕 UI Libraries
  { name: "daisyUI", icon: SiDaisyui, color: "#5A0EF8" },
  { name: "HeroUI", icon: SiReact, color: "#00C7FF" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Core <span className="text-gradient">Technologies.</span>
        </h2>

        <p className="text-xl text-gray-400 max-w-2xl font-medium">
          A curated selection of technologies I use to build responsive, scalable, and modern web applications.
        </p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden border-y border-white/5 py-12 mb-20">
        <motion.div
          animate={{ x: ['0%', '-25%'] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="flex gap-24 whitespace-nowrap"
        >
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl font-black text-transparent opacity-60 hover:opacity-100 hover:text-indigo-400 transition-all duration-500 cursor-default"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.25)',
              }}
            >
              {skill.name}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <GlassCard
                className="p-6 flex items-center justify-center hover:bg-white/5 transition-all cursor-default group"
                hoverGlow={false}
              >
                <Icon
                  size={34}
                  style={{ color: skill.color }}
                  className="text-indigo-400 group-hover:scale-125 transition-transform duration-300"
                />
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* Frontend + Backend Section */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className='text-center'>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            My Technical Level
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-7 grid md:grid-cols-2 gap-3 place-items-center">

          {/* Frontend */}
          <div className="w-100 h-85 glass rounded-3xl p-10 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
            <h3 className="text-3xl font-black text-center tracking-tight mb-8">
              Frontend <span className="text-indigo-400">Stack</span>
            </h3>

            <div className="grid grid-cols-2 gap-3 place-items-center">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",

              ].map((tech) => (
                <span
                  key={tech}
                  className="w-full px-4 py-3 rounded-xl text-sm font-bold text-gray-300 hover:bg-indigo-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 min-w-0">

                    <FaCheckCircle className="text-indigo-400 shrink-0 text-lg" />

                    <div className="flex flex-col min-w-0">
                      <p className="text-gray-200 font-medium truncate">
                        {tech}
                      </p>

                      <p className="text-xs text-gray-400">
                        Expert
                      </p>
                    </div>

                  </div>
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="w-100 h-85 glass rounded-3xl p-10 border border-white/10 hover:border-indigo-500/30 transition-all duration-500">

            <h3 className="text-3xl font-black text-center tracking-tight mb-8">
              Backend <span className="text-indigo-400">Stack</span>
            </h3>

            <div className="grid grid-cols-2 gap-3 place-items-center">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST API",

              ].map((tech) => (
                <span
                  key={tech}
                  className="w-full px-4 py-3 rounded-xl text-sm font-bold text-gray-300 hover:bg-indigo-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 min-w-0">

                    <FaCheckCircle className="text-indigo-400 shrink-0 text-lg" />

                    <div className="flex flex-col min-w-0">
                      <p className="text-gray-200 font-medium truncate">
                        {tech}
                      </p>

                      <p className="text-xs text-gray-400">
                        Expert
                      </p>
                    </div>

                  </div>
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
