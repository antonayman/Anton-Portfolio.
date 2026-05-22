import { motion } from "motion/react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1420] to-[#0a0f1a]" />

      {/* Static gradient blobs - optimized with minimal motion */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,212,212,0.15) 0%, rgba(0,212,212,0) 70%)",
          filter: "blur(80px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,137,123,0.12) 0%, rgba(0,137,123,0) 70%)",
          filter: "blur(90px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />

      <motion.div
        className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(0,229,255,0) 70%)",
          filter: "blur(70px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />

      {/* Additional static light sources for depth */}
      <div
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,212,212,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Static grid pattern with glow - optimized */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,212,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,212,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />

      {/* Diagonal accent lines - static */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(0,212,212,0.4) 49%, rgba(0,212,212,0.4) 51%, transparent 52%)`,
          backgroundSize: "100px 100px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(10,15,26,0.3) 100%)",
        }}
      />
    </div>
  );
}
