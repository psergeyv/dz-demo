import Header from './components/Header/Header'
import Head from './components/Head/Head'
import FormSearch from './components/FormSearch/FormSearch'
import Paragraph from './components/Paragraph/Paragraph';
import ListFilms from './components/ListFilms/ListFilms';
//import { useState } from 'react';
import './App.css'

const FILMS_DATA = [
	{
		id:1,
		title: 'Black Widow',
		image:'/films/1.jpg',
		stars: 324
	},
	{
		id:2,
		title: 'Shang Chi',
		image:'/films/2.jpg',
		stars: 124
	},
	{
		id:3,
		title: 'Loki',
		image:'/films/3.jpg',
		stars: 235
	},
	{
		id:4,
		title: 'How I Met Your Mother',
		image:'/films/4.jpg',
		stars: 123
	}
];
function App() {
	//const [items, setFilms] = useState(FILMS_DATA);

	/*const addFilm = item => {
		setFilms(oldItems => [...oldItems,{
			text:item.text,
			title:item.title,
			date:new Date(item.date),
			id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1,
		}]);
	};*/

	return (
		<>
			<Header/>
			<div className='layout'>
				<Head title="Поиск"/>
			
				<Paragraph cssstyle='normal'
					text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'/>			
				<FormSearch />
			</div>
			<ListFilms items = {FILMS_DATA} />
		</>
	)
}

export default App
