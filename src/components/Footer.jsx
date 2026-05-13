'use client';

import MagneticButton from './ui/magnetic-button';

export default function Footer() {

  const socials = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ashraful-hoda-jamshed',
    },
    {
      name: 'Github',
      link: 'https://github.com/ashrafulhoda789',
    },

  ];
  
  return (
    <footer className="py-20 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">J</div>
              <span className="text-2xl font-black tracking-tighter">JAMSHED.</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs font-medium">
              Built with passion for creating modern, fast, and user-friendly web experiences.
            </p>
          </div>

          <div className="flex gap-8">
            {socials.map((social, i) => (
              <MagneticButton key={i} strength={10}>
                <a href={social.link} className="text-sm font-bold text-gray-500 hover:text-white transition-colors">
                  {social.name}
                </a>
              </MagneticButton>
            ))}
          </div>

          <div className="text-right">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Jamshed.
            </p>
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-1">
              Designed & developed with attention to detail
            </p>
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <span className="text-[150px] font-black uppercase tracking-tighter">Ashraful Hoda Jamshed</span>
      </div>
    </footer>
  );
}
