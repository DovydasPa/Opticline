import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../index.css';
import { zmones } from '../constants';
import Navbar2 from './Navbar2';

function Atsiliepimai() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      
    }));
  };

  return (
    <div className={`relative w-full h-screen mx-auto bg-color1`}>
    <div className="sm:px-16 px-6 sm:py-16 py-10">
    <Navbar2/>
      <div className="Page">
    
      <Slider {...settings}>
        {zmones.map((item) => (
          <div className="kortele bg-gradient-to-r from-blue-500 to-pink-500 bg-opacity-20 ">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.komentaras] === item.komentaras
                    ? defaultImage.linkDefault
                    : item.image
                }
                onError={handleErrorImage}
              />
              <h1 className='leading-5'>{item.komentaras}</h1>
            </div>
            <div className='card-bottom'>
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div></div>
    </div>
  );
}

export default Atsiliepimai;