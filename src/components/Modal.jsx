const Modal = ({ isActiveModal, children, onClickBack }) => {
	return (
		<div
			className={isActiveModal ? 'modal active' : 'modal'}
			onClick={onClickBack}
		>
			<div
				className={
					isActiveModal ? 'modal__container activeModal' : 'modal__container'
				}
				onClick={e => {
					e.stopPropagation()
				}}
			>
				{children}
			</div>
		</div>
	)
}

export default Modal
