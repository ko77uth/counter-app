import { useState } from 'react'
import Input from './Input'

function Form({ shift, onSubmit }) {
	const [sotka, setSotka] = useState('')
	const [stType, setStType] = useState('')
	const [ndType, setNdType] = useState('')
	const [coming, setComing] = useState('')

	function onSubmitRegular() {
		const sum =
			(+sotka + +ndType + +stType - 4500) * 0.39 +
			810 +
			+sotka * 0.093 +
			+ndType * 0.02 +
			1233
		const count = +sum.toFixed(2)
		if (count < 500) {
			return
		} else {
			onSubmit(count)
		}
	}

	function onSubmitPartTimeJob() {
		const sum =
			(+sotka + +ndType + +stType) * 0.39 +
			+sotka * 0.093 +
			+ndType * 0.02 +
			+coming
		const count = +sum.toFixed(2)
		if (count < 500) {
			return
		} else {
			onSubmit(count)
		}
	}

	function onSubmitBad() {
		const sum =
			(+sotka + +ndType + +stType - 2250) * 0.39 +
			2250 * 0.18 +
			+sotka * 0.093 +
			+ndType * 0.02 +
			1233
		const count = +sum.toFixed(2)
		if (count < 500) {
			return
		} else {
			onSubmit(count)
		}
	}
	return (
		<form
			className='form'
			onSubmit={e => {
				e.preventDefault()
			}}
		>
			<Input
				onChange={e => setSotka(e.target.value)}
				label='Сотка'
				id='sotka'
				value={sotka}
				type={'number'}
			>
				Сотка
			</Input>
			<Input
				label='I Сорт'
				id='first-sort'
				value={stType}
				onChange={e => setStType(e.target.value)}
				type={'number'}
			>
				I Сорт
			</Input>
			<Input
				label='Красная Цена'
				id='second-sort'
				value={ndType}
				onChange={e => setNdType(e.target.value)}
				type={'number'}
			>
				Красная Цена
			</Input>
			{shift === 'part-time-job' && (
				<Input
					label='Надбавка за приход'
					id='for-coming'
					type='number'
					value={coming}
					onChange={e => setComing(e.target.value)}
				>
					Надбавка за приход
				</Input>
			)}
			{shift === 'regular-shift' && (
				<button onClick={onSubmitRegular} className='button'>
					Подсчитать
				</button>
			)}
			{shift === 'part-time-job' && (
				<button onClick={onSubmitPartTimeJob} className='button'>
					Подсчитать
				</button>
			)}
			{shift === 'bad-shift' && (
				<button onClick={onSubmitBad} className='button'>
					Подсчитать
				</button>
			)}
		</form>
	)
}

export default Form
