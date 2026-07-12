import { createContext } from "react";
import { useState, useEffect } from "react";


export const UserContext = createContext({
	userName: ''
})

export const UserContextProvider = ({children}) => {
	//const [userName, setUserName] = useState('');
	const [userName, setUserName] = useState(() => {		
		const profiles = JSON.parse(localStorage.getItem('profiles'));
		const currentLoggedUser = profiles?.find?.(p => p && p.isLogined === true);
	
		return currentLoggedUser ? currentLoggedUser.name : 'Гость';
		
	});
	return <UserContext.Provider value={{userName, setUserName}}>
		{children}
	</UserContext.Provider>
}