"use client";

import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "CHAMPIONSHIP", img: "https://i.pravatar.cc/600?img=11" },
  { id: 2, title: "MATCH DAY", img: "https://i.pravatar.cc/600?img=12" },
  { id: 3, title: "STARTING LINEUP", img: "https://i.pravatar.cc/600?img=13" },
  { id: 4, title: "PLAYER PROFILE", img: "https://i.pravatar.cc/600?img=14" },
  { id: 5, title: "STADIUM VIBE", img: "https://i.pravatar.cc/600?img=15" },
  { id: 6, title: "VICTORY MOMENT", img: "https://i.pravatar.cc/600?img=16" },
  { id: 7, title: "FINAL MATCH", img: "https://i.pravatar.cc/600?img=17" },
  { id: 8, title: "TEAM SQUAD", img: "https://i.pravatar.cc/600?img=18" },
];

export default function PortfolioSection() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-20 px-6 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[40vw] h-[40vw] bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-[8%] right-[-6%] w-[32vw] h-[32vw] bg-fuchsia-600/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.04] 
          [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] 
          [background-size:50px_50px]" 
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="mb-12">
          <h2 className="text-[10px] tracking-[0.4em] text-fuchsia-500 uppercase mb-2">
            Selected Works
          </h2>
          <h3 className="text-3xl md:text-5xl font-black italic leading-none tracking-tight">
            Sport <span className="text-cyan-400">Design</span>
          </h3>
          <div className="w-16 h-[2px] bg-cyan-400 mt-3" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

          {projects.map((p, i) => {
            const isHighlight = i === 4;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-md border border-white/10 bg-white/5 hover:border-cyan-400/40 transition
                  ${isHighlight ? "md:col-span-2 md:row-span-2" : ""}
                `}
              >
                <div className="relative w-full aspect-[3/4]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 p-2 md:p-3">
                  <h4 className="text-[10px] md:text-xs font-semibold uppercase tracking-wide">
                    {p.title}
                  </h4>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-fuchsia-500 group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}