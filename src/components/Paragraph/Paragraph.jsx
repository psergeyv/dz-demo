import './Paragraph.css'
function Paragraph({cssstyle, text}) { 
	return (
		<>
			<p className={cssstyle}>{text}</p>
		</>
	)
}

export default Paragraph
