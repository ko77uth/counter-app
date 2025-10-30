import CalendarCell from './CalendarCell'

const Calendar = props => {
	return (
		<div className='calendar-body'>
			<h2 className='calendar__month'>{props.monthName}</h2>

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
