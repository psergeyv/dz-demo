import st from './Paragraph.module.css'
import cn from 'classnames';

function Paragraph({cssstyle, text}) { 	
	const clName = cn(st['paragraph'], st[cssstyle]);		
	return (
		<>
			<p className={clName}>{text}</p>
		</>
	)
}

export default Paragraph
