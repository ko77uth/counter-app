import { useState } from 'react'
import Modal from './Modal'
import Input from './Input'
import Select from './Select'

const AddModal = ({
	isActiveModal,
	setIsActiveModal,
	currentDayId, // меняем на currentDayId
	setCalendarDays,
}) => {
	const [sotka, setSotka] = useState('')
	const [redPrice, setRedPrice] = useState('')
	const [firstType, setFirstType] = useState('')
	const [allowance, setAllowance] = useState('')
	const [selectedShift, setSelectedShift] = useState('common')

	function closeModal() {
		setIsActiveModal(false)
		setSotka('')
		setRedPrice('')
		setFirstType('')
		setAllowance('')
	}

	function submit(count) {
		const num = count.toFixed(2)
		if (num < 1000) {
			alert('Сумма слишком мала')
			return false
		}

		setCalendarDays(prevDays =>
			prevDays.map(day =>
				day.dayId === currentDayId // сравниваем по dayId вместо day.day
					? { ...day, count: Number(num), isChanged: true }
					: day
			)
		)
		return true
	}

	// ... остальные функции остаются такими же
	function onAddCommonShift() {
		const result =
			(+sotka + +redPrice + +firstType - 4500) * 0.39 +
			810 +
			+sotka * 0.093 +
			+redPrice * 0.02 +
			1233
		submit(result)
	}

	function onAddAdditionalShift() {
		const result =
			(+sotka + +redPrice + +firstType) * 0.39 +
			+sotka * 0.093 +
			+firstType * 0.02 +
			+allowance
		submit(result)
	}

	function onAddIncompleteShift() {
		const result =
			(+sotka + +redPrice + +firstType - 2250) * 0.39 +
			2250 * 0.18 +
			+sotka * 0.093 +
			+redPrice * 0.02 +
			1233
		submit(result)
	}

	function handleCalculate() {
		if (+sotka + +allowance + +redPrice + +firstType < 1000) {
			alert('Проверьте правильность введенных данных')
			return
		}

		switch (selectedShift) {
			case 'common':
				onAddCommonShift()
				break
			case 'additional':
				onAddAdditionalShift()
				break
			case 'incomplete':
				onAddIncompleteShift()
				break
			default:
				break
		}

		closeModal()
	}

	return (
		<div className='addDayModal'>
			<Modal
				isActiveModal={isActiveModal}
				setIsActiveModal={setIsActiveModal}
				onClickBack={closeModal}
			>
				<Select
					value={selectedShift}
					onChange={e => setSelectedShift(e.target.value)}
				>
					<option value='common'>Обычная смена</option>
					<option value='additional'>Подработка</option>
					<option value='incomplete'>Неполная</option>
				</Select>

				<Input
					value={sotka}
					label='Сотка'
					id='sotka'
					onChange={e => setSotka(e.target.value)}
				>
					Сотка
				</Input>

				<Input
					value={redPrice}
					label='Красная Цена'
					id='redPrice'
					onChange={e => setRedPrice(e.target.value)}
				>
					Красная Цена
				</Input>

				<Input
					value={firstType}
					label='I тип'
					id='firstType'
					onChange={e => setFirstType(e.target.value)}
				>
					I тип
				</Input>

				{selectedShift === 'additional' && (
					<Input
						value={allowance}
						label='Надбавка'
						id='allowance'
						onChange={e => setAllowance(e.target.value)}
					>
						Надбавка
					</Input>
				)}

				<button className='button' onClick={handleCalculate}>
					Подсчитать
				</button>
			</Modal>
		</div>
	)
}

export default AddModal
