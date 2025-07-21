import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

export default function ExtensionButton({children, onSelect, isSelected}){
    const {themeMode} = useContext(ThemeContext)
return (<button className={`extension__button ${isSelected ? "active":'non-active'} ${themeMode === 'light' ? 'light-theme-mode': 'dark-theme-mode'}`} onClick={onSelect}>{children}</button>)
}