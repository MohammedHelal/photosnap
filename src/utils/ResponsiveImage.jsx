"use client";

import Image from "next/image";
import { useWindowSize } from "@/custom-hooks/useWindowSize";

//const width = window.innerWidth;

function ResponsiveImage({ mobile, tablet, desktop, classes }) {
  const windowSize = useWindowSize();

  return (
    <Image
      src={
        windowSize.width < 768
          ? mobile
          : windowSize.width < 1024
          ? tablet
          : desktop
      }
      alt="mobile image"
      className={classes}
      priority
    />
  );
}

export default ResponsiveImage;
