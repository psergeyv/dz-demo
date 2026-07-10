import './ListFilms.css';

import CardFilm from '../CardFilm/CardFilm';

function ListFilms({items}) { 	

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
		<div className='list-films'>			
			{list}			
		</div>		
	)
}

export default ListFilms
