import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const degree = {
  title: "Bachelor's Degree in Computer Science",
  institution: "Modern For Technology Information University (MTI)",
  icon: GraduationCap,
  description:
    "Built a strong foundation in computer science, covering data structures and algorithms, databases, software engineering, and web technologies. This academic background supports my work in designing and developing scalable full stack applications.",
};

const certifications = [
  {
    title: "Software Internship",
    issuer: "CIB (Commercial International Bank)",
    icon: BookOpen,
    description:
      "Completed a specialized training program covering end-to-end web application development, from responsive Front-End interfaces to Back-End logic and database design. Gained hands-on experience by building real-world projects in a professional environment.",
    gradient: "from-turquoise to-cyan",
  },
  {
    title: "Full Stack Development",
    issuer: "NEXT Company",
    icon: BookOpen,
    description:
      "Completed an intensive training program focused on modern frameworks, building RESTful APIs, and working with databases. Also covered deployment fundamentals and professional development workflows, including version control and team collaboration.",
    gradient: "from-teal to-turquoise",
  },
  {
    title: "Backend development Internship",
    issuer: "IEEE",
    icon: Award,
    description:
      "Awarded a scholarship by IEEE in Full Stack Development, strengthening my technical skills and my understanding of software engineering best practices, clean code, and modern development standards.",
    gradient: "from-cyan to-blue-green",
  },
];

export function Education() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional training that shaped my expertise as a full stack developer
          </p>
          <div
            className="w-20 h-1 bg-gradient-to-r from-turquoise to-cyan mx-auto rounded-full mt-6"
            style={{ boxShadow: "0 0 20px rgba(0,212,212,0.5)" }}
          />
        </motion.div>

        {/* Degree Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="group relative mb-8"
        >
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-turquoise to-cyan rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500" />

          <div
            className="relative bg-card/40 backdrop-blur-md border border-turquoise/20 rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:border-turquoise/50"
            style={{ boxShadow: "0 0 40px rgba(0,212,212,0.1)" }}
          >
            {/* Hover background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-turquoise to-cyan opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-turquoise/30 to-cyan/30 backdrop-blur-sm border border-turquoise/20 group-hover:scale-105 transition-transform duration-300">
                  <degree.icon className="w-8 h-8 text-turquoise" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="group-hover:text-turquoise transition-colors">
                    {degree.title}
                  </h3>
                </div>
                <p className="text-turquoise font-medium mb-4">
                  {degree.institution}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {degree.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${cert.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
              />

              <div
                className="relative h-full bg-card/40 backdrop-blur-md border border-turquoise/20 rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-turquoise/50 flex flex-col"
                style={{ boxShadow: "0 0 30px rgba(0,212,212,0.1)" }}
              >
                {/* Hover background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-5">
                    <div
                      className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${cert.gradient}/30 backdrop-blur-sm border border-turquoise/20 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <cert.icon className="w-6 h-6 text-turquoise" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-1 group-hover:text-turquoise transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-turquoise font-medium text-sm mb-4">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
