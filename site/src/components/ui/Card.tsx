interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-surface rounded-xl p-6 sm:p-8 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
