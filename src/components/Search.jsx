const Search = props => {
	return (
		<form className='todo__form'>
			<div className='todo__field field'>
				<label className='field__label' htmlFor={'search-task'}>
					{'Search task'}
				</label>
				<input
					onChange={props.searchHandler}
					value={props.search}
					className='field__input'
					id='search-task'
					placeholder=' '
					autoComplete='off'
				/>
			</div>
		</form>
	)
}

export default Search
