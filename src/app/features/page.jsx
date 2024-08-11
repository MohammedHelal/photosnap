import ImageAndTextContainer from "@/components/shared/ImageAndTextContainer";
import Feature from "@/components/shared/Feature";

import hero from "@/assets/features/desktop/hero.jpg";
import heroTablet from "@/assets/features/tablet/hero.jpg";
import heroMobile from "@/assets/features/mobile/hero.jpg";

import beta from "@/assets/shared/desktop/bg-beta.jpg";
import betaTablet from "@/assets/shared/tablet/bg-beta.jpg";
import betaMobile from "@/assets/shared/mobile/bg-beta.jpg";

import { features } from "@/utils/FeaturesObject";
import ResponsiveImage from "@/utils/ResponsiveImage";
import ArrowButton from "@/utils/ArrowButton";

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
        <h1 className="uppercase">Features</h1>
        <p className="text-slate-500">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </ImageAndTextContainer>
      <section className="my-[100px] mx-auto md:grid md:grid-cols-2 xl:grid-cols-3 lg:w-5/6">
        {features.map((feature, index) => (
          <Feature
            key={index}
            image={feature.image}
            heading={feature.title}
            para={feature.para}
          />
        ))}
      </section>
      <section className="relative w-full h-[280px]">
        <ResponsiveImage
          mobile={betaMobile}
          tablet={betaTablet}
          desktop={beta}
          classes="absolute top-0 bottom-0 right-0 left-0 -z-10"
        />
        <article className="w-full px-[25px] py-[50px] md:flex md:items-center md:justify-between xl:px-[150px] z-10">
          <h1 className="max-w-[400px] uppercase z-10 text-white">
            We&apos;re in beta. Get your invite today!
          </h1>
          <ArrowButton
            classes="z-10 mt-[15px] text-white"
            filter={true}
            text="get an invite"
          />
        </article>
      </section>
    </>
  );
}

/*
        <ResponsiveImage
          mobile={betaMobile}
          tablet={betaTablet}
          desktop={beta}
          classes="absolute top-0 bottom-0 right-0 left-0 z-0"
        />
*/
