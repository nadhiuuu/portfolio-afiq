"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[40vw] h-[40vw] bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-[8%] right-[-6%] w-[32vw] h-[32vw] bg-fuchsia-600/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.04] 
          [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] 
          [background-size:50px_50px]" 
        />
      </div>

      <div className="absolute top-16 left-[10%] z-0 pointer-events-none">
        <motion.h2 
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-[10vw] font-black italic text-white/5 leading-none tracking-[-0.04em] uppercase"
        >
          Contact
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black italic leading-tight mb-6"
        >
          Let’s Work <span className="text-cyan-400">Together</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 max-w-xl mx-auto mb-10 text-sm md:text-base"
        >
          Have a project in mind or just want to say hello? Feel free to reach out.
          I’m always open to discussing new ideas and creative opportunities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:your@email.com"
            className="px-6 py-3 bg-cyan-400 text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-cyan-300 transition"
          >
            Email Me
          </a>

          <a
            href="https://wa.me/your-number"
            target="_blank"
            className="px-6 py-3 border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:border-fuchsia-500 hover:text-fuchsia-400 transition"
          >
            WhatsApp
          </a>
        </motion.div>

        <div className="mt-12 flex justify-center gap-6 text-sm text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-cyan-400 transition">Instagram</a>
          <a href="#" className="hover:text-cyan-400 transition">Dribbble</a>
          <a href="#" className="hover:text-cyan-400 transition">Behance</a>
        </div>

      </div>

      <div className="absolute bottom-6 text-[10px] tracking-[0.3em] uppercase text-gray-600">
        © 2026 Afiq Ilham
      </div>
    </section>
  );
}