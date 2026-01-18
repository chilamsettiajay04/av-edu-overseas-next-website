import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    text-fontsize-body font-fontweight-medium font-fontfamily-sans
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-color-accent
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:scale-105
  `;

  const variants = {
    primary: `
      bg-color-accent text-color-text-white
      hover:bg-color-accent-hover
      shadow-shadow-sm
    `,
    secondary: `
      bg-color-surface text-color-text-primary
      border border-color-border
      hover:bg-color-surface-muted
    `,
    ghost: `
      bg-transparent text-color-text-primary
      hover:bg-color-surface-muted
    `,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-fontsize-small",
    md: "px-5 py-2.5 text-fontsize-body",
    lg: "px-6 py-3 text-fontsize-h3",
  };

  // ✅ Diagonal border radius (Top-Left & Bottom-Right only)
  const radius = {
    sm: "rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none",
    md: "rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none",
    lg: "rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${radius[size]}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
