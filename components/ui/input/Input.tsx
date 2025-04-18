import React from "react";
import clsx from "clsx";
import Icon from "../icon/Icon";
import { InputProps } from "./types";

const inputStyle = {
  base: "block w-full border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white flex justify-start items-center gap-2 focus-within:ring-2 focus-within: ring-primary-light",
  size: {
    sm: "p-2 text-xs",
    md: "text-sm p-2.5",
    lg: "p-4 text-base",
  },
  status: {
    success:
      "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-500",
    error:
      "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500",
  },
};
const labelStyle = {
  base: "block mb-2 text-sm font-medium",
  status: {
    success: "text-green-700 dark:text-green-500",
    error: "text-red-700 dark:text-red-500",
  },
};
const helperTextStyle = {
  base: "mt-2 text-sm",
  status: {
    success: "font-medium text-green-600 dark:text-green-500",
    error: "font-medium text-red-600 dark:text-red-500",
  },
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = "md", label, helperText, status, iconName, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={props.name}
            className={clsx(
              labelStyle.base,
              status === "error" && labelStyle.status.error,
              status === "success" && labelStyle.status.success
            )}
          >
            {label}
          </label>
        )}
        <div
          className={clsx(
            inputStyle.base,
            inputStyle.size[size as "sm" | "md" | "lg"],
            status === "error" && inputStyle.status.error,
            status === "success" && inputStyle.status.success
          )}
        >
          {iconName && <Icon name={iconName} />}
          <input {...props} className="bg-transparent outline-none" ref={ref} />
        </div>
        <span
          className={clsx(
            helperTextStyle.base,
            status === "error" && helperTextStyle.status.error,
            status === "success" && helperTextStyle.status.success
          )}
        >
          {helperText}
        </span>
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
