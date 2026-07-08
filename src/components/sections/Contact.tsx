"use client";
import { Locate, Mail, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/Button";

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const iconVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div id="contact" className="space-y-12 py-[60px] max-w-[1440px] w-full">
      <motion.section
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className="text-3xl lg:text-5xl font-bold text-center mb-3"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-base lg:text-xl text-center text-gray-400 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I'm always interested in new opportunities and exciting projects.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </motion.p>
      </motion.section>

      <div className="grid lg:grid-cols-12 gap-10 items-stretch">
        {/* LEFT COLUMN: INFO & STATUS */}
        <motion.section
          className="lg:col-span-5 space-y-8 flex flex-col justify-between"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-6">
            <motion.h2 className="font-bold text-2xl" variants={itemVariants}>
              Contact Information
            </motion.h2>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <a
                  href="mailto:eseigbesamuel810@gmail.com?subject=Portfolio Inquiry"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">Email</h4>
                    <p className="text-white group-hover:text-brand-orange transition-colors">
                      eseigbesamuel810@gmail.com
                    </p>
                  </div>
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-red">
                  <Locate className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">Location</h4>
                  <p className="text-white">Lagos, Nigeria</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* WHAT I'M LOOKING FOR */}
          <motion.div
            className="rounded-2xl bg-brand-dark border border-white/5 p-6 space-y-4"
            variants={itemVariants}
          >
            <h3 className="font-bold text-xl text-white">What I'm Looking For</h3>
            <ul className="space-y-2.5 text-gray-300 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                Full-stack development opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                Web app development projects
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                Mobile app development projects
              </li>
            </ul>
          </motion.div>

          {/* SOCIALS */}
          <div className="space-y-3">
            <motion.h3
              className="font-bold text-lg text-white"
              variants={itemVariants}
            >
              Follow Me
            </motion.h3>
            <motion.div
              className="flex space-x-4"
              variants={textContainerVariants}
            >
              <motion.div variants={iconVariants}>
                <Link
                  href="https://www.linkedin.com/in/samuel-eseigbe-ba6891333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div variants={iconVariants}>
                <Link
                  href="https://x.com/osezelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
                >
                  <FaTwitter className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div variants={iconVariants}>
                <Link
                  href="https://github.com/EseigbeSamuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* RIGHT COLUMN: INTERACTIVE FORM */}
        <motion.section
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="rounded-2xl bg-brand-dark border border-white/5 shadow-2xl p-6 lg:p-8 relative overflow-hidden h-full flex flex-col justify-center">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400 max-w-sm">
                  Thank you for reaching out. I'll review your inquiry and get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-bold text-2xl text-white">Send a Message</h3>
                  <p className="text-sm text-gray-400">I will reply within 24 business hours.</p>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-sm resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    label={status === "submitting" ? "Sending..." : "Send Message"}
                    fullWidth={true}
                    disabled={status === "submitting"}
                    icon={<Send className="w-4 h-4" />}
                  />
                </div>
              </form>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
