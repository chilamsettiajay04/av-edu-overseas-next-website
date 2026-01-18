import { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  icon?: ReactNode;
}

export default function StatCard({
  value,
  label,
  className = "",
  icon,
}: StatCardProps) {
  return (
    <div
      className={`bg-color-surface-muted rounded-tl-3xl rounded-br-3xl p-6 lg:p-8 border border-color-border relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {/* Background Icon */}
      {icon && (
        <div className="absolute -right-4 -bottom-4 text-color-accent opacity-20 transform scale-150">
          {icon}
        </div>
      )}

      <div className="relative z-10">
        <div className="text-fontsize-h1 font-fontweight-bold text-color-text-primary mb-2">
          {value}
        </div>
        <p className="text-fontsize-body text-color-text-muted font-fontweight-medium">
          {label}
        </p>
      </div>
    </div>
  );
}
