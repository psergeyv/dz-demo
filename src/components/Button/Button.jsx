import st from './Button.module.css'
import cn from 'classnames';

function Button({title, type: Typebtn }) { 
	const clName = cn(st['button'], st['search']);

	return (
		<>
			<button className={clName} type={Typebtn ? Typebtn : 'button'}>{title}</button>
		</>
	)
}

export default Button
