const TabButton = (props) => {
   return <li><button className={props.isSelected ? "active":undefined} onClick={props.onSelect}>{props.label}</button></li>;
}

export default TabButton;