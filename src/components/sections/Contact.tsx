"use client";

import { Locate, Mail, Send, CheckCircle2, AlertCircle, Copy, Check, ExternalLink, RefreshCw, Loader2 } from "lucide-react";
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

const PROJECT_TYPES = [
  "Full-stack development",
  "Web application project",
  "Mobile app development",
  "Consultation / Other",
];

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: PROJECT_TYPES[0],
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sentSummary, setSentSummary] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    mailtoUrl?: string;
  } | null>(null);

  const validateField = (field: string, value: string) => {
    let err = "";
    if (field === "name") {
      if (!value.trim()) err = "Name is required";
      else if (value.trim().length < 2) err = "Name must be at least 2 characters";
    }
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) err = "Email address is required";
      else if (!emailRegex.test(value.trim())) err = "Please enter a valid email address";
    }
    if (field === "message") {
      if (!value.trim()) err = "Message is required";
      else if (value.trim().length < 10) err = "Message must be at least 10 characters";
    }
    return err;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const value = formData[field as keyof typeof formData] || "";
    const err = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    return !Object.values(newErrors).some((err) => err);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/eseigbesamuel810@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Portfolio Inquiry] ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("FormSubmit non-JSON response:", text);
        setStatus("error");
        setErrorMessage(
          "Service is temporarily protecting the endpoint. Please check your inbox for an activation email if this is your first time, or email directly."
        );
        return;
      }

      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("success");
        setSentSummary({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        });
        setFormData({ name: "", email: "", subject: PROJECT_TYPES[0], message: "" });
        setTouched({});
        setErrors({});
      } else {
        setStatus("error");
        setErrorMessage(data.message || data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection or contact directly via email.");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("eseigbesamuel810@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
    setSentSummary(null);
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
          Whether you have a question or just want to say hi, feel free to reach out!
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
                className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/30 transition-all duration-300 group"
                variants={itemVariants}
              >
                <a
                  href="mailto:eseigbesamuel810@gmail.com?subject=Portfolio Inquiry"
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</h4>
                    <p className="text-white group-hover:text-brand-orange transition-colors truncate font-medium text-sm md:text-base">
                      eseigbesamuel810@gmail.com
                    </p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="ml-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all shrink-0 flex items-center gap-1.5 text-xs"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10"
                variants={itemVariants}
              >
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-red">
                  <Locate className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</h4>
                  <p className="text-white font-medium text-sm md:text-base">Lagos, Nigeria</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* WHAT I'M LOOKING FOR */}
          <motion.div
            className="rounded-2xl bg-brand-dark border border-white/5 p-6 space-y-4 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="font-bold text-xl text-white">What I'm Looking For</h3>
            <ul className="space-y-2.5 text-gray-300 text-sm md:text-base">
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0"></span>
                Full-stack development opportunities
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0"></span>
                Web app development projects
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0"></span>
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
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div variants={iconVariants}>
                <Link
                  href="https://x.com/osezelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
                >
                  <FaTwitter className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div variants={iconVariants}>
                <Link
                  href="https://github.com/EseigbeSamuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
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
            {status === "success" && sentSummary ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center space-y-6 py-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-10 h-10 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base">
                    Thank you, <span className="text-white font-medium">{sentSummary.name}</span>. Your message regarding{" "}
                    <span className="text-brand-orange font-medium">{sentSummary.subject}</span> has been received. I will reply to{" "}
                    <span className="text-white font-medium">{sentSummary.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-left space-y-2 text-xs md:text-sm text-gray-300">
                  <div className="font-semibold text-gray-400 text-xs uppercase tracking-wider">Summary of Inquiry:</div>
                  <div className="line-clamp-3 italic text-gray-200">"{sentSummary.message}"</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all text-sm"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Send Another Message
                  </button>

                  {sentSummary.mailtoUrl && (
                    <a
                      href={sentSummary.mailtoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-red text-white font-medium transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Email App
                    </a>
                  )}
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-bold text-2xl text-white">Send a Message</h3>
                  <p className="text-sm text-gray-400">Fill out the form below or reach out directly.</p>
                </div>

                {status === "error" && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-red-200">{errorMessage}</p>
                      <p className="text-xs text-red-300/80 mt-1">
                        You can also send your message directly via email to{" "}
                        <a
                          href={`mailto:eseigbesamuel810@gmail.com?subject=${encodeURIComponent(
                            formData.subject
                          )}&body=${encodeURIComponent(formData.message)}`}
                          className="underline hover:text-white font-semibold"
                        >
                          eseigbesamuel810@gmail.com
                        </a>
                        .
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* NAME FIELD */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex justify-between">
                        <span>Your Name</span>
                        <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onBlur={() => handleBlur("name")}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-all text-sm ${
                          errors.name && touched.name
                            ? "border-red-500/80 focus:ring-1 focus:ring-red-500"
                            : "border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* EMAIL FIELD */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex justify-between">
                        <span>Your Email</span>
                        <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onBlur={() => handleBlur("email")}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-all text-sm ${
                          errors.email && touched.email
                            ? "border-red-500/80 focus:ring-1 focus:ring-red-500"
                            : "border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SUBJECT / PROJECT TYPE */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Project Type / Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-sm appearance-none cursor-pointer"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-brand-dark text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE FIELD */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      <label htmlFor="message" className="flex gap-1">
                        <span>Message</span>
                        <span className="text-brand-red">*</span>
                      </label>
                      <span className={`${formData.message.length > 1000 ? "text-red-400" : "text-gray-500"}`}>
                        {formData.message.length} / 1000
                      </span>
                    </div>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      maxLength={1000}
                      placeholder="Tell me about your project, goals, timeline, or any questions..."
                      value={formData.message}
                      onBlur={() => handleBlur("message")}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-all text-sm resize-none ${
                        errors.message && touched.message
                          ? "border-red-500/80 focus:ring-1 focus:ring-red-500"
                          : "border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      }`}
                    />
                    {errors.message && touched.message && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    label={status === "submitting" ? "Sending Message..." : "Send Message"}
                    fullWidth={true}
                    disabled={status === "submitting"}
                    icon={
                      status === "submitting" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
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
