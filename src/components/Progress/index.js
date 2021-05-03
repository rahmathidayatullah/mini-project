import React from "react";

export default function Progress({ value, persentase, bgProgress, className }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-2 rounded-lg bg-gray w-205">
        <div
          className={`absolute top-0 left-0 bottom-0  rounded-lg ${bgProgress} ${persentase}`}
        ></div>
      </div>
      <div className="ml-2 flex items-center">{value}</div>
    </div>
  );
}

Progress.defaultProps = {
  persentase: "w-10%",
  bgProgress: "bg-biruPrimary",
};
