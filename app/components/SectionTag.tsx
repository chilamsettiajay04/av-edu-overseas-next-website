interface SectionTagProps {
  label?: string;
  className?: string;
  variant?: "default" | "accent";
}

const SectionTag = ({
  label = "",
  className = "",
  variant = "default",
}: SectionTagProps) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-lg border transition-all duration-300 hover:scale-105";

  const variantClasses =
    variant === "accent"
      ? "text-color-text-accent border-emerald-400/30 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/30"
      : "text-color-text-primary border-color-border-muted bg-color-surface-inset/60 shadow-sm";

  const textClasses =
    "text-fontsize-caption font-semibold uppercase tracking-wider";

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      <span className={textClasses}>{label}</span>
    </div>
  );
};

export default SectionTag;
