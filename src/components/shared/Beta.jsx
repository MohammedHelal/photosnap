import ArrowButton from "@/utils/ArrowButton";
import ResponsiveImage from "@/utils/ResponsiveImage";

import beta from "@/assets/shared/desktop/bg-beta.jpg";
import betaTablet from "@/assets/shared/tablet/bg-beta.jpg";
import betaMobile from "@/assets/shared/mobile/bg-beta.jpg";

function Beta() {
  return (
    <section className="relative w-full h-[280px]">
      <ResponsiveImage
        mobile={betaMobile}
        tablet={betaTablet}
        desktop={beta}
        classes="absolute top-0 bottom-0 right-0 left-0 -z-10"
      />

      <article className="text-center md:text-left w-full px-[25px] py-[50px] md:flex md:items-center md:justify-between xl:px-[150px] z-10">
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
  );
}

export default Beta;
