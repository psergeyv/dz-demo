import Header from './components/Header/Header'
import Head from './components/Head/Head'
import FormSearch from './components/FormSearch/FormSearch'
import Paragraph from './components/Paragraph/Paragraph';
import './App.css'

function App() {
  

	return (
		<>
			<Header/>
			<div className='layout'>
				<Head title="Поиск"/>
			
				<Paragraph cssstyle='paragraph normal'
					text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'/>
			
				<FormSearch />
			</div>
		</>
	)
}

export default App
