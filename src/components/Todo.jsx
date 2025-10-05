import { useEffect, useState } from 'react'
import Form from './Form'
import Info from './Info'
import List from './List'
import Search from './Search'

const Todo = () => {
	const [notes, setNotes] = useState([])
	const [title, setTitle] = useState('')
	const [counter, setCounter] = useState(0)
	const [search, setSearch] = useState('')

	function addNote(e) {
		e.preventDefault()
		const note = {
			title: title,
			key: Date.now() + Math.random(),
		}
		if (note.title === '' || note.title.length > 50) {
			return
		}
		setNotes([...notes, note])
		setCounter(counter => counter + 1)
		setTitle('')
	}

	function titleChangeListener(e) {
		setTitle(e.target.value)
	}

	function searchHandler(e) {
		setSearch(e.target.value)
	}

	function deleteNote(n) {
		setNotes(notes => notes.filter(note => note.key !== n))
		setCounter(counter => counter - 1)
	}

	function deleteAll(e) {
		e.preventDefault()
		setNotes(notes => [])
		setCounter(0)
	}

	return (
		<div className='todo'>
			<h1 className='todo__title'>To Do List</h1>
			<Form
				addNote={addNote}
				titleChangeListener={titleChangeListener}
				title={title}
			></Form>
			<Search search={search} searchHandler={searchHandler}></Search>
			<Info counter={counter} onDeleteAll={deleteAll}></Info>

			<List notes={notes} deleteNote={deleteNote}></List>
		</div>
	)
}

export default Todo
