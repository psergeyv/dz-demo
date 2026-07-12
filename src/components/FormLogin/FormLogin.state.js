export const INITIAL_STATE_LOGIN = {
	isValid: {
		name: true,		
	},
	isFormLoginToSubmit: false,
	values: {		
		name: '',
	}	
}

export function formReducer(state, action) {
	switch(action.type) {
	case 'SET_VALUE':
		return {...state, values: {
			...state.values, ... action.payload
		}};
	case 'CLEAR':
		return {...state, values: INITIAL_STATE_LOGIN.values, isFormLoginToSubmit: false};
	case 'RESET_VALIDITY':
		return {...state, isValid: INITIAL_STATE_LOGIN.isValid};
	case "SUBMIT" : {
		const nameValidity = state.values.name?.trim().length;
		
		return {
			...state,
			isValid: {
				name: nameValidity
			},			
			isFormLoginToSubmit: nameValidity
		}
	}
	}
}