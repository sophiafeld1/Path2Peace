// A hand-drawn style underline accent for primary section titles.
// Color is controlled via the text color utility (uses currentColor),
// width/height/alignment via className. Reserve for main section headings.
export default function CurvyUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 16"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 10c38-8 78-8 118-3 31 4 62 5 94-3"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
