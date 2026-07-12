import st from './FormSearch.module.css'

import { INITIAL_STATE_SERACH, formReducer } from './FormSearch.state';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useEffect, useReducer, useRef } from 'react';

function FormSearch({ onSubmit }) { 	
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE_SERACH);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const searchRef = useRef();
	const searchButtonRef = useRef();
	const focusError = () => {
		switch(true) {
		case !isValid.search:
			searchRef.current.focus();
			break;		
		}
	}
	useEffect(() => {
		let timerId;
		if (!isValid.search) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000)
		};
		return () => {
			clearTimeout(timerId);
		}	
	}, [isValid]);

	const onChange = (e) => {
		dispatchForm({type:'SET_VALUE', payload:{
			[e.target.name]:e.target.value
		}});
	}
	useEffect(() =>{
		if(isFormReadyToSubmit) {	
			console.log('Запущен поиск');	
			onSubmit(values);			
			dispatchForm({type: 'CLEAR'});			
		};
	}, [isFormReadyToSubmit, values, onSubmit])

	const searchItems = (e) => {
		e.preventDefault();			
		dispatchForm({ type: 'SUBMIT'});		
	};

	
	return (        
		<form onSubmit={searchItems}>
			<div className={st['search-line']}>
				<Input type="text"  
					isValid={isValid.search}
					name="search" 
					icon="search-icon-input"					
					appearence="search" 
					ref={searchRef}					
					placeholder="Введите название"
					value={values.search} onChange={onChange}/>
				<Button title="Искать" ref={searchButtonRef} appearence="search" />
			</div>
		</form>
	)
}

export default FormSearch
