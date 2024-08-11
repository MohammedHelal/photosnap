//importing images
import designMobile from "@/assets/home/mobile/designed-for-everyone.jpg";
import designTablet from "@/assets/home/tablet/designed-for-everyone.jpg";
import designDesktop from "@/assets/home/desktop/designed-for-everyone.jpg";
//importing components
import ImageAndTextContainer from "../shared/ImageAndTextContainer";
import ArrowButton from "@/utils/ArrowButton";

function Design() {
  return (
    <ImageAndTextContainer
      image={{
        mobile: designMobile,
        tablet: designTablet,
        desktop: designDesktop,
      }}
      classes={{
        img: "w-full md:order-2",
        article: "order-1",
      }}
      hideBar={true}
    >
      <h1 className="uppercase">Beautiful stories every time</h1>
      <p className="text-slate-500">
        We provide design templates to ensure your stories look terrific. Easily
        add photos, text, embed maps and media from other networks. Then share
        your story with everyone.
      </p>
      <ArrowButton classes="text-black mt-[15px]" text="View the stories" />
    </ImageAndTextContainer>
  );
}

export default Design;
