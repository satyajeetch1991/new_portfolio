import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements, certifications, conferences } from "../constants";

const InfoCard = ({ index, title, description, year, link, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    {image && (
      <img
        src={image}
        alt={title}
        className='w-16 h-16 rounded-xl object-cover mb-4 mx-auto'
      />
    )}
    <div className='mt-1'>
      <h3 className='text-white font-bold text-[20px] text-center'>{title}</h3>
      <p className='text-secondary text-[15px] mt-2 text-center'>{description}</p>
      <div className='mt-4 flex flex-col items-center'>
        {year && <span className='text-xs text-gray-400 mb-1'>{year}</span>}
        {link && (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 underline font-medium text-xs'
          >
            View
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const InfoSection = ({ title, items }) => (
  <div className={`mt-12 bg-black-100 rounded-[20px] w-full max-w-5xl mx-auto`}>
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText + " text-center"}>{title}</h2>
      </motion.div>
    </div>
    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
      {items.map((item, index) => (
        <InfoCard key={item.title + index} index={index} {...item} />
      ))}
    </div>
  </div>
);

const AchievementsCertificationsConferences = () => (
  <>
    <InfoSection title="Achievements" items={achievements} />
    <InfoSection title="Certifications" items={certifications} />
    <InfoSection title="Conferences" items={conferences} />
  </>
);

export default SectionWrapper(AchievementsCertificationsConferences, "");
