//importing images
import beautifulMobile from "@/assets/home/mobile/beautiful-stories.jpg";
import beautifulTablet from "@/assets/home/tablet/beautiful-stories.jpg";
import beautifulDesktop from "@/assets/home/desktop/beautiful-stories.jpg";
//importing components
import ImageAndTextContainer from "../shared/ImageAndTextContainer";
import ArrowButton from "@/utils/ArrowButton";

function Beautiful() {
  return (
    <ImageAndTextContainer
      image={{
        mobile: beautifulMobile,
        tablet: beautifulTablet,
        desktop: beautifulDesktop,
      }}
      classes={{ img: "w-full", article: "" }}
      hideBar={true}
    >
      <h1 className="uppercas my-[15px]">Designed for everyone</h1>
      <p className="text-slate-500">
        Photosnap can help you create stories that resonate with your audience.
        Our tool is designed for photographers of all levels, brands, businesses
        you name it.
      </p>
      <ArrowButton classes="text-black mt-[15px]" text="View the stories" />
    </ImageAndTextContainer>
  );
}

export default Beautiful;
