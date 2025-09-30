import React from "react";
import { clsx } from "clsx";
import "./button.css";

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: "filled" | "outlined" | "link" | "gradient";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  url?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  base: "ssl-button relative rounded-sm text-center font-medium outline-none cursor-pointer ring-off focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-secondary-main ring-offset-2",
  size: {
    xs: "px-3 py-2 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base",
  },
  variant: {
    outlined: `text-white border border-primary-main bg-transparent hover:text-black hover:bg-primary-light active:bg-primary-dark`,
    filled: `text-default font-semibold bg-primary-main hover:bg-primary-light active:bg-primary-dark`,
    link: "",
    gradient:
      "ssl-button-gradient p-0.5 overflow-hidden rounded-none flex items-center justify-center text-white bg-transparent border-gradient-main border-2",
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "filled", size = "md", className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          styles.base,
          styles.size[size],
          styles.variant[variant],
          className
        )}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
