"use client";

import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "light" | "outline";
}

export default function Button({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
  ...rest
}: Props) {
  const baseStyles =
    "flex items-center justify-center rounded-lg font-medium transition-all duration-200";

  const variantStyles = {
    primary: "bg-brand-red text-white hover:bg-brand-orange hover:scale-105",
    secondary:
      "bg-brand-dark text-white border border-brand-orange hover:bg-brand-orange/20",
    light: "bg-brand-orange text-white hover:bg-brand-red",
    outline:
      "border border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
  };

  const sizeStyles = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const iconPositionStyle =
    iconPosition === "left" ? "flex-row gap-2" : "flex-row-reverse gap-2";

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${iconPositionStyle}`}
      disabled={disabled}
      {...rest}
    >
      {icon && icon}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}
