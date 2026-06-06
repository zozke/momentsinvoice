"use client";

import Image from "next/image";
import FadeIn from "./ui/FadeIn";
import SectionHeading from "./ui/SectionHeading";

const bios = [
  {
    name: "Yvonne Schwuchow",
    role: "Sängerin",
    image: "/images/yvonne-placeholder.jpg",
    text: "Meine Stimme trägt, was mein Herz fühlt. Mit viel Wärme, Gefühl und Persönlichkeit möchte ich Menschen in ihren besonderen emotionalen Momenten begleiten — sei es bei einer Trauung, einem Heiratsantrag, einer Taufe, einer Trauerfeier oder einem Eheversprechen. Musik begleitet mich schon mein ganzes Leben. Bereits als Kind begann mein Tag singend und bis heute ist sie ein fester Bestandteil meines Lebens, der mich trägt, bewegt und begeistert.",
  },
  {
    name: "Kerstin Schwuchow",
    role: "Freie Rednerin",
    image: "/images/kerstin-placeholder.jpg",
    text: "Seit meiner frühesten Jugend schrieb ich Gedichte und verfasste kleine Reden. Was mir daran besonders gefiel, war die Möglichkeit, über Worte andere zu berühren. Gerne möchte ich euch in euren besonderen, herzzerreißenden, emotionalen und willkommen heißenden Momenten begleiten. Mit viel Liebe für jeden Menschen in mir. Lasst mich euch Worte schenken!",
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Wir sind Moments in Voice"
          subtitle="Persönliche Zeremonien mit Herz, Humor und Live-Gesang"
        />

        {/* Duo Introduction */}
        <FadeIn className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-duo-placeholder.jpg"
                alt="Yvonne und Kerstin Schwuchow"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <p className="font-body text-base md:text-lg leading-relaxed text-text-light">
                Wir sind Yvonne und Kerstin Schwuchow, zwei Stimmen mit einer
                Leidenschaft: Menschen in besonderen Momenten zu begleiten. Mit
                Gesang und Worten gestalten wir Zeremonien, die berühren, die
                Raum geben für Gefühle und Erinnerungen.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-text-light">
                Jede Geschichte ist anders — und genauso begegnen wir ihr:
                individuell, achtsam und mit ganzem Herzen. Mit viel Liebe zum
                Detail, Feingefühl und Freude an unserer Arbeit sorgen wir
                dafür, dass eure Zeremonien herzlich, authentisch und emotional
                bleiben.
              </p>
              <p className="font-heading text-xl text-braun italic">
                &bdquo;Es sind die leisen Augenblicke, die bleiben. Ein Blick.
                Ein Versprechen. Ein Abschied.&ldquo;
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Individual Portraits */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {bios.map((person, i) => (
            <FadeIn key={person.name} delay={i * 0.15}>
              <div className="bg-white/50 rounded-2xl overflow-hidden shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-braun mb-1">
                    {person.name}
                  </h3>
                  <p className="font-body text-sm text-rose font-medium tracking-wide uppercase mb-4">
                    {person.role}
                  </p>
                  <p className="font-body text-base leading-relaxed text-text-light">
                    {person.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
