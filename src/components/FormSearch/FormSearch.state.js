export const INITIAL_STATE_SERACH = {
	isValid: {
		search:true,		
	},
	values: {		
		search:'',
	},
	isFormReadyToSubmit: false
}

export function formReducer(state, action) {
	switch(action.type) {
	case 'SET_VALUE':
		return {...state, values: {
			...state.values, ... action.payload
		}};
	case 'CLEAR':
		return {...state, values: INITIAL_STATE_SERACH.values, isFormReadyToSubmit: false};
	case 'RESET_VALIDITY':
		return {...state, isValid: INITIAL_STATE_SERACH.isValid};
	case "SUBMIT" : {
		const searchValidity = state.values.search?.trim().length;
		console.log(searchValidity);
		return {
			...state,
			isValid: {
				search: searchValidity,
			},
			isFormReadyToSubmit: searchValidity
		}
	}
	}
}