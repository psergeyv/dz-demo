import Header from './components/Header/Header'
import Head from './components/Head/Head'
import FormSearch from './components/FormSearch/FormSearch'
import Paragraph from './components/Paragraph/Paragraph';
import ListFilms from './components/ListFilms/ListFilms';
import {useLocalStorage} from './hooks/use-localstorage.hook'
import './App.css'
import FormLogin from './components/FormLogin/FormLogin';
import {UserContextProvider} from './context/user.context';

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
function searchItem() {
	console.log('Поиск начат');
};



function App() {
	
	
	const [profiles, setProfiles] = useLocalStorage('profiles', []);	
	const currentLoggedUser = profiles?.find?.(p => p && p.isLogined === true);
	
	const handleLogout = () => {
		console.log('asdas');
		const safeProfiles = Array.isArray(profiles) ? profiles : [];
		const updatedProfiles = safeProfiles.map(pr => 
			pr.name?.toLowerCase() === currentLoggedUser.name
				? { ...pr, isLogined: !pr.isLogined } 
				: pr
		);
		setProfiles(updatedProfiles);
	};
	const loginUser = (item) => {
		const targetName = item.name.toLowerCase();
		// Гарантируем, что profiles — это массив, чтобы избежать ошибки .some()
		const safeProfiles = Array.isArray(profiles) ? profiles : [];
		
		
		
		const userExists = safeProfiles.some(p => p.name?.toLowerCase() === targetName);
		
		if (userExists) {
			// 1. Создаем обновленный массив для существующего юзера
			const updatedProfiles = safeProfiles.map(pr => 
				pr.name?.toLowerCase() === targetName
					? { ...pr, isLogined: !pr.isLogined } 
					: pr
			);
			setProfiles(updatedProfiles);
		} else {
			// 2. Рассчитываем ID на основе текущего safeProfiles
			const nextId = safeProfiles.length > 0 ? Math.max(...safeProfiles.map(i => i.id)) + 1 : 1;
			
			const newUser = {			
				id: nextId,
				name: item.name,
				isLogined: true,			
			};

			// 3. Добавляем нового пользователя СВЕРХУ (в начало массива), 
			// разворачивая за ним старых пользователей БЕЗ всяких функций mapItems
			setProfiles([newUser, ...safeProfiles]);
		}
	};
	

	return (
		<UserContextProvider>
			<Header user={currentLoggedUser} onClick={handleLogout} />
			<div className='layout'>
				<Head title="Поиск"/>
			
				<Paragraph cssstyle='normal'
					text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'/>			
				<FormSearch onSubmit={searchItem} />
				<FormLogin onSubmit={loginUser}/>
			</div>
			<ListFilms items = {FILMS_DATA} />
		</UserContextProvider>
	)
}

export default App
