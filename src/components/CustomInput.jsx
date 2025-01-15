import { useState } from "react";

const CustomFormField = ({
  type = "text",
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  options = [],
  className = "",
  rows = {},
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseClasses =
    "block w-full rounded-lg border border-slate-200 px-4 py-3 text-lg text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200";

  const renderField = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            name={name}
            rows={rows}
            id={id}
            required={required}
            className={`${baseClasses} min-h-[100px] resize-y ${className}`}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );

      case "select":
        return (
          <div className="relative">
            <select
              name={name}
              id={id}
              required={required}
              className={`${baseClasses} appearance-none cursor-pointer ${className}`}
              value={value}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              <option value="" disabled></option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Dropdown arrow icon */}
            <div className="absolute right-4 top-1/2 -translate-y-3 pointer-events-none">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M9.33331 2.31445C5.24442 2.31445 1.9259 5.63297 1.9259 9.72186C1.9259 13.8108 5.24442 17.1293 9.33331 17.1293C13.4222 17.1293 16.7407 13.8108 16.7407 9.72186C16.7407 5.63297 13.4222 2.31445 9.33331 2.31445ZM9.07405 11.6848L7.00739 9.61816C6.77035 9.38112 6.93331 8.98112 7.26664 8.98112H11.4074C11.7407 8.98112 11.9037 9.38112 11.6666 9.61075L9.59998 11.6774C9.45183 11.8256 9.21479 11.8256 9.07405 11.6848V11.6848Z"
                  fill="#2947A9"
                />
              </svg>
            </div>

            {/* Placeholder with red asterisk overlay */}
            {!value && !isFocused && (
              <div className="pointer-events-none absolute left-0 top-0 flex h-full items-center px-4 py-3">
                <span className="text-slate-400">{placeholder}</span>
                {required && <span className="text-red-500 ml-0.5">*</span>}
              </div>
            )}
          </div>
        );

      default:
        return (
          <input
            type={type}
            name={name}
            id={id}
            required={required}
            className={`${baseClasses} ${className}`}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
    }
  };

  return (
    <div className="relative">
      {renderField()}
      {!value && !isFocused && type !== "select" && (
        <div
          className={`pointer-events-none absolute left-0 top-0 flex h-full px-4 py-3 ${
            type === "textarea" ? "item-start" : "items-center"
          }`}
        >
          <span className="text-slate-400">{placeholder}</span>
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </div>
      )}
    </div>
  );
};

export default CustomFormField;
