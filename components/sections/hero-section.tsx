"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

export default function HeroPortfolioSection() {
  const containerRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const imageX = useTransform(smoothX, [0, 1], ["-15px", "15px"]);
  const imageY = useTransform(smoothY, [0, 1], ["-10px", "10px"]);

  const textX = useTransform(smoothX, [0, 1], ["30px", "-30px"]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[100svh] w-full overflow-hidden bg-[#05010a] text-white flex flex-col items-center"
    >
      {/* === Background === */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,2,42,1)_0%,rgba(5,1,10,1)_80%)] opacity-90" />

        {/* Glow */}
        <div className="absolute left-[10%] top-[15%] h-[50vw] w-[50vw] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute right-[10%] bottom-[15%] h-[45vw] w-[45vw] rounded-full bg-fuchsia-600/10 blur-[110px]" />
      </div>

      {/* === Header === */}
      <div className="relative z-30 w-full flex items-center justify-between px-5 pt-6 md:px-20 lg:pt-14">
        <motion.h2 className="text-lg font-black italic tracking-tighter text-cyan-400 md:text-4xl lg:text-5xl">
          GRAPHIC
        </motion.h2>
        <motion.h2 className="text-lg font-black italic tracking-tighter text-fuchsia-500 md:text-4xl lg:text-5xl">
          DESIGN
        </motion.h2>
      </div>

      {/* === Main === */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        
        {/* Background Text */}
        <motion.h1
          style={{ x: textX }}
          className="absolute w-full select-none text-center text-[22vw] md:text-[18vw] font-black tracking-[-0.08em] text-white/[0.03] leading-none"
        >
          PORTFOLIO
        </motion.h1>

        {/* Profile */}
        <motion.div
          style={{ x: imageX, y: imageY }}
          className="relative flex flex-col items-center justify-center pt-16 md:pt-20"
        >
          {/* Glow belakang foto */}
          <div className="absolute h-[30vh] w-[30vh] md:h-[60vh] md:w-[60vh] rounded-full bg-cyan-400/10 blur-[100px] -z-10" />

          {/* FOTO */}
          <div className="relative w-[90vw] h-[50vh] sm:h-[55vh] md:w-[600px] md:h-[70vh] lg:h-[75vh]">
            <Image
              src="/images/profile3.png"
              alt="Afiq Ilham"
              fill
              priority
              className="object-contain object-bottom translate-y-[10%] md:translate-y-[5%] drop-shadow-[0_0_50px_rgba(6,182,212,0.15)] z-10"
            />
          </div>

          {/* BADGE */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-3 md:mt-0 pointer-events-auto z-20"
          >
            <div className="rounded-full border border-white/10 bg-black/80 px-4 py-2 md:px-10 md:py-3.5 backdrop-blur-xl shadow-2xl">
              <span className="text-[9px] md:text-sm font-bold uppercase tracking-[0.35em] text-white/90 whitespace-nowrap">
                Portfolio of{" "}
                <span className="text-cyan-400 font-black">
                  Afiq Ilham
                </span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#05010a] to-transparent z-0" />
    </section>
  );
}