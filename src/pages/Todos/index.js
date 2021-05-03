import React, { useState } from "react";
import IconBrand from "assets/icon/Brand";
import IconAdd from "assets/icon/Add";
import Tag from "components/Tag";
import ItemGroup from "components/ItemGroup";
import Modal from "components/Modal";
import TextInput from "components/TextInput";
import Button from "components/Button";

export default function Todos() {
  const [modalNewTask, setModalNewTask] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar */}
      <div className="h-full w-68 bg-dark flex justify-center">
        <IconBrand className="mt-5" />
      </div>
      {/* content */}
      <div className="bg-white px-50 py-5 w-full">
        <h3 className="mb-6 font-medium text-dark-2 text-xl">
          Product Roudmap
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            {/* wrap group 01 */}
            <div className="bg-pink rounded border border-pink px-3 pt-3 pb-4">
              <Tag className="mb-1" text="Group Task 1" />
              <p className="font-medium text-xs leading-5 mb-10px">
                Januari - March
              </p>
              <ItemGroup className="mb-3" />
              <ItemGroup
                className="mb-3"
                text="Bundle interplanetary analytics for improved transmission"
              />
              <button
                className="flex items-center outline-none focus:outline-none"
                onClick={() => setModalNewTask(true)}
              >
                <IconAdd className="mr-2" />
                <p className="leading-5 text-dark-2">New Task</p>
              </button>
            </div>
          </div>
          <div className="col-span-1">
            {/* wrap group 02 */}
            <div className="bg-purple rounded border border-purple px-3 pt-3 pb-4">
              <Tag
                className="mb-1"
                borderColor="border-purple"
                bgColor="bg-purple"
                textColor="text-purple"
                text="Group Task 2"
              />
              <p className="font-medium text-xs leading-5 mb-10px">
                April - June
              </p>
              <div className="mb-3 rounded border border-gray py-3 px-4 bg-white">
                <p className="leading-6 text-gray">No Task Available</p>
              </div>
              <button
                className="flex items-center outline-none focus:outline-none"
                onClick={() => setModalNewTask(true)}
              >
                <IconAdd className="mr-2" />
                <p className="leading-5 text-dark-2">New Task</p>
              </button>
            </div>
          </div>
          <div className="col-span-1">
            {/* wrap group 03 */}
            <div className="bg-biru rounded border border-biru px-3 pt-3 pb-4">
              <Tag
                className="mb-1"
                borderColor="border-geekBlue"
                bgColor="bg-geekBlue"
                textColor="text-geekBlue"
                text="Group Task 3"
              />
              <p className="font-medium text-xs leading-5 mb-10px">
                July - September
              </p>
              <ItemGroup
                className="mb-3"
                text="Bundle interplanetary analytics for improved transmission"
              />
              <button
                className="flex items-center outline-none focus:outline-none"
                onClick={() => setModalNewTask(true)}
              >
                <IconAdd className="mr-2" />
                <p className="leading-5 text-dark-2">New Task</p>
              </button>
            </div>
          </div>
          <div className="col-span-1">
            {/* wrap group 04 */}
            <div className="bg-green rounded border border-green px-3 pt-3 pb-4">
              <Tag
                className="mb-1"
                borderColor="border-green"
                bgColor="bg-green"
                textColor="text-green"
                text="Group Task 4"
              />
              <p className="font-medium text-xs leading-5 mb-10px">
                October - December
              </p>
              <ItemGroup
                className="mb-3"
                text="Data Migration: Performance & Culture End Game"
              />
              <button
                className="flex items-center outline-none focus:outline-none"
                onClick={() => setModalNewTask(true)}
              >
                <IconAdd className="mr-2" />
                <p className="leading-5 text-dark-2">New Task</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={modalNewTask}
        title="Create Task"
        content={
          <div>
            <p className="text-xs leading-4 mb-1">Task Name</p>
            <TextInput />
            <p className="text-xs leading-4 mb-1 mt-2">Progress</p>
            <div className="w-99px">
              <TextInput placeholder="0%" />
            </div>
          </div>
        }
        btn1={
          <Button
            bgColor="white"
            borderColor="graySecondary"
            textColor="text-darkSecondary"
            label="Cancel"
            onClick={() => setModalNewTask(false)}
          />
        }
        btn2={
          <Button
            bgColor="bg-greenSecondary"
            textColor="text-white"
            label="Save Task"
          />
        }
      />
    </div>
  );
}
