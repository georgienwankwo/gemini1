import headerLogo from "../assets/images/logo.svg";
import themelight from "../assets/images/icon-sun.svg";
import themeDark from "../assets/images/icon-moon.svg";
import { useState } from "react";
// import "../App.css";


export default function Header({changeTheme, changePicture}){
    // 


    return (<nav className="navbar--section">
        <div>
            <img src={headerLogo} alt="" />
            
        </div>
        <button onClick={changeTheme} className="navbar__theme--button"><img src={changePicture} alt="" /></button>
    </nav>)
}