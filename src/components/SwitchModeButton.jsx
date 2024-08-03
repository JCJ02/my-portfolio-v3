import React, { useState } from 'react';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const SwitchModeButton = ({darkModeTheme, className}) => {
    const [theme, setTheme] = useState(false);
    const switchMode = () => {
      setTheme(!theme);
      darkModeTheme();
    }
  return (
    <div className={className}>
      <button 
        className="bg-[#222831] text-[#EEEEEE] dark:bg-[#EEEEEE] dark:text-[#222831] text-[1.5rem] p-[.5rem] rounded-full"
        onClick={switchMode}
      >
        {theme ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  )
}

export default SwitchModeButton