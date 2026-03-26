"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white flex items-center">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[40vw] h-[40vw] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[8%] right-[-6%] w-[32vw] h-[32vw] bg-fuchsia-600/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.04] 
          [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] 
          [background-size:50px_50px]" 
        />
      </div>

      <div className="absolute top-20 right-[12%] z-0 pointer-events-none">
        <motion.h2 
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-[10vw] font-black leading-none text-white/10 italic tracking-tighter uppercase drop-shadow-sm"
          style={{ fontFamily: 'brush script mt, cursive' }}
        >
          About<br/>Me
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-cyan-400 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
            Visual Designer
          </span>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.04em] mb-6 italic">
            HELLO.<br/>I'M <span className="text-white uppercase">AFIQ</span>
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-semibold leading-snug text-gray-100">
              I’m a <span className="text-cyan-400 italic">graphic designer</span> focused on creating <span className="text-fuchsia-500">bold, modern, and impactful</span> visuals.
            </p>

            <div className="space-y-3 text-sm md:text-base text-gray-400 leading-relaxed">
              <p>
                I help brands communicate their message clearly and stand out in a competitive digital space.
              </p>
              <p>
                With strong attention to detail and passion for storytelling, I create designs that not only look good but also <span className="text-white font-medium">drive engagement.</span>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500 mb-5">
              Tools
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Photoshop", icon: "Ps" },
                { name: "CorelDraw", icon: "Cd" },
                { name: "Illustrator", icon: "Ai" }
              ].map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition"
                >
                  <span className="text-lg font-black italic">
                    {skill.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-300 font-semibold">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] rotate-180">
        <p className="text-[8px] font-bold tracking-[1em] uppercase opacity-10 whitespace-nowrap">
          Creative Impact — Visual Identity — 2026
        </p>
      </div>
    </section>
  );
}