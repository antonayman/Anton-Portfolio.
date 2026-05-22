import { motion } from "motion/react";
import {
  Code2,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 80 }
    ]
  },
  {
    category: "Backend",
    icon: Database,
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 75 }
    ]
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", level: 93 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Vercel", level: 88 },
      { name: "Figma", level: 86 }
    ]
  },
  {
    category: "Other",
    icon: Sparkles,
    items: [
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 85 },
      { name: "Testing", level: 88 },
      { name: "CI/CD", level: 83 },
      { name: "Agile", level: 90 }
    ]
  },
];

export function Skills() {
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
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-turquoise to-cyan mx-auto rounded-full mt-6"
               style={{ boxShadow: "0 0 20px rgba(0,212,212,0.5)" }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-card/40 backdrop-blur-md border border-turquoise/20 rounded-3xl p-8 transition-all duration-300 hover:border-turquoise/50"
                   style={{ boxShadow: "0 0 30px rgba(0,212,212,0.1)" }}>
                {/* Header with icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-turquoise/30 to-cyan/30 backdrop-blur-sm border border-turquoise/20 group-hover:scale-105 transition-transform duration-300">
                    <skillGroup.icon className="w-6 h-6 text-turquoise" />
                  </div>
                  <h3 className="bg-gradient-to-r from-turquoise to-cyan bg-clip-text text-transparent">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills list with progress bars */}
                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: groupIndex * 0.05 + index * 0.02 }}
                      viewport={{ once: true }}
                      className="group/item"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-turquoise opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          <span className="text-sm font-medium group-hover/item:text-turquoise transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden border border-turquoise/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: groupIndex * 0.05 + index * 0.02, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-turquoise via-cyan to-blue-green rounded-full"
                          style={{ boxShadow: "0 0 10px rgba(0,212,212,0.5)" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
