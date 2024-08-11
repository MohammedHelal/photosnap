import ResponsiveImage from "@/utils/ResponsiveImage";
import ArrowButton from "@/utils/ArrowButton";
import "./PhotoStory.css";

function PhotoStory({ image, title, by, date }) {
  return (
    <>
      <div className="fancy-container w-[375px] h-[375px] md:w-[389px] md:h-[500px] xl:w-[360px]">
        <figure className="flex items-end relative w-[375px] h-[375px] md:w-[389px] md:h-[500px] xl:w-[360px] hover:-translate-y-8 hover:transition-transform hover:ease-in-out hover:duration-300 z-10 cursor-pointer">
          <ResponsiveImage
            {...image}
            classes="absolute top-0 bottom-0 right-0 left-0 z-index w-[375px] h-[375px] md:w-[389px] md:h-[499px] xl:w-[360px] xl:h-[500px] z-0 "
          />{" "}
          <div className="w-full h-full flex flex-col justify-end py-[50px] px-[25px] text-white bg-gradient-to-b from-transparent to-[#000000cf] z-10">
            {date && <p className="my-0">{date}</p>}
            <h2 className="my-[5px]">{title}</h2>
            <p className="my-0">{by}</p>
            <hr className="my-[15px] border-slate-500" />
            <ArrowButton
              classes="w-full flex items-center justify-between"
              filter={true}
              text="read story"
            />
          </div>
        </figure>
        <div className="w-full box-decoration-clone fancy-border"></div>
      </div>
    </>
  );
}

export default PhotoStory;
