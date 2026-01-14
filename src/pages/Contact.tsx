"use client";
import { Locate, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// Import motion
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---

// Container for staggered entrance (Heading/Paragraph)
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

// Item variant for subtle fade-in and lift (used for H1, P, and main section blocks)
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Variant for the social icons (zoom in)
const iconVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// --- Component ---

export default function Contact() {
  return (
    <div id="contact" className="space-y-10 py-[60px] max-w-[1440px]">
      {/* 1. Animate the Heading and Description Section */}
      <motion.section
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className="text-3xl lg:text-5xl font-bold text-center"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="lg:text-xl text-center xl:px-[300px]"
          variants={itemVariants}
        >
          I'm always interested in new opportunities and exciting projects.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </motion.p>
      </motion.section>

      {/* 2. Animate the main content grid/flex container */}
      <div className="grid lg:flex w-full justify-between gap-10">
        {/* Left Column: Contact and Social Links */}
        <motion.section
          className="space-y-7 "
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-3">
            <motion.h2 className="font-bold text-2xl" variants={itemVariants}>
              Contact Information
            </motion.h2>

            {/* Email Contact Block */}
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-2xl`}
              >
                <Mail />
              </div>
              <div>
                <h3>Email</h3>
                <p className="text-brand-red">eseigbesamuel810@gmail.com</p>
              </div>
            </motion.div>

            {/* Location Contact Block */}
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-purple-500 text-white text-2xl`}
              >
                <Locate />
              </div>
              <div>
                <h3>Location</h3>
                <p className="text-brand-red">Lagos, Nigeria</p>
              </div>
            </motion.div>
          </div>

          {/* Social Links Block */}
          <div>
            <motion.h2
              className="font-bold text-2xl mb-3"
              variants={itemVariants}
            >
              Follow Me
            </motion.h2>
            <motion.div
              className="flex space-x-4"
              variants={textContainerVariants} // Reuse container for staggering icons
            >
              {/* LinkedIn */}
              <motion.div variants={iconVariants}>
                <Link
                  href="https://www.linkedin.com/in/samuel-eseigbe-ba6891333/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-6 h-6 stroke-current transition-colors duration-200 hover:text-brand-red" />
                </Link>
              </motion.div>

              {/* Twitter */}
              <motion.div variants={iconVariants}>
                <Link
                  href="https://x.com/muel_se"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-6 h-6 stroke-current transition-colors duration-200 hover:text-brand-red" />
                </Link>
              </motion.div>

              {/* GitHub */}
              <motion.div variants={iconVariants}>
                <Link
                  href="https://github.com/EseigbeSamuel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-6 h-6 stroke-current transition-colors duration-200 hover:text-brand-red" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Right Column: What I'm Looking For */}
        <motion.section
          className=""
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="rounded-xl bg-brand-dark p-5 lg:p-10">
            <h2 className="font-bold text-2xl mb-3">What I'm Looking For</h2>
            <ul className="list-disc text-lg p-5 lg:px-10 space-y-3">
              <motion.li variants={itemVariants}>
                Full-stack development opportunities
              </motion.li>
              <motion.li variants={itemVariants}>
                Web app development projects
              </motion.li>
              <motion.li variants={itemVariants}>
                Mobile app development projects
              </motion.li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
