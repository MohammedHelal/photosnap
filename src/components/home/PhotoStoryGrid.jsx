//importing images
import mountainsMobile from "@/assets/stories/mobile/mountains.jpg";
import mountainsDesktop from "@/assets/stories/desktop/mountains.jpg";

import cityscapesMobile from "@/assets/stories/mobile/cityscapes.jpg";
import cityscapesDesktop from "@/assets/stories/desktop/cityscapes.jpg";

import voyageMobile from "@/assets/stories/mobile/18-days-voyage.jpg";
import voyageDesktop from "@/assets/stories/desktop/18-days-voyage.jpg";

import architecturalsMobile from "@/assets/stories/mobile/architecturals.jpg";
import architecturalsDesktop from "@/assets/stories/desktop/architecturals.jpg";

//importing components
import PhotoStory from "../shared/PhotoStory";

function PhotoStoryGrid() {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4">
      <PhotoStory
        image={{
          mobile: mountainsMobile,
          tablet: mountainsDesktop,
          desktop: mountainsDesktop,
        }}
        title="The Mountains"
        by="by John Appleseed"
      />
      <PhotoStory
        image={{
          mobile: cityscapesMobile,
          tablet: cityscapesDesktop,
          desktop: cityscapesDesktop,
        }}
        title="Sunset Cityscapes"
        by="by Benjamin Cruz"
      />
      <PhotoStory
        image={{
          mobile: voyageMobile,
          tablet: voyageDesktop,
          desktop: voyageDesktop,
        }}
        title="18 Days Voyage"
        by="by Alexei Borodin"
      />
      <PhotoStory
        image={{
          mobile: architecturalsMobile,
          tablet: architecturalsDesktop,
          desktop: architecturalsDesktop,
        }}
        title="Architecturals"
        by="by Samantha Brooke"
      />
    </section>
  );
}

export default PhotoStoryGrid;
