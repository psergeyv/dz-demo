import st from './Header.module.css'
import cn from 'classnames';

function Header({user}) {
	console.log(user);
	const clName = cn(st['header']); 
	if (user) {
		return (
			<div className={clName}>
				<div className={st['header-logo']}>
					<img src="/logo.svg" alt="Домашка"/>
				</div>
				<div className={st['header-menu']}>
					<a href="">Поиск фильмов</a>
					<a href="">Мои фильмы <span className={st['header-menu-count']}>0</span></a>
				
					<a href="">Выйти {user.name}
						<img src="/login.svg" alt="Войти" />
					</a>
				</div>
			</div>
		)
	}else{
		return (
			<div className={clName}>
				<div className={st['header-logo']}>
					<img src="/logo.svg" alt="Домашка"/>
				</div>
				<div className={st['header-menu']}>
					<a href="">Поиск фильмов</a>
					<a href="">Мои фильмы <span className={st['header-menu-count']}>0</span></a>
				
					<a href="">Войти 
						<img src="/login.svg" alt="Войти" />
					</a>
				</div>
			</div>
		)
	}
} 

export default Header
