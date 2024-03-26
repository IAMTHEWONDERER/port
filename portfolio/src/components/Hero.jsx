import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';
const Hero = () => {
  return (
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#CE0000]'/>
            <div className="w-1 sm:h-80 h40 red-gradient"/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi there, I'm <span className='text-[#CE0000]'> Oussama</span> </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop fullstack web applications using MERN stack, UI/UX amateur designer and is a huge enthusiast of interactive 3D designs using ThreeJS </p>
          </div>
        </div>
        <ComputersCanvas/>
      </section>
    )
}

export default Hero