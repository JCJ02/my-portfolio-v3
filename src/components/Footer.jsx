import React from 'react';
// bg-[#222831] dark:bg-[#EEEEEE]
// text-[#EEEEEE] dark:text-[#222831]
const Footer = () => {
  return (
    <footer className="bg-[#76ABAE] flex flex-col items-center w-full py-[24px]">
      <p className="font-mono font-bold text-md md:text-lg lg:text-xl text-[#EEEEEE]">John Carlo P. Jacobe</p>
      <p className="font-inter text-sm md:text-md text-[#EEEEEE]">&copy; 2024 All rights reserved.</p>
    </footer>
  )
}

export default Footer