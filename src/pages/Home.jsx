import React, { useState } from 'react';
import pfp from '../assets/pfp.png';

const Home = () => {
  return (
    <div className="bg-[#EEEEEE] dark:bg-[#222831] flex justify-center items-center h-screen w-full transition-colors duration-200" id="home">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 xl:gap-24 max-w-[1280px] px-[5%] 2xl:px-0">
        <img className="h-[144px] w-[144px] md:h-[360px] md:w-[360px] xl:h-[480px] xl:w-[480px] rounded-full hover:border-4 lg:hover:border-8 border-[#222831] dark:border-[#EEEEEE] ease-in-out duration-150" src={pfp}></img>
        <div className="flex flex-col items-center gap-4 lg:gap-5">
          <h1 className="font-mono text-[#76ABAE] text-[24px] md:text-[32px] xl:text-[48px] text-center">Frontend Developer</h1>
          <p className="font-mono text-[#222831] dark:text-[#EEEEEE] text-[14px] md:text-xl xl:text-2xl text-justify">I specialize in creating user-friendly and visually appealing web interfaces using <b className="text-[#76ABAE]">React JS</b> and <b className="text-[#76ABAE]">Tailwind CSS</b>. My focus is on optimizing performance and ensuring a seamless user experience.</p>
          <button className="bg-[#76ABAE] font-mono text-[1rem] lg:text-[1.5rem] text-[#EEEEEE] px-[48px] py-[6px] rounded-full hover:scale-110 duration-150">Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Home