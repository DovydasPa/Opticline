import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component) =>
  function Section() {
    return (
      <AnimatePresence>
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={` sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
      </AnimatePresence>
    );
  };

export default SectionWrapper;
