interface ServiceFeatureCardProps {
  title: string;
  description?: string;
  className?: string;
}

export default function ServiceFeatureCard({
  title,
  description,
  className = "",
}: ServiceFeatureCardProps) {
  return (
    <div
      className={`rounded-xl border border-ink/10 bg-surface p-6 text-left shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-teal-300 hover:shadow-md active:translate-y-0 active:shadow-sm ${className}`}
    >
      <h3 className="font-heading text-base font-semibold leading-snug text-ink">
        {title}
      </h3>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-body">{description}</p>
      )}
    </div>
  );
}
