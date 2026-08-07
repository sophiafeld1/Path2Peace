import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  // Two-tier system, one shape language (rounded-lg):
  //  - primary   = "take action / convert" (filled teal, ivory text)
  //  - secondary = "explore / navigate" (teal outline, soft-fills on hover)
  const base =
    "inline-flex items-center justify-center px-7 py-3 text-base font-semibold tracking-wide rounded-lg transition-all duration-200";
  const variants = {
    primary:
      "bg-teal-500 text-ivory shadow-sm hover:bg-teal-600 hover:shadow-md hover:-translate-y-0.5",
    secondary:
      "border border-teal-500 text-teal-600 hover:bg-teal-100 hover:border-teal-600 hover:text-teal-700",
  };

  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
