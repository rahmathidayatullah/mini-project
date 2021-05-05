import React, { useState } from "react";
import Progress from "components/Progress";
import MenuToggle from "components/MenuToggle";
import IconMore from "assets/icon/More";
import IconClose from "assets/icon/Close";
import IconCheck from "assets/icon/Check";

export default function ItemGroup({ className, text, ...props }) {
  const [menuToggle, setMenuToggle] = useState(false);
  let progress = [];
  if (props.progress < 20) progress.push("w-10%");
  if (props.progress >= 20 && props.progress < 30) progress.push("w-1/5");
  if (props.progress >= 30 && props.progress < 40) progress.push("w-30%");
  if (props.progress >= 40 && props.progress < 50) progress.push("w-2/5");
  if (props.progress >= 50 && props.progress < 60) progress.push("w-2/4");
  if (props.progress >= 60 && props.progress < 70) progress.push("w-3/5");
  if (props.progress >= 70 && props.progress < 80) progress.push("w-70%");
  if (props.progress >= 80 && props.progress < 90) progress.push("w-4/5");
  if (props.progress >= 90 && props.progress < 100) progress.push("w-90%");
  if (props.progress >= 100) progress.push("w-full bg-greenPrimary");
  if (props.progress > 100) progress.push("w-full bg-red-6");
  const checkPersen = () => {
    if (props.progress === 100) {
      return <IconCheck />;
    } else if (props.progress < 100) {
      return props.progress + "%";
    } else {
      return <IconClose />;
    }
  };
  return (
    <div className={`border border-gray rounded p-4 bg-white ${className}`}>
      <p className="font-medium">{text}</p>
      <div className="flex items-center w-full justify-between mt-6">
        <div className="max-w-50%">
          <Progress
            persentase={`${progress.join("")}`}
            value={
              <p className="leading-22 text-gray-7 text-xs whitespace-nowrap">
                {checkPersen()}
              </p>
            }
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
            {menuToggle === false ? (
              ""
            ) : (
              <MenuToggle
                toggle={props.toggle}
                index={props.index}
                data={props.data}
                handleShowDelete={props.handleShowDelete}
                handleShowEdit={props.handleShowEdit}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
ItemGroup.defaultProps = {
  text: "Re-designed the zero-g doggie bags. No more spills!",
};
