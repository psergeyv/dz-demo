
import st from './CardFilm.module.css'
import cn from 'classnames';

function CardFilm({title, image, stars}) { 
	const clName = cn(st['item-film-favorite']);
	return (
		<div className={st['item-film']}>
			<div className={st['item-film-image']}>
				<img src={image} alt={title} />
				<span className={st['item-film-image-stars']}><img src="/star.svg" alt="" /> {stars}</span>
			</div>
			<div className={st['item-film-title']}>{title}</div>
			<a href="" className={clName}>
				<img src="/like.svg" alt="" />
				<span>В избранное</span>
			</a>
		</div>
	)
}

export default CardFilm
