import { Link } from 'react-router'

const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
	return (
		<div className={isOpenMenu ? 'menu active' : 'menu'}>
			<ul className='menu__list'>
				<Link
					to='/'
					className='menu-item'
					style={{ borderBottom: '0px' }}
					onClick={() => {
						setIsOpenMenu(false)
					}}
				>
					Счетчик
				</Link>
				<Link
					to='/calculator'
					className='menu-item'
					onClick={() => {
						setIsOpenMenu(false)
					}}
				>
					Калькулятор
				</Link>
			</ul>
		</div>
	)
}

export default Menu
