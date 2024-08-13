"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import cross from "@/assets/shared/mobile/close.svg";
import menu from "@/assets/shared/mobile/menu.svg";

export default function DropDown() {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = (bool) => setDropDown(bool);

  return (
    <>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => toggleDropDown(!dropDown)}
      >
        <Image src={dropDown ? cross : menu} alt="dropdown toggle button" />
      </div>
      {dropDown && (
        <div className="z-50 absolute top-[72px] bottom-0 right-0 left-0 bg-[#00000099] md:hidden">
          <div className="w-full px-[25px] py-[10px] bg-white h-[250px]">
            <ul className={`list-none py-[10px] border-b-2 border-slate-300`}>
              <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500 ">
                <Link href="/" onClick={() => toggleDropDown(false)}>
                  <h4 className="my-0">home</h4>
                </Link>
              </li>
              <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500 ">
                <Link href="/stories" onClick={() => toggleDropDown(false)}>
                  <h4 className="my-0">stories</h4>
                </Link>
              </li>
              <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500">
                <Link href="/features" onClick={() => toggleDropDown(false)}>
                  <h4 className="my-0">features</h4>
                </Link>
              </li>
              <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500">
                <Link href="/pricing" onClick={() => toggleDropDown(false)}>
                  <h4 className="my-0">pricing</h4>
                </Link>
              </li>
            </ul>
            <button
              className={`w-full uppercase block py-[15px] mt-[12px] text-white hover:text-black bg-black hover:bg-slate-300 cursor-pointer`}
            >
              <h4 className="my-0">get an invite</h4>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
