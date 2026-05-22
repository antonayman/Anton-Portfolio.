import { motion } from "motion/react";
import { ExternalLink, Github, Star, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, secure payment processing, and advanced analytics. Built for scalability with microservices architecture.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    github: "https://github.com/yourusername/project",
    live: "https://demo.example.com",
    featured: true,
    stats: { stars: 234, users: "5K+" },
    gradient: "from-turquoise to-cyan"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management with real-time updates, kanban boards, time tracking, and team analytics.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    github: "https://github.com/yourusername/project",
    live: "https://demo.example.com",
    featured: true,
    stats: { stars: 189, users: "3K+" },
    gradient: "from-teal to-turquoise"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with 7-day forecasts, interactive maps, and air quality data from multiple sources.",
    tech: ["Vue.js", "Tailwind", "Chart.js", "API"],
    github: "https://github.com/yourusername/project",
    live: "https://demo.example.com",
    featured: false,
    stats: { stars: 156, users: "2K+" },
    gradient: "from-cyan to-blue-green"
  },
  {
    title: "Analytics Platform",
    description: "Enterprise-grade analytics with custom reports, data visualization, and machine learning insights.",
    tech: ["React", "D3.js", "Express", "Redis"],
    github: "https://github.com/yourusername/project",
    live: "https://demo.example.com",
    featured: false,
    stats: { stars: 312, users: "8K+" },
    gradient: "from-turquoise to-teal"
  },
  {
    title: "Social Media Dashboard",
    description: "Unified dashboard for managing multiple social media accounts with scheduling and analytics.",
    tech: ["React", "TypeScript", "Tailwind", "API"],
    github: "https://github.com/yourusername/project",
    live: "https://demo.example.com",
    featured: false,
    stats: { stars: 198, users: "4K+" },
    gradient: "from-blue-green to-cyan"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation tool with multiple templates, SEO optimization, and multi-language support.",
    tech: ["Next.js", "OpenAI", "Prisma", "Tailwind"],
    github: "https://github.com/yourusername/project",
    live: "https://demo.example.com",
    featured: false,
    stats: { stars: 445, users: "12K+" },
    gradient: "from-cyan to-turquoise"
  },
];

export function Projects() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building modern, scalable applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-turquoise to-cyan mx-auto rounded-full mt-6"
               style={{ boxShadow: "0 0 20px rgba(0,212,212,0.5)" }} />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative ${
                project.featured ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />

              <div className="relative h-full bg-card/40 backdrop-blur-md border border-turquoise/20 rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-turquoise/50"
                   style={{ boxShadow: "0 0 30px rgba(0,212,212,0.1)" }}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient}/30 backdrop-blur-sm border border-turquoise/20 group-hover:scale-105 transition-transform duration-300`}>
                      <div className="w-6 h-6 bg-turquoise/40 rounded backdrop-blur-sm" />
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 bg-turquoise/10 border border-turquoise/30 text-turquoise rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mb-3 group-hover:text-turquoise transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg text-xs font-medium transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{project.stats.stars}</span>
                      <span className="text-muted-foreground">stars</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="font-medium">{project.stats.users}</span>
                      <span className="text-muted-foreground">users</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 px-4 py-2.5 bg-card/60 backdrop-blur-md border border-turquoise/20 hover:border-turquoise/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <Github className="w-4 h-4 group-hover/link:text-turquoise transition-colors" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg, #00d4d4 0%, #00897b 100%)",
                        boxShadow: "0 10px 30px rgba(0,212,212,0.3)",
                      }}
                    >
                      <ExternalLink className="w-4 h-4 text-background" />
                      <span className="text-sm font-medium text-background">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
