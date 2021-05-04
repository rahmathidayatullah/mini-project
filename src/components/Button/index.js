import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const {
    type,
    label,
    bgColor,
    textColor,
    borderColor,
    className,
    onClick,
  } = props;
  return (
    <button
      type={type}
      className={`py-2 px-4 rounded-sm font-normal text-sm leading-22 py-5px border focus:outline-none outline-none ${bgColor} ${textColor} ${borderColor} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  label: "Button",
  type: "button",
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  label: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
