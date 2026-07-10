import st from './FormSearch.module.css'

import Button from '../Button/Button';
import Input from '../Input/Input';


function FormSearch() { 	
	
	const formSubmit = (event) => {
		event.preventDefault(); // Останавливает перезагрузку страницы
		console.log('Форма отправлена');
	};
	return (
        
		<form onSubmit={formSubmit}>
			<div className={st['search-line']}>
				<Input name='search' 
					icon="search-icon-input"
					type="text" 					
					placeholder="Введите название"
					style="search-input"/>
				<Button title="Искать" type='submit'/>
			</div>
		</form>
	)
}

export default FormSearch
