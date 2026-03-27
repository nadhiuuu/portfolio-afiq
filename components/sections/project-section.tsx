"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { id: 1, ext: "jpg" }, { id: 1, ext: "png" },
  { id: 2, ext: "jpg" }, { id: 2, ext: "png" },
  { id: 3, ext: "jpg" }, { id: 3, ext: "png" },
  { id: 4, ext: "jpg" }, { id: 4, ext: "png" },
  { id: 5, ext: "jpg" }, { id: 5, ext: "png" },
  { id: 6, ext: "jpg" }, { id: 6, ext: "png" },
  { id: 7, ext: "jpg" }, { id: 7, ext: "png" },
  { id: 8, ext: "jpg" }, { id: 8, ext: "png" },
  { id: 9, ext: "jpg" }, { id: 9, ext: "png" },
  { id: 10, ext: "jpg" }, { id: 10, ext: "png" },
  { id: 11, ext: "jpg" }, { id: 11, ext: "png" },
  { id: 12, ext: "jpg" }, { id: 12, ext: "png" },
  { id: 13, ext: "jpg" }, { id: 13, ext: "png" },
  { id: 14, ext: "jpg" }, { id: 14, ext: "png" },
  { id: 15, ext: "jpg" }, { id: 15, ext: "png" },
  { id: 16, ext: "jpg" }, { id: 16, ext: "png" },
  { id: 17, ext: "jpg" }, { id: 17, ext: "png" },
  { id: 18, ext: "jpg" }, { id: 18, ext: "png" },
  { id: 19, ext: "jpg" }, { id: 19, ext: "png" },
  { id: 20, ext: "jpg" }, { id: 20, ext: "png" },
  { id: 21, ext: "jpg" }, { id: 21, ext: "png" },
  { id: 22, ext: "jpg" }, { id: 22, ext: "png" },
  { id: 23, ext: "jpg" }, { id: 23, ext: "png" },
  { id: 24, ext: "jpg" }, { id: 24, ext: "png" },
  { id: 25, ext: "jpg" }, { id: 25, ext: "png" },
  { id: 26, ext: "jpg" }, { id: 27, ext: "jpg" },
  { id: 28, ext: "jpg" }, { id: 29, ext: "jpg" },
  { id: 30, ext: "jpg" }, { id: 31, ext: "jpg" }
].map((item, index) => ({
  id: index,
  title: `Project ${item.id}`,
  img: `/images/project/Project (${item.id}).${item.ext}`
}));

export default function PortfolioSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen w-full bg-[#05010a] text-white py-24 px-4 sm:px-10 overflow-hidden -mt-16 md:-mt-15">
      
      {/* === Background & Grid Sync === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#05010a] via-[#05010a]/80 to-transparent z-10" />
        <div className="absolute inset-0 opacity-[0.03] 
          [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] 
          [background-size:60px_60px]" 
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <motion.h3 className="text-4xl md:text-7xl font-[1000] italic leading-none tracking-tighter uppercase">
           <h2 className="text-[10px] font-bold tracking-[0.5em] text-fuchsia-500 uppercase mb-4">
              Selected Works
            </h2>
            <h3 className="text-4xl md:text-7xl font-[1000] italic leading-none tracking-tighter uppercase">
              Creative <span className="text-cyan-400">Archive</span>
            </h3>
          </motion.h3>
        </div>

        {/* === Grid Masonry === */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              layoutId={`card-${p.img}`}
              onClick={() => setSelectedImg(p.img)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-xl cursor-zoom-in border border-white/5 bg-[#0a0a0c]
                ${i % 10 === 0 ? "md:col-span-2" : ""} 
                ${i % 6 === 0 ? "md:row-span-2" : ""}
              `}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* === Lightbox Overlay === */}
      <AnimatePresence>
        {selectedImg && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop Hitam */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
            />

            {/* Gambar Full */}
            <motion.div 
              layoutId={`card-${selectedImg}`}
              className="relative z-10 max-w-full max-h-full flex items-center justify-center"
            >
              <img 
                src={selectedImg} 
                alt="Full Preview"
                className="rounded-lg shadow-2xl border border-white/10 object-contain max-h-[90svh]"
              />
              
              {/* Tombol Close */}
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white text-sm font-bold tracking-widest uppercase"
              >
                Close [×]
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}