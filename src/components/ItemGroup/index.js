import * as React from "react";
import Progress from "components/Progress";
import IconArrowRight from "assets/icon/Arrow";
import IconEdit from "assets/icon/Edit";
import IconDelete from "assets/icon/Delete";

import { useDispatch } from "react-redux";
import { fetchTodos } from "features/Todos/actions";
import { patchData } from "utils/fetchData";
import IconMore from "assets/icon/More";
import IconClose from "assets/icon/Close";
import IconCheck from "assets/icon/Check";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

export default function ItemGroup({ className, text, ...props }) {
  const dispatch = useDispatch();
  const dropdownRef = React.useRef(null);
  const [isShow, setIsShow] = useDetectOutsideClick(dropdownRef, false);

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

  const handleMoveRight = async (data) => {
    let payload = {
      target_todo_id: props.toggle[props.index + 1].id,
    };
    let res = await patchData(
      `todos/${props.toggle[props.index].id}/items/${data.id}`,
      payload
    );
    if (res.status === 200) dispatch(fetchTodos());
  };

  const handleMoveLeft = async (data) => {
    let payload = {
      target_todo_id: props.toggle[props.index - 1].id,
    };
    let res = await patchData(
      `todos/${props.toggle[props.index].id}/items/${data.id}`,
      payload
    );
    if (res.status === 200) dispatch(fetchTodos());
  };
  return (
    <div
      className={`border border-gray rounded p-4 bg-white ${className}`}
      style={{ overflowWrap: "anywhere" }}
    >
      <p className="sm:text-sm xl:text-base font-medium">{text}</p>
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
            onClick={() => setIsShow(!isShow)}
          >
            <IconMore className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" />
            {isShow && (
              <ul
                ref={dropdownRef}
                className="absolute py-2 rounded-lg bg-white shadowModal border min-w-145 -top-6 -right-20 z-20"
              >
                {props.toggle.length - 1 - props.index === 0 ? (
                  ""
                ) : (
                  <li
                    onClick={() => handleMoveRight(props.data)}
                    className="flex items-center py-6px pl-5 pr-4 text-dark-2 hover:bg-unguSecondary hover:text-unguPrimary duration-200 cursor-pointer"
                  >
                    <IconArrowRight fill="currentColor" className="mr-4" />
                    <p className="currentColor font-openSans text-sm leading-5">
                      Move Right
                    </p>
                  </li>
                )}
                {props.toggle.length - 1 - props.index ===
                props.toggle.length - 1 ? (
                  ""
                ) : (
                  <li
                    onClick={() => handleMoveLeft(props.data)}
                    className="flex items-center py-6px pl-5 pr-4 text-dark-2 hover:bg-unguSecondary hover:text-unguPrimary duration-200 cursor-pointer"
                  >
                    <IconArrowRight
                      fill="currentColor"
                      className="mr-4 transform rotate-180"
                    />
                    <p className="currentColor font-openSans text-sm leading-5">
                      Move Left
                    </p>
                  </li>
                )}
                <li
                  className="flex items-center py-6px pl-5 pr-4 text-dark-2 hover:bg-unguSecondary hover:text-unguPrimary duration-200 cursor-pointer"
                  onClick={props.handleShowEdit}
                >
                  <IconEdit fill="currentColor" className="mr-4" />
                  <p className="currentColor font-openSans text-sm leading-5">
                    Edit
                  </p>
                </li>
                <li
                  className="flex items-center py-6px pl-5 pr-4 text-dark-2 hover:bg-unguSecondary hover:text-unguPrimary duration-200 cursor-pointer"
                  onClick={props.handleShowDelete}
                >
                  <IconDelete fill="currentColor" className="mr-4" />
                  <p className="currentColor font-openSans text-sm leading-5">
                    Delete
                  </p>
                </li>
              </ul>
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
