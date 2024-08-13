import DropDown from "./DropDown";
import NavList from "../shared/NavList";
import Logo from "../shared/Logo";

function Nav() {
  return (
    <nav className="h-[72px] px-[25px] py-[24px] md:py-[4px] flex justify-between items-center md:justify-evenly">
      <Logo black={true} />
      <DropDown />
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
