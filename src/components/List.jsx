import Item from './Item'

function List(props) {
	return (
		<ul className='todo__list'>
			{props.notes.map(note => {
				return (
					<Item
						id={note.key}
						key={note.key}
						text={note.title}
						deleteNote={props.deleteNote}
					></Item>
				)
			})}
		</ul>
	)
}

export default List
