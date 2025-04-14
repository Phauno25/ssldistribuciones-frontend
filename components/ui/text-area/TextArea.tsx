import React from "react";
import clsx from "clsx";
import { TextareaProps } from "./types";

const inputStyle = {
  base: "block w-full p-4 border border-red-300 rounded-lg bg-gray-50 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500",
  status: {
    success:
      "bg-green-50 border text-green-400 placeholder-green-700 placeholder-green-500 focus:ring-green-500 focus:border-green-500 bg-gray-700 border-green-500",
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
