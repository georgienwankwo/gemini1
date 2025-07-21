import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ExtensionButton from './components/ExtensionButton'
import Extension from './components/Extension'
import themelight from "./assets/images/icon-sun.svg";
import themeDark from "./assets/images/icon-moon.svg";



export default function App() {
  const [style, setStyle]=  useState('all')
  const[theme, setTheme] = useState(true)
  
  function handleStyle(options){
  setStyle(options)
  }
  function handleTheme(){
    setTheme(!theme)
  }

  return (
    <div className='body--section'>
      <Header changeTheme={handleTheme} changePicture={theme ? themeDark: themelight}/> 
      <div className='extension--section'>
        <h2 className='extension__head'>Extensions List</h2>
        <div className='extension__menu'>
          { <ExtensionButton isSelected={style === 'all'} onSelect={()=>handleStyle('all')}>All</ExtensionButton>}


          <ExtensionButton isSelected={style === 'active'} onSelect={()=>handleStyle("active")}>Active</ExtensionButton>
          <ExtensionButton isSelected={style === 'inactive'} onSelect={()=>handleStyle("inactive")}>Inactive</ExtensionButton>
        </div>
      </div> 
      <Extension/>
    </div>
  )
}

