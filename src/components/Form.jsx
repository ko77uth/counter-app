const Form = props => {
	return (
		<form className='todo__form'>
			<div className='todo__field field'>
				<label className='field__label' htmlFor={'new-task'}>
					{'New task'}
				</label>
				<input
					onChange={props.titleChangeListener}
					value={props.title}
					className='field__input'
					id='new-task'
					placeholder=' '
					autoComplete='off'
				/>
			</div>
			<button onClick={props.addNote} className='button' type='submit'>
				Add
			</button>
		</form>
	)
}

export default Form
