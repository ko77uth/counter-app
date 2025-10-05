import { useState } from 'react'
import Delete from './Delete'
function Item(props) {
	const [check, setCheck] = useState(false)
	function onChangeCheck() {
		setCheck(check => !check)
	}
	return (
		<li className='todo__item todo-item'>
			<input
				className='todo-item__checkbox'
				id={props.id}
				type='checkbox'
				checked={check}
				onChange={onChangeCheck}
			/>
			<label className='todo-item__label' htmlFor={props.id}>
				{props.text}
			</label>
			<Delete
				className='todo-item__delete-button'
				onClick={() => {
					props.deleteNote(props.id)
				}}
			/>
		</li>
	)
}

export default Item
