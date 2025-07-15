import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import Feedbacks from "./Feedbacks";

const TimelineCard = ({ item, isEducation }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={item.date}
    iconStyle={{ background: item.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={item.icon}
          alt={isEducation ? item.institution : item.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{item.title}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >
        {isEducation ? item.institution : item.company_name}
      </p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {item.points.map((point, index) => (
        <li
          key={`timeline-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const ExperienceEducation = () => {
  const [showEducation, setShowEducation] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex justify-center gap-6 mb-4">
          <button
            className={`px-6 py-2 rounded font-bold transition-colors ${!showEducation ? "bg-indigo-600 text-white" : "bg-black-200 text-white"}`}
            onClick={() => setShowEducation(false)}
          >
            Experience
          </button>
          <button
            className={`px-6 py-2 rounded font-bold transition-colors ${showEducation ? "bg-indigo-600 text-white" : "bg-black-200 text-white"}`}
            onClick={() => setShowEducation(true)}
          >
            Education
          </button>
        </div>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {showEducation ? "Education Journey" : "Work "}
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {(showEducation ? education : experiences).map((item, index) => (
            <TimelineCard
              key={`timeline-${index}`}
              item={item}
              isEducation={showEducation}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export { Feedbacks };
export default SectionWrapper(ExperienceEducation, "journey");
