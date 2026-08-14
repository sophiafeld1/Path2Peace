import Button from "./Button";
import { HERO_MOUNTAIN_POSITION } from "@/lib/constants";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
  centered?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
  centered = false,
}: HeroSectionProps) {
  const hasImage = !!backgroundImage;
  // Dark text on light mountain images; white text on solid dark bg
  const titleColor = hasImage ? "text-ink" : "text-white";
  const subtitleColor = hasImage ? "text-body" : "text-gray-200";

  return (
    <section
      className={`relative overflow-hidden ${hasImage ? "bg-cover bg-no-repeat" : ""}`}
      style={
        hasImage
          ? {
              backgroundImage: `url('${backgroundImage}')`,
              backgroundPosition: HERO_MOUNTAIN_POSITION,
            }
          : undefined
      }
    >
      {!hasImage && <div className="absolute inset-0 bg-ink" />}
      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 ${
          centered ? "text-center" : ""
        }`}
      >
        <div className={centered ? "max-w-3xl mx-auto" : "max-w-3xl"}>
          <h1 className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${titleColor}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-5 text-base sm:text-lg leading-relaxed ${subtitleColor}`}>
              {subtitle}
            </p>
          )}
          {(ctaText || secondaryCtaText) && (
            <div className={`mt-8 flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}>
              {ctaText && ctaHref && (
                <Button href={ctaHref} variant="primary">
                  {ctaText}
                </Button>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="secondary">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
