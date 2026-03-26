"use client";

import { motion } from "framer-motion";

const brochureProjects = [
  { id: 1, title: "PRODUCT FLYER", category: "Brochure", img: "https://i.pravatar.cc/600?img=21" },
  { id: 2, title: "COMPANY PROFILE", category: "Print Media", img: "https://i.pravatar.cc/600?img=22" },
  { id: 3, title: "EVENT BANNER", category: "Digital Printing", img: "https://i.pravatar.cc/600?img=23" },
  { id: 4, title: "ANNUAL CALENDAR", category: "Merchandise", img: "https://i.pravatar.cc/600?img=24" },
  { id: 5, title: "PROMO POSTER", category: "Marketing Kit", img: "https://i.pravatar.cc/600?img=25" },
  { id: 6, title: "CATALOG DESIGN", category: "Layout", img: "https://i.pravatar.cc/600?img=26" },
];

export default function BrochureSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden py-24 px-4 md:px-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.1] 
          [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] 
          [background-size:50px_50px]" 
        />
      </div>
      <div className="absolute top-10 right-[8%] z-0 select-none pointer-events-none text-right">
        <motion.h2 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-[10vw] font-black leading-none text-white/10 italic tracking-tighter uppercase drop-shadow-sm"
          style={{ fontFamily: 'brush script mt, cursive' }}
        >
          Brochure<br/>Design
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-16 border-b-4 border-cyan-400 inline-block pb-2">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase"
          >
            Print <span className="text-fuchsia-500">Media</span>
          </motion.h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {brochureProjects.map((p, i) => (
            <motion.div 
            key={p.id} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-md border border-white/10 bg-white/5 hover:border-fuchsia-400/40 transition"
            >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105" 
                />
            </div>
            
            <div className="p-3">
                <h4 className="text-xs md:text-sm font-semibold uppercase tracking-tight leading-tight text-white">
                {p.title}
                </h4>
                <p className="text-[10px] text-cyan-400 uppercase tracking-widest mt-1">
                {p.category}
                </p>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-fuchsia-500 group-hover:w-full transition-all duration-300" />
            </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}