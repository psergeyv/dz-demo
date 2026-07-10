import st from './ListFilms.module.css'
import cn from 'classnames';
import CardFilm from '../CardFilm/CardFilm';

function ListFilms({items}) { 	
	const clName = cn(st['list-films']);
	const sortItems = (a, b) => {
		if (a.id < b.id) {
			return 1;
		}else{
			return -1;
		}		
	};
	let list = <p>Кина не будет!</p>;
	if (items.length > 0) {
		list = items.sort(sortItems).map(item => (
			<CardFilm key={item.id}				
				title={item.title}
				image={item.image}
				stars={item.stars}
			/>
		))
	};
	return (
		<div className={clName}>			
			{list}			
		</div>		
	)
}

export default ListFilms
