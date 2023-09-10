import React, { useState } from "react";
import { logo } from "../assets";
import {FaBars, FaTimes, FaFacebook} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  // jei false bus true, jei true bus false
  const handleClick = () => { setNav(!nav)};

  return (
      <nav className={` relative:z-0 w-full flex items-center py-5 fixed top-0 z-20 bg-color1 bg-opacity-95 sm:px-16 px-6`}>
        <div className='w-full flex justify-between  items-center max-w-7xl mx-auto text-[17px]'>

            <Link className='flex items-center gap-2 ' to='home' smooth={true} duration={500}>   

            <img src={logo} alt='logo' className='w-28 object-contain' />

            <p className='text-color2 text-[18px] font-bold cursor-pointer flex hover:text-color3'>
              Optikos Salonas
            </p>
            
          </Link>
        
        {/* menu */}
          <ul className='hidden md:flex items-center justify-center '>

            <li>
                <Link className='hover:text-color3 ' to='paslaugos' smooth={true} duration={100}>
                Paslaugos
              </Link>   
            </li>

            <li>
              <Link className='hover:text-color3 ' to='nuopelnai' smooth={true} duration={100}>
                Nuopelnai
              </Link>  
            </li>

            <li>
              <Link className='hover:text-color3 ' to='kontaktai' smooth={true} duration={100}>
                Kontaktai
              </Link> 
            </li>
            <li>
              <a className='hover:text-color3 ' href='/atsiliepimai'>|Atsiliepimai</a>
            </li>
          </ul>

        {/* z-index pamazina stack orderi */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile meniu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>

          <li className='py-6 text-4xl'>
            <Link className='hover:text-color3' onClick={handleClick} to='paslaugos' smooth={true} duration={100}>
              Paslaugos
            </Link>  
          </li>

          <li className='py-6 text-4xl'>
              <Link className='hover:text-color3' onClick={handleClick}  to='nuopelnai' smooth={true} duration={100}>
                Pasiekimai
              </Link> 
          </li>

          <li className='py-6 text-4xl'>
            <Link className='hover:text-color3' onClick={handleClick}  to='kontaktai' smooth={true} duration={100}>
              Kontaktai
            </Link> 
          </li>

          <li className='py-6 text-4xl'>
          <a className='hover:text-color3' onClick={handleClick}  href='/atsiliepimai'>| Atsiliepimai</a>
          </li>

        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

          <ul>
          {/* Facebook */}
            <li className='w-[160px] h-[60px] flex justify-between items-center -ml-[100px]  hover:-ml-[10px] duration-300 bg-blue-700'>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href='https://www.facebook.com/profile.php?id=100027214132685'>
                Facebook <FaFacebook size={30}/>
              </a>
            </li>

            {/* Email */}
            <li className='w-[160px] h-[60px] flex justify-between items-center -ml-[100px] hover:-ml-[10px] duration-300 bg-red-700'>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href='https://www.google.com/gmail'>
                Email <HiMail size={30}/>
              </a>
            </li>

          </ul>
        </div>        
        </div>


      </nav>
  );
};

export default Navbar;