import React from "react";
import clsx from "clsx";

export type CheckboxProps = {
  helperText?: string;
  label?: string;
  bordered?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const style = {
  bordered:
    "items-center ps-4 border border-gray-200 rounded dark:border-gray-700",
};

const Checkbox: React.FC<CheckboxProps> = ({
  helperText,
  label,
  bordered,
  ...props
}) => {
  return (
    <div className={clsx("flex", bordered && style.bordered)}>
      <div className="flex items-center h-5">
        <input
          {...props}
          type="checkbox"
          className="w-4 h-4 text-primary-main bg-gray-100 border-gray-300 focus:ring-primary-light dark:focus:ring-primary-main dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      {label || helperText ? (
        <div className="ms-2 text-sm">
          {label && (
            <label
              htmlFor={props.id}
              className="font-medium text-gray-900 dark:text-gray-300"
            >
              {label}
            </label>
          )}
          {helperText && (
            <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
              {helperText}
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Checkbox;
