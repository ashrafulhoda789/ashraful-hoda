'use client';

import GlassCard from './ui/glass-card';
import { motion } from 'framer-motion';

const milestones = [
  {
    title: 'Secondary School Certificate (SSC)',
    school: "Baitush Sharaf Jabbaria Academy, Cox's Bazar",
    gpa: '4.78',
    passingYear: '2019',
    tags: ['SSC', 'Science'],
  },

  {
    title: 'Higher Secondary Certificate (HSC)',
    school: "Ramu Govt. College, Cox&apos;s Bazar",
    gpa: '5.00',
    passingYear: '2021',
    tags: ['HSC', 'Science'],
  },

  {
    title: 'B.Sc in CSE',
    school: 'BGC Trust University Bangladesh',
    gpa: '3.75(Running)',
    passingYear: '2023 - Present',
    tags: ['Computer Science & Engineering', 'University'],
  },
];

export default function LearningJourney() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            <span className="text-gradient">Qualification</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl font-medium">
            My Personal Journey
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent hidden md:block" />

          {milestones.map((item, i) => (
            <div key={i} className={`relative flex items-center justify-between md:justify-normal group ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full glass border border-indigo-500/50 text-indigo-400 font-bold z-10 absolute left-1/2 -translate-x-1/2 group-hover:scale-125 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                {i + 1}
              </div>

              <div className="w-full md:w-[calc(50%-4rem)]">
                <GlassCard className="p-8 md:p-10 hover:border-indigo-500/30 transition-colors">

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{item.school}</p>
                  <h3 className='text-gray-400 '>CGPA: <span className="text-xl text-white font-bold mb-4">{item.gpa}</span></h3>
                  <span className="text-indigo-400 font-black tracking-widest text-sm uppercase mb-4 block">
                    {item.year}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
