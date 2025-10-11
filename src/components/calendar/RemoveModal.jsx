function RemoveModal(props) {
	return (
		<div className='modal' {...props}>
			<div
				className='remove__container'
				onClick={e => {
					e.stopPropagation()
				}}
			>
				<h1 className='modal__title'>Вы уверены?</h1>
				<button onClick={props.onClear} className='remove-button button'>
					Очистить
				</button>
			</div>
		</div>
	)
}

export default RemoveModal
