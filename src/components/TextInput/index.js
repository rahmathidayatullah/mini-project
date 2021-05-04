import React from "react";
import PropTypes from "prop-types";

export default function TextInput(props) {
  const {
    value,
    type,
    placeholder,
    name,
    onChange,
    error,
    register,
    className,
  } = props;

  return (
    <React.Fragment>
      <input
        ref={register}
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`border text-sm p-10px w-full rounded outline-none focus:outline-none ${className}`}
        style={error && { border: "solid 1px red" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </React.Fragment>
  );
}

TextInput.defaultProps = {
  type: "text",
  placeholder: "example: Build rocket to Mars.",
};

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
