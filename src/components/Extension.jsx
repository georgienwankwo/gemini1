import { ThemeContext } from "../context/themeContext"
import lists from "../data.json"
import { useContext, useState } from "react"

export default function Extension(){
const {themeMode} = useContext(ThemeContext)
const[toogle, setToggle]= useState(true)

function handleDelete(){
    
}
    return (
        <div className="extension">
            {lists.map((item)=>{
                return(
                    <div className={`extension--card ${themeMode === 'light' ? 'light-theme-mode': 'dark-theme-mode'}`} key={item.id}>
                        <div className="extension--card__despcontainer" >
                                <img src={item.logo} alt="" />
                            <div className="extension--card__desp">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <div className="extension--card__buttonsection">
                            <button onClick={handleDelete} className="extension--card__button">remove</button>
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}