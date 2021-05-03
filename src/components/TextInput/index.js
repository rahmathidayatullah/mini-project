import React from "react";

export default function TextInput({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border text-sm p-10px w-full rounded outline-none focus:outline-none"
    />
  );
}

TextInput.defaultProps = {
  type: "text",
  placeholder: "example: Build rocket to Mars.",
};
