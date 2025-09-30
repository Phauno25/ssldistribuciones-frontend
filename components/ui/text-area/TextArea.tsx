import React, { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

export type TextareaProps = {
  status?: "error" | "success";
  label?: string;
  helperText?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;


const inputStyle = {
  base: "block bg-transparent w-full p-4 border border-surface-main placeholder-gray-400 text-white outline-none focus:border-gradient-main",
  status: {
    success:
      "bg-green-50 border text-green-400 placeholder-green-700 placeholder-green-500 focus:ring-green-500 focus:border-green-500 border-green-500",
    error:
      "bg-red-50 border focus:ring-red-500 bg-gray-700 text-red-500 placeholder-red-500 border-red-500",
  },
};
const labelStyle = {
  base: "block mb-2 text-sm font-medium",
  status: {
    success: "text-green-500",
    error: "text-red-500",
  },
};
const helperTextStyle = {
  base: "mt-2 text-sm",
  status: {
    success: "font-medium text-green-500",
    error: "font-medium text-red-500",
  },
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, status, ...props }, ref) => {
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
        <div className="flex justify-between">
          <textarea
            {...props}
            ref={ref}
            className={clsx(
              inputStyle.base,
              status === "error" && inputStyle.status.error,
              status === "success" && inputStyle.status.success
            )}
          />
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
TextArea.displayName = "TextArea";
export default TextArea;
