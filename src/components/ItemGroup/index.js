import React, { useState } from "react";
import Progress from "components/Progress";
import MenuToggle from "components/MenuToggle";
import IconMore from "assets/icon/More";

export default function ItemGroup({ className, text }) {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className={`border border-gray rounded p-4 bg-white ${className}`}>
      <p className="font-medium">{text}</p>
      <div className="flex items-center w-full justify-between mt-6">
        <div className="max-w-50%">
          <Progress
            value={<p className="leading-22 text-gray-7 text-xs">10%</p>}
          />
        </div>
        <div className="relative">
          <button
            className="relative w-8 h-8 outline-none focus:outline-none rounded-lg hover:bg-gray-5 duration-200"
            onClick={() =>
              menuToggle === false ? setMenuToggle(true) : setMenuToggle(false)
            }
          >
            <IconMore className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" />
            {menuToggle === false ? "" : <MenuToggle />}
          </button>
        </div>
      </div>
    </div>
  );
}
ItemGroup.defaultProps = {
  text: "Re-designed the zero-g doggie bags. No more spills!",
};
