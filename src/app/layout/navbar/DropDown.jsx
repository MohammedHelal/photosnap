"use client";
import { useState } from "react";

import Image from "next/image";

import cross from "@/assets/shared/mobile/close.svg";
import menu from "@/assets/shared/mobile/menu.svg";

export default function DropDown({ children }) {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => setDropDown(!dropDown);

  return (
    <>
      <div className="md:hidden" onClick={toggleDropDown}>
        <Image src={dropDown ? cross : menu} alt="dropdown toggle button" />
      </div>
      {dropDown && (
        <div className="z-50 absolute top-[72px] bottom-0 right-0 left-0 bg-[#00000099] md:hidden">
          <div className="w-full px-[25px] py-[10px] bg-white h-[250px]">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
