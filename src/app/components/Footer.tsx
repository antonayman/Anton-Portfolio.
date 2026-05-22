import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/antonayman", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anton-ayman-b659a8357/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:antonayman07@gmail.com", label: "Email" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background/50 backdrop-blur-md border-t border-turquoise/20 overflow-hidden"
            style={{ boxShadow: "0 -10px 40px rgba(0,212,212,0.1)" }}>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-turquoise to-cyan flex items-center justify-center shadow-lg"
                   style={{ boxShadow: "0 0 20px rgba(0,212,212,0.4)" }}>
                <span className="text-background font-bold text-lg">AN</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-turquoise to-cyan bg-clip-text text-transparent">
                Anton Ayman
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building exceptional digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-card/40 backdrop-blur-md border border-turquoise/20 rounded-xl hover:border-turquoise/50 hover:shadow-lg transition-all"
                  style={{ boxShadow: "0 0 20px rgba(0,212,212,0.1)" }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 hover:text-turquoise transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Anton Ayman. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-pulse" />{" "}
            by Anton
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all text-sm"
            style={{
              background: "linear-gradient(135deg, #00d4d4 0%, #00897b 100%)",
              boxShadow: "0 10px 30px rgba(0,212,212,0.3)",
              color: "#0a0f1a",
            }}
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
