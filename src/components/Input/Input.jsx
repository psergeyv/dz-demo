import st from './Input.module.css'
import cn from 'classnames';

function Input({ name, icon: Icon, type,placeholder, style: Style, }) { 
	
	const clName = Style ? cn(st[Style], st['default-input']) : st['default-input'];
	const clIcon = Icon ? cn(st[Icon]) : false;
	
	return (
		<>
			{clIcon && (
				<span className={clIcon}></span>
			)}
			<input name={name} type={type} placeholder={placeholder} 
				className={clName}/>
		</>
	)
}

export default Input
