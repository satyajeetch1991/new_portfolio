
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

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
      className="rounded-2xl shadow-2xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer w-full max-w-3xl h-[520px] bg-white flex flex-col items-center p-8 border border-gray-200 hover:shadow-3xl"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
    >
      {image && (
        <div className="w-full h-[320px] flex items-center justify-center mb-6 bg-gray-50 rounded-xl border">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
            style={{ maxHeight: "320px" }}
          />
        </div>
      )}
      <h3 className="text-2xl font-extrabold text-gray-800 text-center mb-2">
        {name}
      </h3>
      {description && (
        <p className="text-base text-gray-600 text-center mb-2 px-4">
          {description}
        </p>
      )}
    </div>
  );
};

const CertificatesSection = () => (
  <div className="mt-12 bg-black-100 rounded-[20px] w-full max-w-7xl mx-auto">
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText + " text-center"}>Certificates</h2>
      </motion.div>
    </div>
    <div className="-mt-20 pb-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full justify-items-center">
      {certifications.map((item, index) => (
        <TiltCard
          key={item.name + index}
          name={item.name}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

export default SectionWrapper(CertificatesSection, "certificates");
