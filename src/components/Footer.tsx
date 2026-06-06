import { partners } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-braun text-white/80 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Partners */}
        <div className="text-center mb-12">
          <p className="font-heading text-lg text-white/60 mb-6">
            Vertrauen, das gewachsen ist&hellip;
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {partners.map((partner) => (
              <span
                key={partner.name}
                className="font-body text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-heading text-xl text-white">
              Moments in Voice
            </p>
            <p className="font-body text-xs text-white/40">
              &copy; {new Date().getFullYear()} Moments in Voice — Gesang und
              Worte für emotionale Momente
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
