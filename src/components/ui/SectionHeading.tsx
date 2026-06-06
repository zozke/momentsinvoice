import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  light = false,
}: SectionHeadingProps) {
  return (
    <FadeIn className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-4 ${
          light ? "text-creme" : "text-braun"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lg md:text-xl max-w-2xl mx-auto ${
            light ? "text-creme/80" : "text-text-light"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 mx-auto w-16 h-px ${
          light ? "bg-creme/40" : "bg-braun/30"
        }`}
      />
    </FadeIn>
  );
}
