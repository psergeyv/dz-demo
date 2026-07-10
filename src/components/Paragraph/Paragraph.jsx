import st from './Paragraph.module.css'
import cn from 'classnames';

function Paragraph({cssstyle, text}) { 
	console.log(cssstyle)
	const clName = cn(st['paragraph'], st[cssstyle]);
	
	console.log(clName)
	return (
		<>
			<p className={clName}>{text}</p>
		</>
	)
}

export default Paragraph
