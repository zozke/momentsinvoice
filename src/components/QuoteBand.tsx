"use client";

import FadeIn from "./ui/FadeIn";

export default function QuoteBand() {
  return (
    <section className="bg-altblau py-20 md:py-24 px-6">
      <FadeIn className="max-w-3xl mx-auto text-center">
        <p className="font-heading text-2xl md:text-4xl text-creme leading-snug italic mb-8">
          &bdquo;Es sind die leisen Augenblicke, die bleiben.
          <br />
          Ein Blick. Ein Versprechen. Ein Abschied.&ldquo;
        </p>
        <div className="mx-auto w-16 h-px bg-creme/40 mb-6" />
        <p className="font-body text-sm md:text-base tracking-[0.25em] uppercase text-creme/80">
          Gesang und Worte für emotionale Momente
        </p>
      </FadeIn>
    </section>
  );
}
