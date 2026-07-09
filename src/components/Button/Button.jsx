import './Button.css'

function Button({title, type: Typebtn }) { 
	return (
		<>
			<button className='button search' type={Typebtn ? Typebtn : 'button'}>{title}</button>
		</>
	)
}

export default Button
