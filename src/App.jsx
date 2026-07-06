import Head from './components/Head/Head'
import Button from './components/Button/Button' 
import Paragraph from './components/Paragraph/Paragraph';
import './App.css'

function App() {
  

  return (
    <>
      <div className='header'>
        <Head>Поиск</Head>
      </div>
      <div className='search-block'>
        <Button>Найти</Button>
      </div>
      <div className='text-block'>
        <Paragraph cssstyle='paragraph normal'
					text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'/>
      </div>
    </>
  )
}

export default App
