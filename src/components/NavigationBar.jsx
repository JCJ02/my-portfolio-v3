import Logo from './Logo';
import SocialMediaLinks from './SocialMediaLinks';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import SwitchModeButton from "./SwitchModeButton";

const NavigationBar = ({switchTheme}) => {
  const [menuOpen, setMenuClose] = useState(false);
  
  const menuButton = () => {
    setMenuClose(!menuOpen);
  }
  return (
    <header className="backdrop-blur-sm w-full px-[5%] top-0 fixed">
        <nav className="flex flex-row items-center justify-between max-w-[1280px] m-auto py-[1rem] gap-[3rem]">
            <Logo />
            <button 
              className="flex lg:hidden text-[2rem] md:text-[2.5rem] text-[#222831] dark:text-[#EEEEEE]"
              onClick={menuButton}>
              {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
            </button>
            <ul className="hidden lg:flex flex-row items-center gap-[3rem]">
                <li>
                  <Link 
                    className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] transition ease-in-out duration-200 hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer" 
                    to="about" spy={true} smooth={true} duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] transition ease-in-out duration-200 hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer" 
                    to="skills" spy={true} smooth={true} duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] transition ease-in-out duration-200 hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer" 
                    to="projects" spy={true} smooth={true} duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] transition ease-in-out duration-200 hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer" 
                    to="contact" spy={true} smooth={true} duration={500}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <SocialMediaLinks />
                </li>
            </ul>
            <SwitchModeButton className="hidden lg:flex" darkModeTheme={switchTheme} />
        </nav>

        {/* Mobile Menu Links */}
        {menuOpen ? (
          <ul className="flex lg:hidden flex-col gap-[25px] py-[25px]">
            <li className="pl-[.5rem]">
              <Link 
                className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] cursor-pointer ease-in-out duration-200 hover:text-[#76ABAE] dark:hover:text-[#76ABAE]"
                to="about" spy={true} smooth={true} duration={500}
                onClick={menuButton}
              >
                About
              </Link>
            </li>
            <li className="pl-[.5rem]">
              <Link
                className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] cursor-pointer ease-in-out duration-200 hover:text-[#76ABAE] dark:hover:text-[#76ABAE]"
                to="skills" spy={true} smooth={true} duration={500}
                onClick={menuButton}
              >
                Skills
              </Link>
            </li>
            <li className="pl-[.5rem]">
              <Link 
                className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] cursor-pointer ease-in-out duration-200 hover:text-[#76ABAE] dark:hover:text-[#76ABAE]"
                to="projects" spy={true} smooth={true} duration={500}
                onClick={menuButton}
              >
                Projects
              </Link>
            </li>
            <li className="pl-[.5rem]">
              <Link 
                className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] cursor-pointer ease-in-out duration-200 hover:text-[#76ABAE] dark:hover:text-[#76ABAE]"
                to="contact" spy={true} smooth={true} duration={500}
                onClick={menuButton}
              >
                Contact
              </Link>
            </li>
            <li className="flex flex-row gap-[1rem] pl-[.5rem]">
              <SocialMediaLinks />
              <SwitchModeButton darkModeTheme={switchTheme} />
            </li>
          </ul>
        ) : null }
    </header>
  )
}

export default NavigationBar