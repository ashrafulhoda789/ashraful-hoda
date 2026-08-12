'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GlassCard from './ui/glass-card';
import MagneticButton from './ui/magnetic-button';
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { toast } from 'react-toastify';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
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

  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast('Message Sent Successfully!');
      formRef.current.reset();
    } catch (error) {
      toast('Failed to send message');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-indigo-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">

          {/* LEFT SIDE */}
          <div className="space-y-10 sm:space-y-12">

            {/* Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
                <span className="text-gradient">Get in Touch</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium max-w-md">
                Contact Me
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">

              {/* Email */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center group-hover:bg-indigo-500 transition-all duration-500">
                  <Mail className="text-indigo-400 group-hover:text-white" />
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                    Email Me
                  </p>
                  <a
                    href="mailto:asrafulhoda789@outlook.com"
                    className="text-lg sm:text-xl md:text-2xl font-bold hover:text-indigo-400 transition-colors duration-300"
                  >
                    asrafulhoda789@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4 sm:gap-6 group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center group-hover:bg-indigo-500 transition-all duration-500">
                  <FaPhoneAlt className="text-indigo-400 group-hover:text-white" />
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                    Mobile
                  </p>
                  <a
                    href="tel:01818299406"
                    className="text-lg sm:text-xl md:text-2xl font-bold hover:text-indigo-400 transition-colors duration-300"
                  >
                    +8801818299406
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 group cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center group-hover:bg-indigo-500 transition-all duration-500">
                  <MapPin className="text-indigo-400 group-hover:text-white" />
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    Chittagong, Bangladesh
                  </p>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div className="pt-4 sm:pt-8">
              <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 sm:mb-6">
                Socials
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socials.map((social) => (
                  <MagneticButton key={social.name} strength={15}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group text-base sm:text-lg font-bold hover:text-indigo-400 transition-colors"
                    >
                      {social.name}

                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (FORM) */}
          <GlassCard className="p-6 sm:p-10 md:p-16">

            <form ref={formRef} className="space-y-6 sm:space-y-8" onSubmit={sendEmail}>

              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 outline-none focus:border-indigo-500 transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 sm:top-4 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 outline-none focus:border-indigo-500 transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 sm:top-4 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Email Address
                </label>
              </div>

              <div>
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 outline-none focus:border-indigo-500 transition-colors peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 sm:top-4 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-indigo-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Message
                </label>
              </div>

              {/* Button */}
              <MagneticButton strength={30} className="w-full">
                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 md:py-6 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-2 sm:gap-3 hover:bg-indigo-500 hover:text-white transition-all shadow-xl shadow-white/5"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </MagneticButton>

            </form>

          </GlassCard>

        </div>
      </div>
    </section>
  );
}