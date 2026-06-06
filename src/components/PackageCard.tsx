"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PackageCardProps {
  name: string;
  occasion: string;
  price: string;
  features: string[];
  highlight?: boolean;
  index: number;
}

export default function PackageCard({
  name,
  occasion,
  price,
  features,
  highlight,
  index,
}: PackageCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl p-8 flex flex-col h-full transition-shadow duration-300 ${
        highlight
          ? "bg-braun text-white shadow-lg"
          : "bg-white/70 text-text shadow-sm"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(139, 109, 92, 0.15)" }}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-rose text-white text-xs font-body font-medium tracking-wide uppercase px-4 py-1 rounded-full">
            Beliebt
          </span>
        </div>
      )}

      <p
        className={`font-body text-xs tracking-wide uppercase mb-2 ${
          highlight ? "text-white/70" : "text-rose"
        }`}
      >
        {occasion}
      </p>

      <h3
        className={`font-heading text-2xl mb-2 ${
          highlight ? "text-white" : "text-braun"
        }`}
      >
        {name}
      </h3>

      <div className="mb-6">
        <span
          className={`font-heading text-3xl font-semibold ${
            highlight ? "text-white" : "text-braun"
          }`}
        >
          {price} &euro;
        </span>
      </div>

      <ul className="space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                highlight ? "text-salbei-light" : "text-salbei"
              }`}
            />
            <span
              className={`font-body text-sm leading-relaxed ${
                highlight ? "text-white/90" : "text-text-light"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
