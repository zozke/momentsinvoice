"use client";

import Image from "next/image";
import FadeIn from "./ui/FadeIn";
import SectionHeading from "./ui/SectionHeading";

export default function Zeremonie() {
  return (
    <section id="zeremonie" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Rede & Zeremonie"
          subtitle="Worte, die berühren und bleiben"
        />

        <FadeIn>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/zeremonie-placeholder.jpg"
                alt="Freie Trauung im Freien"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <p className="font-body text-base md:text-lg leading-relaxed text-text-light">
                Wir begleiten euch mit Stimme und Worten — einfühlsam,
                persönlich und mit einem Gespür für das, was wirklich zählt. Ob
                Hochzeit, Abschied oder ein ganz besonderer Anlass: Wir schaffen
                Momente, die in Erinnerung bleiben.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-text-light">
                Mal als Duo, mal einzeln. Jede Zeremonie wird individuell
                gestaltet — mit persönlichen Geschichten, einfühlsamen Worten
                und dem richtigen Maß an Emotionen. Wir hören zu, fühlen mit und
                finden die Worte, die euren Moment unvergesslich machen.
              </p>
              <blockquote className="border-l-4 border-rose pl-6 py-2">
                <p className="font-heading text-xl text-braun italic">
                  &bdquo;Wie wertvoll es ist, wenn Worte gefunden werden, die
                  unverschönt trösten und bleiben.&ldquo;
                </p>
              </blockquote>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
