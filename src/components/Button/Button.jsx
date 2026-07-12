import st from './Button.module.css'
import cn from 'classnames';


function Button({className, title, appearence, ref, ...props}) { 	

	return (
		<>
			<button {...props} ref={ref} className={cn(className, st['button'], {				
				[st['login']]: appearence === 'login',
				[st['search']]: appearence === 'search',				
			})}>{title}</button>
		</>
	);
}

export default Button
