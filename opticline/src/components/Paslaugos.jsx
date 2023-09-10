import React from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence  } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../section";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <AnimatePresence>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r from-blue-500 to-pink-500  p-[1px] border- rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 50,
          scale: 1,
          speed: 500,
        }}
        className='bg-color1 rounded-[20px] py-5 px-12 min-h-[80px] flex justify-evenly items-center flex-col'
      >

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </AnimatePresence>
  </Tilt>
);

const Paslaugos = () => {
  return (
    <div name='paslaugos'>
    <div className="sm:px-16 px-6 sm:py-16 py-10">
      <motion.div variants={textVariant()}>
        
        <h2 className={styles.sectionHeadText}>Paslaugos:</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]'
      >
        Štai mūsų siūlomos paslaugos
      </motion.p>

      <div className=' mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default SectionWrapper(Paslaugos, "paslaugos");