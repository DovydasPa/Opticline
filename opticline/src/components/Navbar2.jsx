import React, { useEffect, useState } from "react";
import { logo } from "../assets";

import { Link } from 'react-scroll';


const Navbar2 = () => {
  const [nav, setNav] = useState(false);
  // jei false bus true, jei true bus false

  return (
    <nav className={` relative:z-0 w-full flex items-center py-5 fixed top-0 z-20 bg-color1 bg-opacity-95 sm:px-16 px-6`}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
    
        <Link className='flex items-center gap-2 ' to='home' smooth={true} duration={500}>   

        <img src={logo} alt='logo' className='w-28 object-contain' />
         
       </Link>
    
      <ul className='flex '>

        <li>  
           <a className='border-slate-100 p-[5px] hover:text-color3 hover:border-color3' href='/home'>X</a>   
        </li>

      </ul>
    </div>

  </nav>
  )
}

export default Navbar2