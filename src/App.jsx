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
        <Button>Поиск</Button>
      </div>
      <div className='text-block'>
        <Paragraph cssstyle='normal'>Поиск</Paragraph>
      </div>
    </>
  )
}

export default App
