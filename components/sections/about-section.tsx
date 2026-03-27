"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05010a] text-white flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#05010a] to-transparent z-10" />
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-fuchsia-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] 
          [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] 
          [background-size:80px_80px]" 
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-[1000] leading-[0.85] tracking-[-0.05em] mb-8 italic">
            HELLO.<br/>I'M <span className="text-white uppercase">AFIQ</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-full" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-bold leading-tight text-gray-100">
              I’m a <span className="text-cyan-400 italic">graphic designer</span> focused on creating <span className="text-fuchsia-500">bold, modern, and impactful</span> visuals.
            </p>
            <div className="space-y-4 text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
              <p>
                I help brands communicate their message clearly and stand out in a competitive digital space.
              </p>
              <p>
                With strong attention to detail and passion for storytelling, I create designs that <span className="text-white font-semibold">drive real engagement.</span>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6">
              Expertise In
            </h3>
            <div className="flex flex-wrap gap-4">
              {[{ name: "Photoshop", icon: "Ps" }, { name: "CorelDraw", icon: "Cd" }].map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-4 bg-white/[0.02] border border-white/5 px-5 py-3 rounded-xl hover:bg-white/[0.05] transition-all"
                >
                  <span className="text-xl font-black italic text-white/30">{skill.icon}</span>
                  <span className="text-[11px] uppercase tracking-widest text-gray-300 font-bold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}