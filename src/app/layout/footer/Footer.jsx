import Logo from "../shared/Logo";
import ArrowButton from "@/utils/ArrowButton";
import FooterIcons from "./FooterIcons";
import NavList from "../shared/NavList";

function Footer() {
  return (
    <footer className="w-full bg-black h-[550px] md:h-auto py-[50px] px-[25px] md:px-[60px] lg:px-[150px] flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:items-start md:h-[200px] lg:h-[150px]">
        <Logo />
        <div className="flex justify-center items-center my-[15px] md:order-3 md:mt-auto">
          <FooterIcons />
        </div>
        <NavList
          listClasses="text-white md:-ml-[15px] md:flex md:items-center md:order-2 lg:block lg:relative lg:left-[200px] lg:-top-[45px] lg:h-0"
          footer
        />
      </div>
      <div className="flex flex-col justify-center md:justify-between md:h-[180px] lg:h-[150px]">
        <ArrowButton
          classes="text-white md:ml-auto"
          filter={true}
          text="get an invite"
        />
        <p className="text-slate-500 text-center">
          Coyright 2019: All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

/*
        <ul className="list-none py-[10px] text-white md:flex md:order-2 md:flex md:items-center lg:block lg:relative lg:left-[200px] lg:-top-[45px] lg:h-0">
          <li className="text-center py-[10px] px-[25px] uppercase cursor-pointer md:pl-0 md:pr-[10px]">
            <h4 className="my-0 hover:text-slate-500">home</h4>
          </li>
          <li className="text-center py-[10px] px-[25px] uppercase cursor-pointer md:px-[10px]">
            <h4 className="my-0 text-white hover:text-slate-500">stories</h4>
          </li>
          <li className="text-center py-[10px] px-[25px] uppercase cursor-pointer md:px-[10px]">
            <h4 className="my-0 text-white hover:text-slate-500">features</h4>
          </li>
          <li className="text-center py-[10px] px-[25px] uppercase cursor-pointer md:px-[10px]">
            <h4 className="my-0 text-white hover:text-slate-500">pricing</h4>
          </li>
        </ul>
*/
