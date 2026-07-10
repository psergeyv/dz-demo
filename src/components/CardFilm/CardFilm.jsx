
import './CardFilm.css'
function CardFilm({title, image, stars}) { 
	
	return (
		<div className="item-film">
			<div className="item-film-image">
				<img src={image} alt={title} />
				<span className='item-film-image-stars'><img src="/star.svg" alt="" /> {stars}</span>
			</div>
			<div className="item-film-title">{title}</div>
			<a href="" className='item-film-favorite'>
				<img src="/like.svg" alt="" />
				<span>В избранное</span>
			</a>
		</div>
	)
}

export default CardFilm
