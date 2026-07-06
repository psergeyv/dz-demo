import './Paragraph.css'
function Paragraph({cssstyle}) { 
	return (
		<>
			<p className='paragraph {cssstyle}'>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</p>
		</>
	)
}

export default Paragraph
