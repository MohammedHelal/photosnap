import ImageAndTextContainer from "@/components/shared/ImageAndTextContainer";
import Beta from "@/components/shared/Beta";
import PaymentContainer from "@/components/pricing/PaymentContainer";
import Compare from "@/components/pricing/Compare";

//importing Hero images...
import hero from "@/assets/pricing/desktop/hero.jpg";
import heroTablet from "@/assets/pricing/tablet/hero.jpg";
import heroMobile from "@/assets/pricing/mobile/hero.jpg";

export default function Page() {
  return (
    <>
      <ImageAndTextContainer
        image={{
          mobile: heroMobile,
          tablet: heroTablet,
          desktop: hero,
        }}
        classes={{
          img: "w-full md:order-2",
          article: "bg-black text-white order-1",
        }}
      >
        <h1 className="uppercase">Pricing</h1>
        <p className="text-slate-400">
          Create your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </ImageAndTextContainer>
      <PaymentContainer />
      <Compare />
      <Beta />
    </>
  );
}
