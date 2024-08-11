import ImageAndTextContainer from "@/components/shared/ImageAndTextContainer";

import hero from "@/assets/pricing/desktop/hero.jpg";
import heroTablet from "@/assets/pricing/tablet/hero.jpg";
import heroMobile from "@/assets/pricing/mobile/hero.jpg";

export default function Page() {
  return (
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
      <p className="text-slate-500">
        Create a your stories, Photosnap is a platform for photographers and
        visual storytellers. It’s the simple way to create and share your
        photos.
      </p>
    </ImageAndTextContainer>
  );
}
