import React from "react";
import { clsx } from "clsx";
import { AvatarProps } from "./types";

const styles = {
  size: {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36",
  },
  variant: {
    circled: "rounded-full",
    squared: "rounded",
  },
};

const Avatar: React.FC<AvatarProps> = ({
  size = "md",
  variant = "circled",
  alt = "",
  ...props
}) => {
  return (
    <img
      {...props}
      alt={alt}
      className={clsx(styles.size[size], styles.variant[variant])}
    />
  );
};

export default Avatar;
