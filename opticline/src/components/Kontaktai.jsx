import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { ZemeCanvas } from "./canvas";
import { SectionWrapper } from "../section";
import { slideIn } from "../utils/motion";
import StarsCanvas from "./canvas/Stars";

const Kontaktai = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tadas",
          from_email: form.email,
          to_email: "kazkas@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Ačiū. Susisieksiu su jumis greitai.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div name="kontaktai">
    <div className="sm:px-16 px-6 sm:py-16 py-10">
    <div className="bg-color1 relative z-0">
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-200 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Parašyk</p>
        <h3 className={styles.sectionHeadText}>Kontaktai</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4 text-[22px]'>Tavo vardas</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Koks tavo vardas?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[20px]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-[22px]'>Tavo email'as</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Koks tavo email'as?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[20px]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 text-[22px]'>Parašyk savo žinutę</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tavo žinutė...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[20px]'
            />
          </label>

          <button
            type='submit'
            className='bg-color3 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[20px]'
          >
            {loading ? "Siunčiama..." : "Siųsti"}
          </button>
        </form>
      </motion.div>
      <StarsCanvas/>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <ZemeCanvas />
      </motion.div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Kontaktai, "kontaktai");