import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const preloadImages = (srcArray) => {
  return Promise.all(
    srcArray.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        })
    )
  );
};

const Tech = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = technologies.map((tech) => tech.icon);
    preloadImages(imageUrls)
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true)); // Even if some fail, continue
  }, []);

  if (!loaded) {
    return (
      <div className="flex justify-center items-center h-40 w-full">
        <span className="text-white text-lg">Loading technologies...</span>
      </div>
    );
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
