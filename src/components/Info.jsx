import Delete from './Delete'
function Info(props) {
	return (
		<div className='todo__info'>
			<div className='todo__total-tasks'>
				Total tasks: <span>{props.counter}</span>
			</div>
			<Delete
				className='todo__delete-all-button'
				type='button'
				deleteall='true'
				onClick={props.onDeleteAll}
			>
				Delete All
			</Delete>
		</div>
	)
}

export default Info
