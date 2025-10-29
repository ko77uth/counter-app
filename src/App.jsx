import { useEffect, useState } from 'react'
import Modal from './components/Modal'
import Calendar from './components/calendar/Calendar'
import RemoveModal from './components/calendar/RemoveModal'

// Функция создания данных месяца
const createNewMonthData = (month, year) => {
	const daysInMonth = new Date(year, month + 1, 0).getDate()
	return Array.from({ length: daysInMonth }, (_, i) => ({
		child: i + 1,
		key: i + 1,
		isChanged: false,
	}))
}

const App = () => {
	const [showModal, setShowModal] = useState(false)
	const [removeModal, setRemoveModal] = useState(false)
	const [totalMoneys, setTotalMoneys] = useState(() => {
		const moneys = localStorage.getItem('moneys')
		return moneys ? JSON.parse(moneys) : 0
	})
	const [days, setDays] = useState(() => {
		const savedDays = localStorage.getItem('days')
		return savedDays
			? JSON.parse(savedDays)
			: createNewMonthData(new Date().getMonth(), new Date().getFullYear())
	})

	const date = new Date()
	const monthNames = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	]

	const getCalendarData = monthName => {
		const monthIndex = monthNames.indexOf(monthName)
		const year = new Date().getFullYear()

		const prevMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1
		const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1
		const prevMonthYear = monthIndex === 0 ? year - 1 : year
		const nextMonthYear = monthIndex === 11 ? year + 1 : year

		const daysInPrevMonth = new Date(
			prevMonthYear,
			prevMonthIndex + 1,
			0
		).getDate()
		const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()

		const firstDay = new Date(year, monthIndex, 1)
		const startingDayOfWeek = firstDay.getDay()
		const adjustedStartDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1

		const calendarDays = []

		// Дни предыдущего месяца
		for (let i = 0; i < adjustedStartDay; i++) {
			const dayNumber = daysInPrevMonth - adjustedStartDay + i + 1
			calendarDays.push({
				child: dayNumber,
				key: `prev-${dayNumber}`,
				isChanged: false,
				isOtherMonth: true,
			})
		}

		// Дни текущего месяца - берем из сохраненных данных
		for (let i = 1; i <= daysInMonth; i++) {
			const savedDay = days.find(day => day.key === i) || {
				child: i,
				key: i,
				isChanged: false,
			}
			calendarDays.push({
				...savedDay,
				isOtherMonth: false,
			})
		}

		// Дни следующего месяца
		const totalCells = 35
		const remainingCells = totalCells - calendarDays.length
		for (let i = 1; i <= remainingCells; i++) {
			calendarDays.push({
				child: i,
				key: `next-${i}`,
				isChanged: false,
				isOtherMonth: true,
			})
		}

		return calendarDays
	}

	useEffect(() => {
		localStorage.setItem('days', JSON.stringify(days))
		const moneysNow = getTotalMoneys(days)
		setTotalMoneys(moneysNow)
		localStorage.setItem('moneys', JSON.stringify(moneysNow))
	}, [days])

	const [selectedDay, setSelectedDay] = useState(null)

	function handlerCellClick(dayKey) {
		if (typeof dayKey === 'number') {
			setSelectedDay(dayKey)
			setShowModal(true)
		}
	}

	const handleModalSubmit = newValue => {
		setDays(prevDays =>
			prevDays.map(day =>
				day.key === selectedDay
					? { ...day, child: Number(newValue), isChanged: true }
					: day
			)
		)
		setShowModal(false)
		setSelectedDay(null)
	}

	function getTotalMoneys(arr) {
		return arr.reduce((acc, current) => {
			if (+current.child < 45) {
				return acc + 0
			} else {
				return acc + Number(current.child)
			}
		}, 0)
	}

	function onClose() {
		setShowModal(false)
		setSelectedDay(null)
	}

	function clearCells() {
		const currentMonth = new Date().getMonth()
		const currentYear = new Date().getFullYear()
		const newMonthData = createNewMonthData(currentMonth, currentYear)

		setDays(newMonthData)
		setTotalMoneys(0)
		setRemoveModal(false)

		// Сохраняем сразу в localStorage
		localStorage.setItem('days', JSON.stringify(newMonthData))
		localStorage.setItem('moneys', '0')
	}

	// Получаем данные для отображения календаря
	const calendarData = getCalendarData(monthNames[date.getMonth()])

	return (
		<div className='App'>
			<Calendar
				monthName={monthNames[date.getMonth()]}
				days={calendarData}
				onCellClick={handlerCellClick}
			/>
			<button
				onClick={() => setRemoveModal(true)}
				className='remove-cells button'
			>
				Очистить ячейки
			</button>
			<h2 className='total-moneys'>Зарплата: {totalMoneys.toFixed(2)}₽</h2>
			{showModal && (
				<Modal
					onClick={() => {
						setShowModal(false)
					}}
					onSubmit={handleModalSubmit}
					onClose={onClose}
					selectedDay={selectedDay}
				/>
			)}
			{removeModal && (
				<RemoveModal
					onClick={() => {
						setRemoveModal(false)
					}}
					onClear={clearCells}
					onClose={() => setRemoveModal(false)}
				/>
			)}
		</div>
	)
}

export default App
