"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp"; 
import { NeonTitle } from "@/components/ui/neon-title"; 
import SparklesCore from "@/components/ui/Sparkles";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black relative">
      
<LampContainer className="pt-32 md:pt-60"> 
        
        <div className="absolute inset-0 z-0 pointer-events-none">
            <SparklesCore
              id="lampDust"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#00FFFF"
              speed={0.5}
            />
        </div>

        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-50 md:mt-60" 
        >
           <NeonTitle />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 font-normal text-base text-cyan-100/70 max-w-lg md:max-w-2xlmx-auto text-center relative z-20"
        >
          Exploring the boundaries of digital creativity with high-precision technology.
        </motion.p>
      </LampContainer>

      <section className="py-20 px-4 max-w-7xl mx-auto relative z-20 -mt-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-center text-white mb-20"
        >
           Recent Missions
        </motion.h2>
        
        <BentoGrid>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""} 
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </section>

      <footer className="py-20 relative z-20 flex flex-col items-center justify-center border-t border-white/10 bg-black">
         <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <SparklesCore
              id="footerSparkles"
              background="transparent"
              minSize={0.6} maxSize={1.4} particleDensity={20} className="w-full h-full" particleColor="#FFFFFF" speed={0.5}
            />
         </div>

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 relative z-10"
         >
            <h2 className="text-3xl md:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Ready to start your journey?
            </h2>
            <p className="text-neutral-400 mt-4 max-w-lg mx-auto">
              Let's create something extraordinary together.
            </p>
            
            <div className="mt-8">
              <a 
                href="https://www.fiverr.com/s/lj4YLlA" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
                  Hire Me on Fiverr
                </span>
              </a>
              <a 
                href="https://github.com/irsyad-aulia" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="h-12 px-8 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors border border-zinc-800">
                   GitHub Profile
                </button>
              </a>

            </div>
         </motion.div>

         <div className="mt-20 text-neutral-600 text-sm relative z-10">
            &copy; 2026 Project Supernova. All systems operational.
         </div>
      </footer>

    </main>
  );
}

const items = [
  {
    title: "Project Alpha",
    description: "Exploration of Generative AI interfaces.",
    header: (
      <img 
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
        alt="AI Interface"
        className="w-full h-48 md:h-60 rounded-xl object-cover opacity-80 hover:opacity-100 transition duration-500"
      />
    ),
  },
  {
    title: "Cyber Finance",
    description: "A decentralized finance dashboard for the future.",
    header: (
      <img 
        src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop" 
        alt="Finance Dashboard"
        className="w-full h-48 md:h-60 rounded-xl object-cover opacity-80 hover:opacity-100 transition duration-500"
      />
    ),
  },
  {
    title: "Neon Commerce",
    description: "Next-gen e-commerce platform with 3D interactions.",
    header: (
      <img 
        src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1000&auto=format&fit=crop" 
        alt="Neon Commerce"
        className="w-full h-48 md:h-60 rounded-xl object-cover opacity-80 hover:opacity-100 transition duration-500"
      />
    ),
  },
  {
    title: "Galactic UI Kit",
    description: "A UI component library used across the Milky Way galaxy.",
    header: (
      <img 
        src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" 
        alt="UI Kit"
        className="w-full h-48 md:h-60 rounded-xl object-cover opacity-80 hover:opacity-100 transition duration-500"
      />
    ),
  },
  {
    title: "Space Colony One",
    description: "Architectural design for self-sustaining off-world habitats.",
    header: (
      <img 
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1000&auto=format&fit=crop" 
        alt="Space Colony"
        className="w-full h-48 md:h-60 rounded-xl object-cover opacity-80 hover:opacity-100 transition duration-500"
      />
    ),
  },
];