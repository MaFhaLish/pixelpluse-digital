"use client";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Button from "@/Components/Button";

function DropDown() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div
        onClick={() => setVisible(!visible)}
        className="md:hidden list-none text-3xl cursor-pointer text-cyan-500"
      >
        <IoMdMenu />
      </div>

      {visible && (
        <ul className="md:hidden border-2 shadow-md	 border-slate-100 font-semibold rounded-l-lg rounded-br-lg bg-slate-100 py-10  absolute right-[4.4rem] top-[3.8rem] space-y-5 text-sm w-[50%] text-center">
          <li className="cursor-pointer hover:text-slate-700">Home</li>
          <li className="cursor-pointer hover:text-slate-700">About</li>
          <li className="cursor-pointer hover:text-slate-700">Contact</li>
          <li className="cursor-pointer hover:text-slate-700">Social</li>
          <Button />
        </ul>
      )}
    </>
  );
}

export default DropDown;
