import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "antonayman07@gmail.com",
    href: "mailto:antonayman07@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+201277881024",
    href: "tel:+201277881024",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Cairo, Egypt",
    href: "#",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });



const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");

  try {
    await emailjs.send(
      "service_a5exdkk",      // من EmailJS dashboard
      "template_itzh2cs",     // من EmailJS dashboard
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: "antonayman07@gmail.com",
      },
      "HbmDg9bLtan3-nJfB"       // من EmailJS dashboard
    );
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  } catch {
    setStatus("error");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-turquoise to-cyan mx-auto rounded-full mt-6"
               style={{ boxShadow: "0 0 20px rgba(0,212,212,0.5)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group block relative"
              >
                <div className="group relative bg-card/40 backdrop-blur-md border border-turquoise/20 rounded-2xl p-6 transition-all duration-300 hover:border-turquoise/50 hover:-translate-y-1"
                     style={{ boxShadow: "0 0 30px rgba(0,212,212,0.1)" }}>
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-turquoise/30 to-cyan/30 backdrop-blur-sm border border-turquoise/20 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <method.icon className="w-6 h-6 text-turquoise" />
                  </div>
                  <h4 className="mb-2">{method.title}</h4>
                  <p className="text-muted-foreground text-sm break-all">{method.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Response Time Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-turquoise/10 to-cyan/10 border border-turquoise/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-turquoise" />
                <h4>Response Time</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours during business days
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-card/40 backdrop-blur-md border border-turquoise/20 rounded-3xl p-8 md:p-10"
                 style={{ boxShadow: "0 0 40px rgba(0,212,212,0.1)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-turquoise/10 border border-turquoise/20 hover:scale-105 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 text-turquoise" />
                </div>
                <div>
                  <h3>Send me a message</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form below and I'll get back to you soon</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input-background backdrop-blur-sm rounded-xl border-2 border-turquoise/20 focus:outline-none focus:border-turquoise transition-colors"
                    placeholder="Tony Ay..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input-background backdrop-blur-sm rounded-xl border-2 border-turquoise/20 focus:outline-none focus:border-turquoise transition-colors"
                    placeholder="tonyay..@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-input-background rounded-xl border-2 border-border focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project or just say hi..."
                    required
                  />
                </div>

                <motion.button
  type="submit"
  disabled={status === "sending"}
  className="group relative w-full px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 disabled:opacity-70"
  style={{
    background: "linear-gradient(135deg, #00d4d4 0%, #00897b 100%)",
    boxShadow: "0 10px 40px rgba(0,212,212,0.3)",
  }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <span className="relative z-10 flex items-center justify-center gap-2 text-background font-medium">
    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    {status === "sending" ? "Sending..." : status === "success" ? "Sent! ✓" : "Send Message"}
  </span>
</motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
