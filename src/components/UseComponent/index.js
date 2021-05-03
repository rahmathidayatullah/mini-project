import React, { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import TextInput from "../TextInput";
import Tag from "../Tag";
import Progress from "../Progress";
import MenuToggle from "../MenuToggle";
import IconWarning from "assets/icon/Warning";
import IconCheck from "assets/icon/Check";
import IconClose from "assets/icon/Close";
import IconMore from "assets/icon/More";
import ItemGroup from "components/ItemGroup";

export default function Component() {
  const [modal, setModal] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="px-10 pb-32">
      <h1 className="mt-4 mb-3">Component Button</h1>
      {/* btn primary */}
      <Button bgColor="bg-red" textColor="text-white" className="mr-4" />
      {/* btn primary */}
      <Button bgColor="bg-greenSecondary" textColor="text-white" />
      {/* btn outline */}
      <Button
        className="ml-4"
        bgColor="white"
        borderColor="graySecondary"
        textColor="text-darkSecondary"
      />
      <h1 className="mt-5 mb-3">Component Modal</h1>

      {/* btn small with icon */}

      <Button
        bgColor="bg-red"
        textColor="text-white"
        className="mr-4"
        label="Modal small"
        onClick={() => setModal(true)}
      />
      {/* btn large with input content */}

      <Button
        bgColor="bg-red"
        textColor="text-white"
        label="Modal large"
        onClick={() => setModalLarge(true)}
      />
      {/* modal small with icon */}
      <Modal
        show={modal}
        title="Delete Task"
        icon={<IconWarning className="mr-4" />}
        btn1={
          <Button
            bgColor="white"
            borderColor="graySecondary"
            textColor="text-darkSecondary"
            label="Cancel"
            onClick={() => setModal(false)}
          />
        }
        btn2={<Button bgColor="bg-red" textColor="text-white" label="Delete" />}
      />
      {/* modal large with input content */}
      <Modal
        show={modalLarge}
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
            onClick={() => setModalLarge(false)}
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
      <h1 className="mt-4 mb-3">Component input</h1>
      {/* InputText */}
      <div className="max-w-sm">
        <TextInput />
        <div className="w-99px mt-4">
          <TextInput placeholder="0%" />
        </div>
      </div>
      <h1 className="mt-6 mb-3">Component Tag</h1>
      {/* Tag */}
      <div className="flex">
        <Tag className="mr-2" />
        <Tag
          className="mr-2"
          borderColor="border-red"
          text="Red"
          bgColor="bg-redDust"
          textColor="text-red"
        />
        <Tag
          className="mr-2"
          borderColor="border-volcano"
          text="Volcano"
          bgColor="bg-volcano"
          textColor="text-volcano"
        />
        <Tag
          className="mr-2"
          borderColor="border-orange"
          text="Orange"
          bgColor="bg-orange"
          textColor="text-orange"
        />
        <Tag
          className="mr-2"
          borderColor="border-gold"
          text="Gold"
          bgColor="bg-gold"
          textColor="text-gold"
        />
        <Tag
          className="mr-2"
          borderColor="border-lime"
          text="Lime"
          bgColor="bg-lime"
          textColor="text-lime"
        />
        <Tag
          className="mr-2"
          borderColor="border-green"
          text="Green"
          bgColor="bg-green"
          textColor="text-green"
        />
        <Tag
          className="mr-2"
          borderColor="border-cyan"
          text="Cyan"
          bgColor="bg-cyan"
          textColor="text-cyan"
        />
        <Tag
          className="mr-2"
          borderColor="border-blue"
          text="Blue"
          bgColor="bg-blue"
          textColor="text-blue"
        />
        <Tag
          className="mr-2"
          borderColor="border-geekBlue"
          text="GeekBlue"
          bgColor="bg-geekBlue"
          textColor="text-geekBlue"
        />
        <Tag
          className="mr-2"
          borderColor="border-purple"
          text="Purple"
          bgColor="bg-purple"
          textColor="text-purple"
        />
      </div>

      {/* Progress */}
      <h1 className="mt-4 mb-3">Component Progress</h1>
      <div className="max-w-sm mt-4">
        <Progress
          value={<p className="leading-22 text-gray-7 text-xs">10%</p>}
        />
        <Progress
          persentase="w-1/5"
          value={<p className="leading-22 text-gray-7 text-xs">20%</p>}
        />
        <Progress
          persentase="w-30%"
          value={<p className="leading-22 text-gray-7 text-xs">30%</p>}
        />
        <Progress
          persentase="w-2/5"
          value={<p className="leading-22 text-gray-7 text-xs">40%</p>}
        />
        <Progress
          persentase="w-2/4"
          value={<p className="leading-22 text-gray-7 text-xs">50%</p>}
        />
        <Progress
          persentase="w-3/5"
          value={<p className="leading-22 text-gray-7 text-xs">60%</p>}
        />
        <Progress
          persentase="w-70%"
          value={<p className="leading-22 text-gray-7 text-xs">70%</p>}
        />
        <Progress
          persentase="w-4/5"
          value={<p className="leading-22 text-gray-7 text-xs">80%</p>}
        />
        <Progress
          persentase="w-90%"
          value={<p className="leading-22 text-gray-7 text-xs">90%</p>}
        />
        <Progress persentase="w-full" value={<IconCheck />} />
        <Progress
          className="mt-2"
          bgProgress="bg-red-6"
          persentase="w-full"
          value={<IconClose />}
        />
      </div>

      {/* Menu Toggle */}
      <h1 className="mt-4 mb-3">Component Toggle</h1>
      <div className="relative">
        <button
          className="relative left-36 w-8 h-8 outline-none focus:outline-none rounded-lg hover:bg-gray-5"
          onClick={() =>
            menuToggle === false ? setMenuToggle(true) : setMenuToggle(false)
          }
        >
          <IconMore className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" />
          {menuToggle === false ? "" : <MenuToggle />}
        </button>
      </div>

      {/* ItemGroup */}
      <h1 className="mt-20 mb-3">Component Item Group</h1>
      <div className="max-w-xs">
        <ItemGroup className="mt-6" />
        <ItemGroup className="mt-4" />
      </div>
    </div>
  );
}
