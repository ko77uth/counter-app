import { useState } from 'react'
import Input from './Input'
import Select from './Select'

const Modal = props => {
	const [shift, setShift] = useState('regular-shift')

	const [sotka, setSotka] = useState('')
	const [stType, setStType] = useState('')
	const [ndType, setNdType] = useState('')
	const [coming, setComing] = useState('')

	function comingChangeListeneer(e) {
		setComing(e.target.value)
	}
	function sotkaChangeListeneer(e) {
		setSotka(e.target.value)
	}
	function stTypeChangeListeneer(e) {
		setStType(e.target.value)
	}
	function ndTypeChangeListeneer(e) {
		setNdType(e.target.value)
	}

	function onSubmitRegular() {
		if (sotka.trim() === '' && ndType.trim() === '' && stType.trim() === '') {
			return
		}
		const sum =
			(+sotka + +ndType + +stType - 4500) * 0.39 +
			810 +
			+sotka * 0.093 +
			+ndType * 0.02 +
			1233
		const count = +sum.toFixed(2)
		if (count === 265) {
			props.onSubmit(0)
		} else if (+sotka + +ndType + +stType < 4500) {
			props.onSubmit((count - 265).toFixed(2))
		} else {
			props.onSubmit(count)
		}
	}

	function onSubmitPartTimeJob() {
		const sum =
			(+sotka + +ndType + +stType) * 0.39 +
			+sotka * 0.093 +
			+ndType * 0.02 +
			+coming
		const count = +sum.toFixed(2)
		props.onSubmit(count)
	}

	function onSubmitBad() {
		const sum =
			(+sotka + +ndType + +stType - 2250) * 0.39 +
			2250 * 0.18 +
			+sotka * 0.093 +
			+ndType * 0.02 +
			1233
		const count = +sum.toFixed(2)
		props.onSubmit(count)
	}

	return (
		<div className='modal' onClick={props.onClick}>
			<div className='modal__container' onClick={e => e.stopPropagation()}>
				<h1 className='modal__title'>Рассчитайте зарплату.</h1>
				<Select
					id='select-shift'
					className='field__select'
					onChange={e => setShift(e.target.value)}
					value={shift}
				>
					<option value='regular-shift'>Обычная смена</option>
					<option value='part-time-job'>Подработка</option>
					<option value='bad-shift'>"Смена по 0.5"</option>
				</Select>

				{shift === 'regular-shift' && (
					<form
						className='form'
						onSubmit={e => {
							e.preventDefault()
						}}
					>
						<Input
							onChange={sotkaChangeListeneer}
							label='Сотка'
							id='sotka'
							value={sotka}
						>
							Сотка
						</Input>
						<Input
							label='I Сорт'
							id='first-sort'
							value={stType}
							onChange={stTypeChangeListeneer}
						>
							I Сорт
						</Input>
						<Input
							label='Красная Цена'
							id='second-sort'
							value={ndType}
							onChange={ndTypeChangeListeneer}
						>
							Красная Цена
						</Input>
						<button onClick={onSubmitRegular} className='button'>
							Подсчитать
						</button>
					</form>
				)}
				{shift === 'part-time-job' && (
					<form
						className='form'
						onSubmit={e => {
							e.preventDefault()
						}}
					>
						<Input
							label='Сотка'
							id='sotka'
							value={sotka}
							onChange={sotkaChangeListeneer}
						>
							Сотка
						</Input>
						<Input
							label='I Сорт'
							id='first-sort'
							value={stType}
							onChange={stTypeChangeListeneer}
						>
							I Сорт
						</Input>
						<Input
							label='Красная Цена'
							id='second-sort'
							value={ndType}
							onChange={ndTypeChangeListeneer}
						>
							Красная Цена
						</Input>
						<Input
							label='Надбавка за приход'
							id='for-coming'
							value={coming}
							onChange={comingChangeListeneer}
						>
							Надбавка за приход
						</Input>
						<button onClick={onSubmitPartTimeJob} className='button'>
							Подсчитать
						</button>
					</form>
				)}
				{shift === 'bad-shift' && (
					<form
						className='form'
						onSubmit={e => {
							e.preventDefault()
						}}
					>
						<Input
							label='Сотка'
							id='sotka'
							value={sotka}
							onChange={sotkaChangeListeneer}
						>
							Сотка
						</Input>
						<Input
							label='I Сорт'
							id='first-sort'
							value={stType}
							onChange={stTypeChangeListeneer}
						>
							I Сорт
						</Input>
						<Input
							label='Красная Цена'
							id='second-sort'
							value={ndType}
							onChange={ndTypeChangeListeneer}
						>
							Красная Цена
						</Input>

						<button onClick={onSubmitBad} className='button'>
							Подсчитать
						</button>
					</form>
				)}
			</div>
		</div>
	)
}

export default Modal
