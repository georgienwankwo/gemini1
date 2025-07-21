import headerLogo from "../assets/images/logo.svg";
import themelight from "../assets/images/icon-sun.svg";
import themeDark from "../assets/images/icon-moon.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";
// import "../App.css";

function ButtonComponent(){
    const {themeMode, handleTheme} = useContext(ThemeContext)
    return  <button onClick={handleTheme} className="navbar__theme--button"><img src={themeMode === 'dark' ? themeDark: themelight} alt="" /></button>
}


export default function Header(){
    const {themeMode, handleTheme} = useContext(ThemeContext)
    // 
    return (<nav className={`navbar--section ${themeMode === 'light' ? '': 'navbar--section-dark-mode'}`}>
        <div>
            <img src={headerLogo} alt="" />
        </div>
        <ButtonComponent />
    </nav>)
}