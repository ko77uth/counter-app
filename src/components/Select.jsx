const Select = ({ children, id, onChange, value, ...props }) => {
	return (
		<div className='todo__field field' {...props}>
			<select
				{...props}
				className='field__input'
				id={id}
				onChange={onChange}
				value={value}
			>
				{children}
			</select>
		</div>
	)
}

export default Select
