import CalendarCell from './CalendarCell'

const Calendar = props => {
	return (
		<div className='calendar-body'>
			<h2 className='calendar__month'>{props.monthName}</h2>
			<ul className='days-list'>
				<li className='day-item'>Пн</li>
				<li className='day-item'>Вт</li>
				<li className='day-item'>Ср</li>
				<li className='day-item'>Чт</li>
				<li className='day-item'>Пт</li>
				<li className='day-item'>Сб</li>
				<li className='day-item'>Вс</li>
			</ul>
			<div className='calendar'>
				{props.days.map(item => (
					<CalendarCell
						key={item.key}
						onClick={() => !item.isOtherMonth && props.onCellClick(item.key)}
						isChanged={item.isChanged}
						isOtherMonth={item.isOtherMonth} // ← добавить эту строку
					>
						{item.child}
					</CalendarCell>
				))}
			</div>
		</div>
	)
}

export default Calendar
