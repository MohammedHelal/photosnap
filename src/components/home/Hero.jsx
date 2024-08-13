//Importing images
import createMobile from "@/assets/home/mobile/create-and-share.jpg";
import createTablet from "@/assets/home/tablet/create-and-share.jpg";
import createDesktop from "@/assets/home/desktop/create-and-share.jpg";
//importing components
import ImageAndTextContainer from "../shared/ImageAndTextContainer";
import ArrowButton from "@/utils/ArrowButton";

function Hero() {
  return (
    <ImageAndTextContainer
      image={{
        mobile: createMobile,
        tablet: createTablet,
        desktop: createDesktop,
      }}
      classes={{
        img: "w-full md:order-2",
        article: "bg-black text-white order-1",
      }}
    >
      <h1 className="uppercase">Create and share your photo Stories</h1>
      <p className="text-slate-400">
        Photosnap is a platform for photographers and visual storytellers. We
        make it easy to share photos, tell stories and connect with others.
      </p>
      <ArrowButton
        classes="text-white mt-[15px]"
        filter={true}
        text="get an invite"
      />
    </ImageAndTextContainer>
  );
}

export default Hero;
