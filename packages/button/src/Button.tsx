import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    borderRadius: 8,
    fontWeight: 500,
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled || loading ? 0.6 : 1,
    border: "none",
    transition: "all 0.2s ease",
  };

  const sizeStyle: Record<ButtonSize, React.CSSProperties> = {
    sm: { padding: "6px 12px", fontSize: 12 },
    md: { padding: "10px 16px", fontSize: 14 },
    lg: { padding: "14px 20px", fontSize: 16 },
  };

  const variantStyle: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      backgroundColor: "#6366f1",
      color: "#fff",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#6366f1",
      border: "1px solid #6366f1",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#6366f1",
    },
  };

  return (
    <button
      disabled={disabled || loading}
      style={{
        ...baseStyle,
        ...sizeStyle[size],
        ...variantStyle[variant],
      }}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
