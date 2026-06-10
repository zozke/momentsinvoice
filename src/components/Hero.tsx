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
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/logo-horizontal.webp"
            alt="Moments in Voice — Gesang und Worte für emotionale Momente"
            width={960}
            height={685}
            className="w-80 md:w-[26rem] lg:w-[540px] h-auto brightness-0 invert drop-shadow-lg"
            priority
            unoptimized
          />
        </motion.div>

        <motion.h1
          className="font-heading text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Wir schaffen Momente,
          <br />
          <span className="text-rose-light">die in Erinnerung bleiben</span>
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl tracking-[0.2em] uppercase text-white/90 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Zwei Stimmen für eure Liebe(n)
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
