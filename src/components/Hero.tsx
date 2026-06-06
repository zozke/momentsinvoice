"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-placeholder.jpg"
        alt="Romantische Hochzeitsszene"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-creme/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Zwei Stimmen für eure Liebe(n)
        </motion.p>

        <motion.h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Gesang und Worte
          <br />
          <span className="text-rose-light">für emotionale Momente</span>
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Wir schaffen Momente, die in Erinnerung bleiben.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button href="#kontakt" variant="primary">
            Unverbindlich Kontaktieren
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
