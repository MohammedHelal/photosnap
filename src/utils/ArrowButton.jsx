import Image from "next/image";
import arrow from "@/assets/shared/desktop/arrow.svg";

function ArrowButton({ classes, filter, text }) {
  return (
    <button
      className={`${classes} p-0 border-0 bg-inherit uppercase hover:underline`}
    >
      <h4 className="inline my-0">{text}</h4>{" "}
      <Image
        src={arrow}
        alt="arrow pointing right"
        className={`ml-[15px] inline ${filter ? "filter-white" : ""}`}
      />
    </button>
  );
}

export default ArrowButton;
