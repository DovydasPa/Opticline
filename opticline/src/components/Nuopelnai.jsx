import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion,  AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { nuopelnai } from "../constants";
import { SectionWrapper } from "../section";
import { textVariant } from "../utils/motion";

const NuopelnaiCard = ({ nuopelnai }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "color1",
      }}
      contentArrowStyle={{ borderRight: "9px solid " }}
      
      iconStyle={{ background: nuopelnai.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          
        </div>
      }
    >
      <div>
      </div>
      <h3 className='text-white text-[26px] font-bold'>{nuopelnai.title}</h3>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {nuopelnai.points.map((point, index) => (
          <li
            key={`nuopelnai-point-${index}`}
            className='text-white-100 text-[18px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Nuopelnai = () => {
  return (
    <div name="nuopelnai">
    <div className="sm:px-16 px-6 sm:py-16 py-10">
    <AnimatePresence>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Pasiekimai:
        </h2>
      </motion.div>
      </AnimatePresence>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {nuopelnai.map((nuopelnai, index) => (
            <NuopelnaiCard
              key={`experience-${index}`}
              nuopelnai={nuopelnai}
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Nuopelnai, "nuopelnai");