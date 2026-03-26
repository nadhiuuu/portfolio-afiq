"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPortfolioSection() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#050505] text-white flex flex-col justify-between">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-12%] left-[-8%] w-[40vw] h-[40vw] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[8%] right-[-6%] w-[32vw] h-[32vw] bg-fuchsia-600/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.04] 
          [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] 
          [background-size:50px_50px]" 
        />
      </div>

      <div className="relative z-30 flex justify-between items-center px-6 md:px-12 pt-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="text-base md:text-2xl font-extrabold italic text-cyan-400 tracking-tight"
        >
          GRAPHIC
        </motion.h2>

        <motion.h2 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="text-base md:text-2xl font-extrabold italic text-fuchsia-500 tracking-tight"
        >
          DESIGN
        </motion.h2>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center">

        <h1 className="absolute text-[20vw] md:text-[18vw] font-black tracking-[-0.06em] opacity-[0.04] select-none">
          PORTFOLIO
        </h1>

        <motion.div 
          initial={{ y: 60, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[650px] flex items-end justify-center"
        >
          <div className="absolute bottom-14 w-[220px] h-[220px] md:w-[420px] md:h-[420px] bg-cyan-500/20 blur-[120px] rounded-full" />

          <div className="relative w-full h-[50vh] md:h-[65vh]">
            <Image
              src="/images/profile1.png"
              alt="Afiq Ilham"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_0_40px_rgba(0,255,255,0.25)]"
            />
          </div>
        </motion.div>
      </div>

      <div className="relative z-30 w-full pb-8 flex justify-center">
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 px-5 md:px-7 py-2 rounded-full"
        >
          <span className="text-[10px] md:text-sm font-semibold tracking-[0.25em] uppercase">
            Designed by{" "}
            <span className="text-cyan-400 font-bold">
              Afiq Ilham
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}