import React from "react";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <>
      <Link to="home" spy={true} smooth={true} offset={-25} duration={500}>
        <span className="flex flex-row font-mono font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#222831] dark:text-[#EEEEEE] cursor-pointer hover:scale-110 duration-150">
          <h1 className="text-[#76ABAE]">&lt;</h1>
          JC
          <h1 className="text-[#76ABAE]">/&gt;</h1>
        </span>
      </Link>
    </>
  )
}

export default Logo