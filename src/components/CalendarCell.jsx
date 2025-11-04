const CalendarCell = ({ day, count, isOtherMonth, isChanged, onClick }) => {
	return (
		<button
			className={
				isOtherMonth
					? 'other-moth__cell'
					: isChanged
					? 'calendar__changed-cell'
					: 'calendar__cell'
			}
			onClick={!isOtherMonth ? onClick : () => {}}
		>
			<span
				className={
					isOtherMonth
						? 'cell__other-day'
						: isChanged
						? 'cell__small-day'
						: 'cell__day'
				}
			>
				{day}
			</span>
			<span className={isChanged ? 'cell__count' : 'empty-count'}>{count}</span>
		</button>
	)
}
export default CalendarCell
