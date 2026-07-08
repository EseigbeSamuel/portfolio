"use client";

import { testimonialsData } from "@/data/data";
import { motion, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const duplicatedTestimonials = [
  ...testimonialsData,
  ...testimonialsData,
  ...testimonialsData,
  ...testimonialsData,
];

export default function Testimonials() {
  return (
    <motion.div
      id="testimonials"
      className="space-y-8 max-w-[1440px] px-4 md:px-6 lg:px-8 py-[40px] w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={CONTAINER}
    >
      {/* SECTION HEADER */}
      <motion.div className="text-center space-y-3" variants={FADE_UP}>
        <motion.h1
          className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Testimonials
        </motion.h1>
        <motion.p
          className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Kind words from colleagues, clients, and partners who I have collaborated with.
        </motion.p>
      </motion.div>

      {/* INFINITE SCROLLING MARQUEE */}
      <motion.div
        className="relative w-full overflow-hidden mask-gradient py-4"
        variants={FADE_UP}
      >
        <div
          className="animate-marquee gap-6 flex flex-row items-stretch"
          style={{ "--marquee-duration": "45s" } as React.CSSProperties}
        >
          {duplicatedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-gradient-to-br from-brand-red/40 to-brand-orange/40 p-[1px] shadow-xl hover:shadow-brand-red/10 transition-all duration-300 w-[290px] sm:w-[340px] md:w-[380px] lg:w-[420px] flex-shrink-0"
            >
              <div className="bg-brand-dark p-5 md:p-6 rounded-[15px] h-full flex flex-col justify-between relative overflow-hidden">
                {/* Subtle background decorative quote */}
                <div className="absolute right-3 bottom-3 opacity-5 group-hover:opacity-10 transition-opacity duration-300 text-brand-red">
                  <Quote className="w-16 h-16 stroke-[1px]" />
                </div>

                <div className="space-y-4 z-10">
                  {/* Rating stars and Quote Icon */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-brand-orange text-brand-orange"
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-brand-red rotate-180 opacity-70" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-gray-300 italic text-sm md:text-base leading-relaxed font-sans">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-5 flex items-center gap-3 border-t border-gray-800/80 pt-4 z-10">
                  <div>
                    <h3 className="font-semibold text-base text-white group-hover:text-brand-orange transition-colors duration-300">
                      {t.name}
                    </h3>
                    <p className="text-xs text-gray-400 capitalize">
                      {t.role} at{" "}
                      <span className="text-brand-red font-semibold">
                        {t.company}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

