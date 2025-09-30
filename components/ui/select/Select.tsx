import clsx from "clsx";
import React, { SelectHTMLAttributes, useId } from "react";

export type SelectProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">;

const Select: React.FC<SelectProps> = ({
  label,
  size = "md",
  children,
  className,
  ...props
}) => {
  const id = useId();
  const labelStyles = {
    base: "block mb-2 font-medium text-gray-900 dark:text-white",
    size: {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
    },
  };
  const styles = {
    base: "min-w-44 block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    size: {
      sm: "p-2 text-sm",
      md: " text-sm rounded-lg p-2.5",
      lg: " px-4 py-3 text-base",
    },
  };
  return (
    <>
      <label
        htmlFor={props.name ?? props.id ?? id}
        className={clsx(labelStyles.base, labelStyles.size[size])}
      >
        {label}
      </label>
      <select
        id={props.id ?? id}
        name={props.name ?? props.id ?? id}
        className={clsx(styles.base, styles.size.sm, className)}
        {...props}
      >
        {children}
      </select>
    </>
  );
};

export default Select;
