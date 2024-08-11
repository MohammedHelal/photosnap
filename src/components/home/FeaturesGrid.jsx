import responsive from "@/assets/features/desktop/responsive.svg";
import noLimit from "@/assets/features/desktop/no-limit.svg";
import embed from "@/assets/features/desktop/embed.svg";

import Feature from "../shared/Feature";

function FeaturesGrid() {
  return (
    <section className="my-[100px] mx-auto lg:grid lg:grid-cols-3 lg:w-5/6">
      <Feature
        image={responsive}
        heading="100% Responsive"
        para="No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen."
      />
      <Feature
        image={noLimit}
        heading="No Photo Upload Limit"
        para="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
      />
      <Feature
        image={embed}
        heading="Available to Embed"
        para="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
      />
    </section>
  );
}

export default FeaturesGrid;
