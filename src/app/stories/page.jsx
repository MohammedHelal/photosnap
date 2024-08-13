import moon from "@/assets/stories/desktop/moon-of-appalacia.jpg";
import moonMobile from "@/assets/stories/mobile/moon-of-appalacia.jpg";
import PhotoStory from "@/components/shared/PhotoStory";
import { images } from "@/utils/ImageObject";
import ImageAndTextContainer from "@/components/shared/ImageAndTextContainer";
import ArrowButton from "@/utils/ArrowButton";

export default function Page() {
  return (
    <>
      <ImageAndTextContainer
        image={{
          mobile: moonMobile,
          tablet: moon,
          desktop: moon,
        }}
        classes={{
          img: "object-cover object-center md:absolute md:top-0 md:bottom-0 md:right-0 md:left-0 md:h-[500px] xl:h-[650px] w-full md:-z-10 ",
          article:
            "bg-black md:bg-inherit text-white md:h-[500px] xl:h-[650px]",
        }}
        hideBar={true}
      >
        <h4 className="uppercase z-20">Last month&apos;s featured story</h4>
        <h1 className="uppercase z-20">Hazy full moon of Appalachia</h1>
        <div className="flex items-center">
          <p className="text-slate-400 mr-[10px] z-20">March 2nd 2020</p>
          <h4 className="z-20">by John Appleseed</h4>
        </div>
        <p className="text-slate-400 z-20">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called &quot;mountains,&quot; especially in
          eastern Kentucky and West Virginia, and while the ridges are not high,
          the terrain is extremely rugged.
        </p>
        <ArrowButton
          classes="text-white mt-[15px] z-20"
          filter={true}
          text="get an invite"
        />
      </ImageAndTextContainer>
      <div className="w-full fancy-background">
        <section className="max-w-[1440px] mx-auto flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-4">
          {images.map((image) => {
            return (
              <>
                <PhotoStory
                  image={image.images}
                  title={image.title}
                  by={image.by}
                  date={image.date}
                />
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}
