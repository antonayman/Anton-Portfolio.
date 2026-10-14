import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, ArrowDown, Code2, Database, Server, Layers } from "lucide-react";
import { TypingAnimation } from "./TypingAnimation";

const staticIcons = [
  { Icon: Code2, position: { top: "20%", left: "10%" } },
  { Icon: Database, position: { top: "30%", right: "15%" } },
  { Icon: Server, position: { bottom: "25%", left: "15%" } },
  { Icon: Layers, position: { bottom: "30%", right: "10%" } },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Static light rings behind the image - no animation for performance */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-turquoise/20"
          style={{
            width: 400 + i * 100,
            height: 400 + i * 100,
            boxShadow: "0 0 40px rgba(0,212,212,0.1)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3 + i * 0.1, scale: 1 }}
          transition={{ duration: 1, delay: i * 0.2 }}
        />
      ))}

      {/* Static tech icons - decorative only */}
      {staticIcons.map(({ Icon, position }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
        >
          <div className="p-4 rounded-2xl bg-card/30 backdrop-blur-md border border-turquoise/20"
               style={{ boxShadow: "0 0 20px rgba(0,212,212,0.1)" }}>
            <Icon className="w-8 h-8 text-turquoise/60" />
          </div>
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div
              className="rounded-full p-[3px]"
              style={{
                background: "conic-gradient(from 0deg, #00d4d4, #00897b, #00e5ff, #00d4d4)",
              }}
            >
              <div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden"
                style={{
                  boxShadow: "0 0 80px rgba(0,212,212,0.4), inset 0 0 40px rgba(0,212,212,0.2)",
                }}
              >
                <img
                 src="/link.jpg"
                 alt="Anton Ayman"
                 className="w-full h-full object-cover scale-150"
                 style={{ objectPosition: "center 20%" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-turquoise/10 border border-turquoise/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turquoise opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-turquoise"></span>
              </span>
              <span className="text-sm text-turquoise">Available for opportunities</span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl mb-4"
              style={{
                background: "linear-gradient(135deg, #00d4d4 0%, #00e5ff 50%, #00897b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 80px rgba(0,212,212,0.3)",
              }}
            >
              Anton Ayman
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full-Stack Engineer & Creative Technologist
            </p>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypingAnimation />
            </motion.div>
          </motion.div>

          {/* Social Links - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 mb-8"
          >
            {[
              { Icon: Github, href: "https://github.com/antonayman" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/anton-ayman-b659a8357/" },
              { Icon: Mail, href: "mailto:antonayman07@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-card/40 backdrop-blur-md border border-turquoise/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: "0 0 20px rgba(0,212,212,0.1)",
                }}
              >
                <Icon className="w-6 h-6 text-turquoise group-hover:text-cyan transition-colors" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-turquoise/0 to-turquoise/0 group-hover:from-turquoise/20 group-hover:to-cyan/20 transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-20"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg, #00d4d4 0%, #00897b 100%)",
                boxShadow: "0 10px 40px rgba(0,212,212,0.3)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2 text-background font-medium">
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="public/Anton_Ayman_Full Stack Engineer_resume (1).pdf"
              download
              className="group relative px-8 py-4 rounded-2xl bg-card/40 backdrop-blur-md border-2 border-turquoise/30 overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: "0 0 30px rgba(0,212,212,0.2)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2 text-turquoise font-medium">
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-turquoise/0 to-turquoise/0 group-hover:from-turquoise/20 group-hover:to-cyan/20 transition-all duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="p-3 rounded-full bg-card/40 backdrop-blur-md border border-turquoise/20">
          <ArrowDown className="w-5 h-5 text-turquoise" />
        </div>
      </motion.div>
    </section>
  );
}
