import st from './FormLogin.module.css'
import { INITIAL_STATE_LOGIN, formReducer } from './FormLogin.state';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useEffect, useReducer, useRef } from 'react';

function FormLogin({ onSubmit }) { 	
	const [formStateLogin, dispatchForm] = useReducer(formReducer, INITIAL_STATE_LOGIN);
	const { isValid, isFormLoginToSubmit, values } = formStateLogin;
	const nameRef = useRef();
	const nameButtonRef = useRef();
	const focusError = () => {
		switch(true) {
		case !isValid.name:			
			nameRef.current.focus();
			break;		
		}
	}
	useEffect(() => {
		let timerId;
		if (!isValid.name) {			
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
		if(isFormLoginToSubmit) {			
			onSubmit(values);
			console.log('Запущен беспонтовый процесс авторизации');
			dispatchForm({type: 'CLEAR'});			
		};
	}, [isFormLoginToSubmit, values, onSubmit])

	const loginUser = (e) => {
		e.preventDefault();			
		dispatchForm({ type: 'SUBMIT'});		
	};

	
	return (
        
		<form onSubmit={loginUser}>
			<div className={st['login-line']}>
				<Input type="text" 
					isValid={isValid.name}
					ref={nameRef}
					name="name" 											
					placeholder="Ваше имя"
					appearence='login'										
					value={values.name} onChange={onChange} />
				<Button title="Войти в профиль" ref={nameButtonRef} appearence='login'/>
			</div>
		</form>
	)
}

export default FormLogin
