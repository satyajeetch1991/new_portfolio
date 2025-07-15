
import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications, achievements } from "../constants";

const TiltCard = ({ name, image, description }) => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const threshold = 12;
  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };
  return (
    <div
      className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white flex flex-col items-center"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
    >
      {image && (
        <div className="w-full aspect-[4/3] flex items-center justify-center bg-gray-50 rounded-lg border mb-3">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-2"
          />
        </div>
      )}
      <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800 text-center">
        {name}
      </h3>
      {description && (
        <p className="text-sm px-4 pb-6 text-gray-600 w-5/6 text-center">{description}</p>
      )}
    </div>
  );
};


const CertificatesAchievements = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const data = showAchievements ? achievements : certifications;
  const sectionTitle = showAchievements ? "Achievements" : "Certificates";
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] w-full max-w-5xl mx-auto`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}>
        <motion.div variants={textVariant()}>
          <div className="flex justify-center gap-6 mb-4">
            <button
              type="button"
              className={`px-6 py-2 rounded font-bold transition-colors focus:outline-none ${!showAchievements ? "bg-indigo-600 text-white" : "bg-black-200 text-white"}`}
              onClick={() => setShowAchievements(false)}
              aria-pressed={!showAchievements}
            >
              Certificates
            </button>
            <button
              type="button"
              className={`px-6 py-2 rounded font-bold transition-colors focus:outline-none ${showAchievements ? "bg-indigo-600 text-white" : "bg-black-200 text-white"}`}
              onClick={() => setShowAchievements(true)}
              aria-pressed={showAchievements}
            >
              Achievements
            </button>
          </div>
          <h2 className={styles.sectionHeadText + " text-center"}>{sectionTitle}</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 gap-7`}>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <TiltCard key={item.name + index} name={item.name} image={item.image} description={item.description} />
          ))
        ) : (
          <p className="text-gray-400 text-center w-full py-8">No {sectionTitle.toLowerCase()} to display.</p>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(CertificatesAchievements, "");
