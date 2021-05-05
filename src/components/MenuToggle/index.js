import * as React from "react";
import IconArrowRight from "assets/icon/Arrow";
import IconEdit from "assets/icon/Edit";
import IconDelete from "assets/icon/Delete";

import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "features/Todos/actions";
import { patchData } from "utils/fetchData";

export default function MenuToggle(props) {
  const dispatch = useDispatch();

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
    <ul className="absolute py-2 rounded-lg bg-white shadowModal border min-w-145 top-9 right-0">
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
      {props.toggle.length - 1 - props.index === props.toggle.length - 1 ? (
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
      <li className="flex items-center py-6px pl-5 pr-4 text-dark-2 hover:bg-unguSecondary hover:text-unguPrimary duration-200 cursor-pointer">
        <IconEdit fill="currentColor" className="mr-4" />
        <p className="currentColor font-openSans text-sm leading-5">Edit</p>
      </li>
      <li className="flex items-center py-6px pl-5 pr-4 text-dark-2 hover:bg-unguSecondary hover:text-unguPrimary duration-200 cursor-pointer">
        <IconDelete fill="currentColor" className="mr-4" />
        <p className="currentColor font-openSans text-sm leading-5">Delete</p>
      </li>
    </ul>
  );
}
