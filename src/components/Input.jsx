const Input = ({ onChange, value, label, id, children }) => {
	return (
		<div className='todo__field field'>
			<label className='field__label' htmlFor={id}>
				{label}
			</label>
			<input
				value={value}
				onChange={onChange}
				className='field__input'
				id={id}
				placeholder={children}
				autoComplete='off'
			/>
		</div>
	)
}

export default Input
