import st from './Button.module.css'
import cn from 'classnames';
import { forwardRef } from "react";

const Button = forwardRef(function Button({className, title, appearence, ...props}, ref) { 	

	return (
		<>
			<button {...props} ref={ref} className={cn(className, st['button'], {				
				[st['login']]: appearence === 'login',
				[st['search']]: appearence === 'search',				
			})}>{title}</button>
		</>
	)
});

export default Button
