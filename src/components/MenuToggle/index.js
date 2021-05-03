import React from "react";
import IconArrowRight from "assets/icon/Arrow";
import IconEdit from "assets/icon/Edit";
import IconDelete from "assets/icon/Delete";

export default function MenuToggle() {
  return (
    <ul className="absolute py-2 rounded-lg bg-white shadowModal border min-w-145 top-9 right-0">
      <li className="flex items-center py-6px pl-5 pr-4 text-dark-2 hover:bg-unguSecondary hover:text-unguPrimary duration-200 cursor-pointer">
        <IconArrowRight fill="currentColor" className="mr-4" />
        <p className="currentColor font-openSans text-sm leading-5">
          Move Right
        </p>
      </li>
      <li className="flex items-center py-6px pl-5 pr-4 text-dark-2 hover:bg-unguSecondary hover:text-unguPrimary duration-200 cursor-pointer">
        <IconArrowRight
          fill="currentColor"
          className="mr-4 transform rotate-180"
        />
        <p className="currentColor font-openSans text-sm leading-5">
          Move Left
        </p>
      </li>
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
