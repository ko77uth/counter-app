function Delete(props) {
	return (
		<button
			{...props}
			className={props.className}
			aria-label='Delete'
			title='Delete'
		>
			{props.deleteall ? (
				props.children
			) : (
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M15 5L5 15M5 5L15 15'
						stroke='#757575'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			)}
		</button>
	)
}

export default Delete
