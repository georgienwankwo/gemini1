export default function ExtensionButton({children, onSelect, isSelected}){
return (<button className={`extension__button ${isSelected ? "active":''}`} onClick={onSelect}>{children}</button>)
}