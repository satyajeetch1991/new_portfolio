import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const TiltCard = ({ name, image }) => {
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
        <img
          src={image}
          alt={name}
          className="w-full h-44 sm:h-52 md:h-56 object-cover rounded-lg shadow-lg border border-gray-200 bg-white aspect-video"
          style={{ background: '#fff' }}
        />
      )}
      <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800 text-center">
        {name}
      </h3>
    </div>
  );
};

const AchievementsSection = () => (
  <div className={`mt-12 bg-black-100 rounded-[20px] w-full max-w-5xl mx-auto`}>
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText + " text-center"}>Achievements</h2>
      </motion.div>
    </div>
    <div className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 gap-7`}>
      {achievements.map((item, index) => (
        <TiltCard key={item.name + index} name={item.name} image={item.image} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(AchievementsSection, "achievements");
