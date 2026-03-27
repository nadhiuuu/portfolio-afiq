"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  const socialLinks = [
    { 
      name: "Instagram", 
      link: "https://instagram.com/afiqilhamm",
      color: "hover:bg-pink-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
      )
    },
    { 
      name: "WhatsApp", 
      link: "https://wa.me/62881026097808",
      color: "hover:bg-green-600",
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    },
    { 
      name: "Email", 
      link: "mailto:muwafiqilham14@gmail.com",
      color: "hover:bg-cyan-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
  ];

  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full bg-[#05010a] text-white flex flex-col items-center justify-center overflow-hidden -mt-1px py-20 md:py-0">

      {/* === Background & Grid Sync === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#05010a] via-[#05010a]/90 to-transparent z-10" />
        <div className="absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)]
          [background-size:40px_40px] md:[background-size:60px_60px]" 
        />
        <div className="absolute top-[20%] left-[-10%] w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] bg-cyan-500/5 blur-[100px] md:blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[70vw] md:w-[50vw] h-[70vw] md:h-[50vw] bg-fuchsia-600/5 blur-[100px] md:blur-[140px] rounded-full" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-16 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-bold tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] uppercase mb-4 md:mb-6"
          >
            Ready for your next project?
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-[1000] italic leading-[0.9] md:leading-[0.85] tracking-tighter uppercase"
          >
            LET’S WORK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 block pr-2 md:pr-4">
              TOGETHER
            </span>
          </motion.h3>
        </div>

        {/* Social Links Grid: 1 kolom di mobile, 3 di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl px-4 sm:px-0">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 sm:gap-3 p-5 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-500 ${social.color} hover:scale-105 hover:border-white/20`}
            >
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/20 transition-colors">
                {social.icon}
              </div>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer: Stacked di mobile, Row di desktop */}
      <div className="absolute bottom-6 md:bottom-8 w-full px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-3 opacity-30 text-[8px] md:text-[9px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase border-t border-white/5 pt-6 md:pt-8">
        <p>© 2026 AFIQ ILHAM</p>
        <div className="flex gap-4 italic">
          <span>Graphic Design</span>
        </div>
      </div>
    </section>
  );
}