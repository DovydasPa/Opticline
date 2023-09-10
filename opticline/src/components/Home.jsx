import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { AkiniuCanvas } from "./canvas";
import {HiArrowNarrowRight} from 'react-icons/hi'
import Navbar from "./Navbar";
import StarsCanvas from "./canvas/Stars";
import About from "./Paslaugos";
import Nuopelnai from "./Nuopelnai";
import { BackToTopButton, Kontaktai, Parduotuves } from ".";

import React, { useState } from "react";
import { Link } from 'react-scroll';

const Home = () => {
  const [toliau, setToliau] = useState(false);
  const handleClick = () => { setToliau(!toliau)};
  return (
      <div name='home'>
      <Navbar/>
      <div className="bg-color1 relative z-0">
      
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex lg:pt-14 pt-8 justify-center items-center mt-0'>  
          <AnimatePresence>
            <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className='w-6 h-6 rounded-full bg-color2 mb-1'
              />
          </AnimatePresence>   
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-[#FB9038]`}>
            <span className='text-color2'>OptiCline</span>
            </h1>
  
          </div>
        </div>
        <StarsCanvas/>
        <AkiniuCanvas />

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <div className=" flex items-center justify-center">
          <Link  onClick={handleClick}  to='paslaugos'>

            <button className='text-white bg-gray-600 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>

                Toliau <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>

            </button>
          </Link>
        </div>
        </div>

      
      </section>

      <div className="bg-color1">
      <About/>
      </div>

      <div className="bg-color1">
      <Nuopelnai/>
      </div>

      <div className="bg-color1">
      <Kontaktai/>
      </div>

      <div className="bg-color1">
      <Parduotuves/>
      </div>

      <div>
      <BackToTopButton/>
      </div>

      </div>
      </div>
  );
};

export default Home;