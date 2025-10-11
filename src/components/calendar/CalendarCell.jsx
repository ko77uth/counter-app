const CalendarCell = props => {
	const number = props.children
	return (
		<button
			className={`calendar__cell ${
				props.isChanged ? 'calendar__cell--changed' : ''
			} ${props.isOtherMonth ? 'calendar__cell--other-month' : ''}`}
			onClick={props.onClick}
		>
			{number}
		</button>
	)
}

export default CalendarCell
