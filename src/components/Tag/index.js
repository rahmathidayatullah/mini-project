import React from "react";

export default function Tag({
  borderColor,
  textColor,
  bgColor,
  text,
  className,
}) {
  return (
    <div
      className={`rounded-sm leading-5 text-xs border max-w-max px-2 ${borderColor} ${textColor} ${bgColor} ${className}`}
    >
      <p>{text}</p>
    </div>
  );
}
Tag.defaultProps = {
  borderColor: "border-pinkSecondary",
  bgColor: "bg-pink",
  // borderColor: "border-pink",
  textColor: "text-pink",
  text: "Magenta",
};
