import React from "react";
import { clsx } from "clsx";
import { motion } from "motion/react";
import { ButtonProps } from "./types";

const styles = {
  base: "rounded-lg text-center font-medium",
  size: {
    xs: "px-3 py-2 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base",
  },
  variant: {
    outlined: `text-white border border-primary-main bg-transparent focus:ring-2 focus:outline-none focus:ring-secondary-main hover:text-black hover:bg-primary-main focus:ring-secondary-main`,
    filled: `text-default font-semibold bg-primary-main active:bg-primary-dark hover:bg-primary-light`,
    link: "",
    gradient:
      "p-0.5 flex items-center justify-center text-white bg-gradient-to-br from-secondary-main to-primary-main group-hover:from-blue-600 group-hover:to-primary-main hover:text-white focus:ring-1 focus:outline-none focus:ring-primary-main",
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "filled",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    return variant === "gradient" ? (
      <motion.button
        whileHover={{ scale: 1.2 }}
        {...props}
        className={clsx(styles.base, styles.variant[variant], className)}
        color="red"
        ref={ref}
      >
        <span
          className={clsx(
            styles.size[size],
            "relative transition-all ease-in duration-75 bg-surface-main rounded-md group-hover:bg-opacity-0",
            className
          )}
        >
          {children}
        </span>
      </motion.button>
    ) : (
      <motion.button
        {...props}
        whileTap={{
          scale: 1.2,
        }}
        whileHover={{ scale: 1.1 }}
        ref={ref}
        className={clsx(
          styles.base,
          styles.size[size],
          styles.variant[variant],
          className
        )}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export default Button;
