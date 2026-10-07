'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './ui/magnetic-button';
import { cn } from '@/lib/utils';
import {
  Home,
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Cpu },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Experience', href: '#experience-work', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Achievements', href: '#achievements', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => {
        const element = document.querySelector(link.href);

        return element
          ? {
            id: link.href,
            element,
          }
          : null;
      })
      .filter(Boolean);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          const active = visibleSections[0];

          const section = sectionElements.find(
            (item) => item.element === active.target
          );

          if (section) {
            setActiveSection(section.id);
          }
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.05, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sectionElements.forEach(({ element }) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
  };

  const tooltipVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.95,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },

    exit: {
      opacity: 0,
      y: 5,
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <>
      {/* =========================
          TOP NAVBAR
      ========================== */}
      <nav
        className={cn(
          'fixed top-0 w-full z-[100] transition-all duration-500 py-6 px-6 md:px-12',
          scrolled
            ? 'bg-black/50 backdrop-blur-xl py-4 border-b border-white/5'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <MagneticButton strength={20}>
            <a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-lg group-hover:rotate-12 transition-transform text-white">
                J
              </div>

              <span className="text-xl font-bold tracking-tighter text-white">
                JAMSHED.
              </span>
            </a>
          </MagneticButton>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 7).map((link) => (
              <MagneticButton
                key={link.name}
                strength={15}
              >
                <a
                  href={link.href}
                  onClick={() =>
                    handleNavClick(link.href)
                  }
                  className={cn(
                    'text-sm font-medium transition-colors relative group',
                    activeSection === link.href
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  )}
                >
                  {link.name}

                  <span
                    className={cn(
                      'absolute -bottom-2 left-0 h-0.5 bg-indigo-500 transition-all duration-300',
                      activeSection === link.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    )}
                  />
                </a>
              </MagneticButton>
            ))}

            <MagneticButton strength={25}>
              <a
                href="#contact"
                onClick={() =>
                  handleNavClick('#contact')
                }
                className={cn(
                  'px-6 py-2.5 font-bold rounded-full transition-all',
                  activeSection === '#contact'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white text-black hover:bg-indigo-500 hover:text-white'
                )}
              >
                Contact
              </a>
            </MagneticButton>
          </div>
        </div>
      </nav>


      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] lg:hidden w-[calc(100%-16px)] sm:w-[85%] max-w-xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/85 backdrop-blur-2xl border border-white/10 rounded-2xl px-1.5 py-2 sm:px-4 sm:py-3 flex items-center justify-between shadow-2xl shadow-indigo-500/15"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;

            const isActive =
              activeSection === link.href;

            const isHovered =
              hoveredItem === link.name;

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  setHoveredItem(link.name)
                }
                onMouseLeave={() =>
                  setHoveredItem(null)
                }
              >
                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      variants={tooltipVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute -top-12 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
                    >
                      {link.name}

                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-indigo-600 rotate-45 rounded-[2px]" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Nav Button */}
                <a
                  href={link.href}
                  onClick={() =>
                    handleNavClick(link.href)
                  }
                  aria-label={link.name}
                  className={cn(
                    'relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl transition-all duration-300 flex items-center justify-center shrink-0',
                    isActive
                      ? 'text-white bg-indigo-600 shadow-lg shadow-indigo-600/40'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  <Icon
                    size={20}
                    className="sm:w-6 sm:h-6"
                    strokeWidth={isActive || isHovered ? 2.5 : 2}
                  />

                  {/* Active Indicator */}
                  {isActive && !isHovered && (
                    <motion.span
                      layoutId="activeIndicatorMobile"
                      className="absolute -bottom-1.5 w-1.5 h-1.5 bg-white rounded-full"
                    />
                  )}
                </a>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}