import CurvyUnderline from "./CurvyUnderline";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  underline?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  underline = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
        {title}
      </h2>
      {underline && (
        <CurvyUnderline
          className={`mt-3 h-3 w-40 sm:w-48 text-caramel ${centered ? "mx-auto" : ""}`}
        />
      )}
      {subtitle && (
        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
