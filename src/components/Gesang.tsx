"use client";

import Image from "next/image";
import FadeIn from "./ui/FadeIn";
import SectionHeading from "./ui/SectionHeading";

export default function Gesang() {
  return (
    <section id="gesang" className="py-20 md:py-28 px-6 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Live-Gesang"
          subtitle="Musik, die unter die Haut geht"
        />

        <FadeIn>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <p className="font-body text-base md:text-lg leading-relaxed text-text-light">
                Wer Musik und Gesang liebt, für den ist die Welt voller
                Emotionen und Möglichkeiten. Musik ist weit mehr als nur Klang —
                sie begleitet durch das Leben. Ein schöner Song kann beschwingen,
                inspirieren und Gedanken tragen.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-text-light">
                Er kann trösten, erden oder einfach zum Tanzen bringen. Musik
                löst Gefühle aus, schenkt Leichtigkeit und beeinflusst die
                Stimmung auf eine ganz besondere Weise. Sie gibt Kraft, lässt
                träumen und schafft Momente, die oft mehr sagen als Worte.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Trauung",
                  "Heiratsantrag",
                  "Taufe",
                  "Trauerfeier",
                  "Eheversprechen",
                  "Sektempfang",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs tracking-wide uppercase px-4 py-2 rounded-full bg-salbei/20 text-salbei border border-salbei/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/gesang-placeholder.jpg"
                alt="Live-Gesang bei einer Zeremonie"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
