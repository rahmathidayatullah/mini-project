import React from "react";

export default function Button({
  label,
  bgColor,
  textColor,
  borderColor,
  className,
  onClick,
}) {
  return (
    <button
      className={`py-2 px-4 rounded-sm font-normal text-sm leading-22 py-5px border focus:outline-none outline-none ${bgColor} ${textColor} ${borderColor} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  label: "Button",
};
