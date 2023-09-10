import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../section";
import { optikos } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ optikos }) => {
  return (
    <motion.div variants={fadeIn()}>
      <Tilt
        options={{
          max: 50,
          scale: 1,
          speed: 500,
        }}
        className='bg-color3 bg-opacity-20 p-5 rounded-2xl sm:w-[460px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={optikos.image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
        {optikos.points.map((point, index) => (
          <li
            key={`optikos-point-${index}`}
            className='text-color2 text-[20px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      </Tilt>
    </motion.div>
  );
};

const Parduotuves = () => {
  return (
    <div name='parduotuves'>
    <div className="sm:px-16 px-6 sm:py-16 py-10">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Optikos:</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {optikos.map((optikos, index) => (
          <ProjectCard  key={`optikos-${index}`}
          optikos={optikos} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default SectionWrapper(Parduotuves, "parduotuves");