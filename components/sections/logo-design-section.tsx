"use client";

import { motion } from "framer-motion";

const logoProjects = [
  { id: 1, title: "CHAN APPAREL", category: "Branding", img: "https://i.pravatar.cc/600?img=31", size: "lg" },
  { id: 2, title: "NEXT GEN", category: "Corporate", img: "https://i.pravatar.cc/600?img=32", size: "sm" },
  { id: 3, title: "OUD AVENUE", category: "Luxury", img: "https://i.pravatar.cc/600?img=33", size: "sm" },
  { id: 4, title: "FOUNDERS RETREAT", category: "Identity", img: "https://i.pravatar.cc/600?img=34", size: "md" },
  { id: 5, title: "CHAN APPAREL STATIONERY", category: "Mockup", img: "https://i.pravatar.cc/600?img=35", size: "md" },
];

export default function LogoDesignSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden py-24 px-4 md:px-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.1] 
          [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] 
          [background-size:50px_50px]" 
        />
      </div>
      <div className="absolute top-20 left-[-2%] z-0 select-none pointer-events-none">
        <motion.h2 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-[14vw] font-black leading-none text-white/5 italic tracking-tighter uppercase"
          style={{ fontFamily: 'brush script mt, cursive' }}
        >
          Logo<br/>Design
        </motion.h2>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-sm font-black tracking-[0.5em] text-cyan-400 uppercase mb-2">Visual Identity</h2>
            <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">
              Brand <span className="text-white/20">Marks</span>
            </h3>
          </motion.div>
          <div className="h-[2px] w-full md:w-1/3 bg-gradient-to-r from-cyan-400 to-transparent mb-2 hidden md:block" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {logoProjects.map((p, i) => (
            <motion.div 
              key={p.id} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden bg-[#111] rounded-2xl border border-white/5 
                ${p.size === 'lg' ? 'col-span-2 row-span-2' : ''}
                ${p.size === 'md' ? 'col-span-2 row-span-1' : ''}
                ${p.size === 'sm' ? 'col-span-1 row-span-1' : ''}
              `}
            >
              <img 
                src={p.img} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1">{p.category}</span>
                <h4 className="text-lg md:text-xl font-black italic text-white uppercase tracking-tighter leading-none">{p.title}</h4>
              </div>

              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold text-white/20 uppercase tracking-[1em]"
          >
            Crafting Minimalist & Impactful Identities
          </motion.p>
        </div>
      </div>
    </section>
  );
}