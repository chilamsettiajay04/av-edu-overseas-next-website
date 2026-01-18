interface ServiceCardProps {
  title: string;
  description: string;
  icon?: any;
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
        relative flex flex-col justify-between
        rounded-tl-3xl rounded-br-3xl border
        bg-color-surface-muted
        p-8
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        ${highlighted ? "border-color-accent" : "border-color-border"}
        ${className}
      `}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="text-fontsize-caption font-fontweight-semibold tracking-widest text-color-text-primary uppercase">
          {title}
        </span>

        <button
          className={`
            h-9 w-9 flex items-center justify-center
            rounded-md border
            ${
              highlighted
                ? "bg-color-accent text-white border-color-accent"
                : "border-color-border text-color-text-muted"
            }
          `}
        >
          {icon}
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-fontsize-body text-color-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
