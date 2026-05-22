import { motion } from "motion/react";
import { Code2, Rocket, Users, Award } from "lucide-react";

const stats = [
  { icon: Code2, value: "3+", label: "Years Experience" },
  { icon: Rocket, value: "30+", label: "Projects Completed" },
  { icon: Users, value: "20+", label: "Happy Clients" },
  { icon: Award, value: "5+", label: "Awards Won" },
];

export function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4 text-4xl md:text-5xl"
            style={{
              background: "linear-gradient(135deg, #00d4d4 0%, #00e5ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-turquoise to-cyan mx-auto rounded-full"
               style={{ boxShadow: "0 0 20px rgba(0,212,212,0.5)" }} />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-card/40 backdrop-blur-md border border-turquoise/20 rounded-2xl p-6 text-center transition-all duration-300 hover:border-turquoise/50 hover:-translate-y-1"
                   style={{ boxShadow: "0 0 30px rgba(0,212,212,0.1)" }}>
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-turquoise/30 to-cyan/30 mb-3 backdrop-blur-sm border border-turquoise/20 group-hover:scale-105 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-turquoise" />
                </div>
                <div className="text-3xl font-bold mb-1 bg-gradient-to-br from-turquoise to-cyan bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/40 backdrop-blur-md border border-turquoise/20 rounded-3xl p-8 md:p-12 transition-all duration-500 hover:border-turquoise/40"
               style={{ boxShadow: "0 0 40px rgba(0,212,212,0.1)" }}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a software developer with <span className="text-turquoise font-medium">3+ years of experience</span> building
                web applications that users love. I specialize in React, TypeScript, and Node.js, but I'm always
                eager to learn new technologies and push the boundaries of what's possible on the web.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work, which evolved into a passion
                for creating digital experiences that are not just functional, but <span className="text-cyan font-medium">delightful</span> to use.
                I believe great software is invisible—it just works, and works beautifully.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source projects, writing technical articles
                to share what I've learned, or exploring the latest web technologies. I'm particularly interested in
                performance optimization, accessibility, and creating tools that make developers' lives easier.
              </p>
              <p>
                Currently, I'm focused on building <span className="text-turquoise font-medium">accessible, performant applications</span> that
                make a real difference in people's lives. Whether it's a sleek e-commerce platform or a complex
                data visualization tool, I approach every project with the same dedication to quality and attention to detail.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
