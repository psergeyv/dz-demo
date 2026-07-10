import st from './Head.module.css'
import cn from 'classnames';
function Head({title}) { 
	const clName = cn(st['head'], st['h1']);
	return (
		<>
			<h1 className={clName}>{title}</h1>
		</>
	)
}

export default Head
