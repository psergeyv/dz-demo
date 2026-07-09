import './Input.css'
function Input({ name, icon: Icon, type,placeholder, style: Style, }) { 
	return (
		<>
			{Icon && (
				<span className={Icon}></span>
			)}
			<input name={name} type={type} placeholder={placeholder} 
				className={Style ? Style : 'default-input'}/>
		</>
	)
}

export default Input
