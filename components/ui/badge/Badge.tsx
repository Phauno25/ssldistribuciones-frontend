import clsx from "clsx";
import React, { HTMLAttributes } from "react";

export type BadgeProps = {
  size?: "sm" | "md";
  variant?: "filled" | "outlined";
  rounded?: boolean;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

const styles = {
  base: "text-center font-medium",
  size: {
    sm: "me-2 px-2.5 py-0.5 text-xs",
    md: "me-2 px-3 py-1 text-sm",
  },
  variant: {
    outlined:
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border border-gray-500",
    filled: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  },
};

const Badge: React.FC<BadgeProps> = ({
  size = "md",
  variant = "filled",
  rounded,
  children,
  ...props
}) => {
  return (
    <span
      className={clsx(
        styles.base,
        styles.size,
        styles.variant,
        rounded ? "rounded-full" : "rounded"
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
