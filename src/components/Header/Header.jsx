import './Header.css'
function Header() { 
	return (
		<div className='header'>
			<div className='header-logo'>
				<img src="/logo.svg" alt="Домашка"/>
			</div>
			<div className='header-menu'>
				<a href="">Поиск фильмов</a>
				<a href="">Мои фильмы <span className="header-menu-count">0</span></a>
				<a href="">Войти 
					<img src="/login.svg" alt="Войти" />
				</a>
			</div>
		</div>
	)
}

export default Header
