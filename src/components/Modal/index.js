import React from "react";

export default function Modal({ maxWidth, show, icon, content, title, width }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 h-screen duration-200 ${
        show ? "top-0" : "top-150% xss:-top-full"
      }`}
    >
      <div
        className={`bg-white absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2  pt-8 pr-8 pl-8 pb-6 shadowModal flex items-start w-full ${width} ${maxWidth}`}
      >
        {icon}
        <div className="w-full">
          <p className="mb-2 font-bold text-base leading-6">{title}</p>
          {content}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  content: (
    <p className="text-sm leading-22">
      Are you sure want to delete this task?
      <br /> your action can’t be reverted.
    </p>
  ),
  width: "w-400",
  maxWidth: "max-w-400",
};
