import logo from "@/assets/shared/desktop/logo.svg";
import DropDown from "./DropDown";
import Image from "next/image";
import NavList from "../shared/NavList";

function Nav() {
  return (
    <nav className="h-[72px] px-[25px] py-[24px] md:py-[4px] flex justify-between items-center md:justify-evenly">
      <Image src={logo} alt="Photsnap logo" className="" />
      <DropDown>
        <NavList listClasses="border-b-2 border-slate-300" />
        <button
          className={`w-full uppercase block py-[15px] mt-[20px] text-white hover:text-black bg-black hover:bg-slate-300 cursor-pointer`}
        >
          <h4 className="my-0">get an invite</h4>
        </button>
      </DropDown>
      <NavList listClasses="hidden md:block md:flex border-b-2 border-slate-300 md:border-b-0" />
      <button
        className={`hidden md:block uppercase block py-[15px] md:px-[25px] mx-auto mt-[20px] md:m-0 text-white hover:text-black bg-black hover:bg-slate-300 xl:px-[50px] cursor-pointer`}
      >
        <h4 className="my-0">get an invite</h4>
      </button>
    </nav>
  );
}

export default Nav;
