"use client";

import SectionHeading from "./ui/SectionHeading";
import PackageCard from "./PackageCard";
import FadeIn from "./ui/FadeIn";
import { packages, addons } from "@/lib/constants";
import Button from "./ui/Button";

export default function Packages() {
  return (
    <section id="pakete" className="py-20 md:py-28 px-6 bg-white/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Was wir bieten"
          subtitle="Worte, die berühren. Musik, die bleibt."
        />

        {/* Features */}
        <FadeIn className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            "Persönliche Rede / Story",
            "Live Gesang",
            "Individuelle Begleitung",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 font-body text-base text-braun"
            >
              <span className="text-rose text-lg">+</span>
              {feature}
            </div>
          ))}
        </FadeIn>

        {/* Package Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} {...pkg} index={i} />
          ))}
        </div>

        {/* Add-ons */}
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl text-braun text-center mb-8">
              Add-ons
            </h3>
            <div className="space-y-3">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex justify-between items-center py-3 border-b border-braun/10"
                >
                  <span className="font-body text-base text-text-light">
                    {addon.name}
                  </span>
                  <span className="font-body text-base font-medium text-braun">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="text-center mt-14">
          <Button href="#kontakt">Unverbindlich Kontaktieren</Button>
        </FadeIn>
      </div>
    </section>
  );
}
