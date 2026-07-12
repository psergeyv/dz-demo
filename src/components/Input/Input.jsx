import st from './Input.module.css'
import cn from 'classnames';


function Input({className, isValid=true, icon=false, appearence, ref, ...props}) {		
	const clIcon = icon ? cn(st[icon]) : false;
	//console.log(isValid);
	return (
		<>
	    	{clIcon && (
				<span className={clIcon}></span>
			)}

			<input {...props} ref={ref} className={cn(className, st['default-input'], {				
				[st['search-input']]: appearence === 'search',
				[st['login-input']]: appearence === 'login',
				[st['invalid']]: !isValid
			})} />
		</>
	)
};


export default Input
