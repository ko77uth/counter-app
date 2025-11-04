import { useEffect, useState, useMemo } from 'react'
import CalendarCell from '../components/CalendarCell'
import AddModal from '../components/AddModal'
import Modal from '../components/Modal'

const CalendarPage = () => {
	const [isActiveModal, setIsActiveModal] = useState(false)
	const [isActiveRemoveModal, setIsActiveRemoveModal] = useState(false)
	const [currentDayId, setCurrentDayId] = useState(null)
	const [currentDate] = useState(new Date())

	const months = [
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

	const { month, year, monthIndex } = useMemo(
		() => ({
			month: months[currentDate.getMonth()],
			year: currentDate.getFullYear(),
			monthIndex: currentDate.getMonth(),
		}),
		[currentDate]
	)

	const [calendarDays, setCalendarDays] = useState(() => {
		const savedDays = localStorage.getItem('days')
		return savedDays ? JSON.parse(savedDays) : getCalendarDays(year, monthIndex)
	})

	function getCalendarDays(year, month) {
		const days = []
		const firstDay = new Date(year, month, 1)
		const firstDayOfWeek = firstDay.getDay()
		const lastDay = new Date(year, month + 1, 0)
		const daysInMonth = lastDay.getDate()
		const prevMonthLastDay = new Date(year, month, 0).getDate()

		// Дни предыдущего месяца
		const daysFromPrevMonth = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
		for (let i = daysFromPrevMonth; i > 0; i--) {
			const dayNumber = prevMonthLastDay - i + 1
			const prevMonth = month === 0 ? 11 : month - 1
			const prevYear = month === 0 ? year - 1 : year

			days.push({
				day: dayNumber,
				count: null,
				isOtherMonth: true,
				isChanged: false,
				dayId: `${prevYear}-${prevMonth}-${dayNumber}-prev`, // добавляем суффикс для уникальности
			})
		}

		// Дни текущего месяца
		for (let i = 1; i <= daysInMonth; i++) {
			days.push({
				day: i,
				count: null,
				isOtherMonth: false,
				isChanged: false,
				dayId: `${year}-${month}-${i}`,
			})
		}

		// Дни следующего месяца
		const totalCells = 42
		const remainingDays = totalCells - days.length
		for (let i = 1; i <= remainingDays; i++) {
			const nextMonth = month === 11 ? 0 : month + 1
			const nextYear = month === 11 ? year + 1 : year

			days.push({
				day: i,
				count: null,
				isOtherMonth: true,
				isChanged: false,
				dayId: `${nextYear}-${nextMonth}-${i}-next`, // добавляем суффикс для уникальности
			})
		}

		return days
	}

	useEffect(() => {
		localStorage.setItem('days', JSON.stringify(calendarDays))
	}, [calendarDays])

	let totalMoneys = calendarDays.reduce((sum, day) => {
		return day.count !== null ? sum + day.count : sum + 0
	}, 0)

	useEffect(() => {
		let totalMoneys = calendarDays.reduce((sum, day) => {
			return day.count !== null ? sum + day.count : sum + 0
		}, 0)
	}, [totalMoneys])

	return (
		<div className='calendar'>
			<h1 className='calendar__month'>
				{month} {year}
			</h1>
			<div className='calendar__body'>
				{calendarDays.map(day => (
					<CalendarCell
						day={day.day}
						count={day.count}
						isOtherMonth={day.isOtherMonth}
						isChanged={day.isChanged}
						key={((day.day * Math.random()) / Date.now()) * Math.random()}
						onClick={() => {
							if (!day.isOtherMonth) {
								setIsActiveModal(true)
								setCurrentDayId(day.dayId)
							}
						}}
						setCalendarDays={setCalendarDays}
					/>
				))}
			</div>
			<div className='gadgets__wrapper'>
				<h2 className='total-moneys__title'>
					Всего: {totalMoneys.toFixed(2)} ₽
				</h2>
				<button
					className='remove-all__button'
					onClick={() => {
						setIsActiveRemoveModal(true)
					}}
				>
					Очистить
				</button>
			</div>

			<AddModal
				isActiveModal={isActiveModal}
				setIsActiveModal={setIsActiveModal}
				currentDayId={currentDayId}
				setCalendarDays={setCalendarDays}
			/>
			<Modal
				isActiveModal={isActiveRemoveModal}
				onClickBack={() => {
					setIsActiveRemoveModal(false)
				}}
			>
				<h1 className='modal__title'>Вы уверены?</h1>
				<p className='modal__description'>
					При согласии очистятся все ячейки. <br /> Процесс нельзя будет отменить.
				</p>
				<button
					className='button'
					onClick={() => {
						setCalendarDays(getCalendarDays(year, monthIndex))
						setIsActiveRemoveModal(false)
					}}
				>
					Очистить
				</button>
			</Modal>
		</div>
	)
}

export default CalendarPage
