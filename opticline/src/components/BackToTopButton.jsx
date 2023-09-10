
import { useEffect, useState } from 'react'
import {BiArrowFromBottom} from 'react-icons/bi'

const BackToTopButton = () => {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div>
      {BackToTopButton && (
        <button className='fixed bottom-[40px] h-[44px] w-[44px] right-[40px] items-center flex justify-center hover:bg-gradient-to-r from-cyan-500 to-pink-500 hover:border-sky-100 border-2' onClick={scrollUp}>
        <BiArrowFromBottom/>
        </button>
      )}
    </div>
  )
}

export default BackToTopButton;