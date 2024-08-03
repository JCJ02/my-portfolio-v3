import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <ul className="flex flex-row items-center gap-[.5rem]">
        <li>
          <a 
            className="text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] transition ease-in-out duration-150 hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer" 
            href="https://www.facebook.com/akosijcjacobe" 
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a 
            className="text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] transition ease-in-out duration-150 hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer" 
            href="https://www.linkedin.com/in/jcj02/" 
            target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a 
            className="text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] transition ease-in-out duration-150 hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer" 
            href="https://github.com/JCJ02" 
            target="_blank">
            <FaGithub />
          </a>
        </li>
    </ul>
  )
}

export default SocialMediaLinks
