import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  highlighted?: boolean;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  highlighted = false,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`
        relative flex flex-col h-full
        rounded-tl-3xl rounded-br-3xl border
        bg-color-surface-muted
        p-6 lg:p-8
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
        ${highlighted ? "border-color-accent" : "border-color-border"}
        ${className}
      `}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="text-fontsize-body font-fontweight-semibold text-color-text-primary line-clamp-2">
          {title}
        </span>

        <button
          className={`
            flex-shrink-0 w-10 h-10 flex items-center justify-center
            rounded-xl
            transition-all duration-200 ease-out
            ${highlighted
              ? "bg-color-accent text-white border-color-accent hover:bg-color-accent-hover"
              : "bg-color-surface-muted border-color-border text-color-text-muted hover:bg-color-surface-elevated"
            }
          `}
          aria-label={`View ${title} details`}
        >
          {icon}
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <p className="text-fontsize-body text-color-text-muted leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
