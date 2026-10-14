import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X, Home, User, Code, Briefcase, Mail, GraduationCap } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/60 backdrop-blur-xl border-b border-turquoise/20 shadow-lg"
            : "bg-transparent"
        }`}
        style={isScrolled ? { boxShadow: "0 0 40px rgba(0,212,212,0.1)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-turquoise to-cyan flex items-center justify-center shadow-lg"
                     style={{ boxShadow: "0 0 20px rgba(0,212,212,0.4)" }}>
                  <span className="text-background font-bold text-lg">AN</span>
                </div>
                <span className="font-bold text-lg hidden sm:block bg-gradient-to-r from-turquoise to-cyan bg-clip-text text-transparent">
                  Anton Ayman
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="group relative px-4 py-2 rounded-xl transition-colors hover:text-turquoise"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-turquoise/10 rounded-xl border border-turquoise/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-card/40 backdrop-blur-md border border-turquoise/20 hover:border-turquoise/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-16 left-0 right-0 z-40 md:hidden"
      >
        <div className="mx-4 mt-2 bg-card/95 backdrop-blur-xl border border-turquoise/20 rounded-2xl overflow-hidden"
             style={{ boxShadow: "0 0 40px rgba(0,212,212,0.2)" }}>
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-turquoise/10 transition-colors group"
              >
                <item.icon className="w-5 h-5 group-hover:text-turquoise transition-colors" />
                <span className="group-hover:text-turquoise transition-colors">{item.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
}
