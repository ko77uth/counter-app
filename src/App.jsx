import { useState } from 'react'
import CalendarPage from './pages/CalendarPage'
import Menu from './components/Menu'
import { Route, Routes } from 'react-router'
import CalculatorPage from './pages/CalculatorPage'

const App = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false)
	return (
		<div className='App'>
			<button
				className={isOpenMenu ? 'menu__button active' : 'menu__button'}
				onClick={() => {
					setIsOpenMenu(value => !value)
				}}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					className='bi bi-list'
					viewBox='0 0 16 16'
				>
					<path
						fillRule='evenodd'
						d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
					/>
				</svg>
			</button>
			<Routes>
				<Route path='/' element={<CalendarPage />}></Route>
				<Route path='/calculator' element={<CalculatorPage />}></Route>
			</Routes>

			<Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
		</div>
	)
}

export default App
