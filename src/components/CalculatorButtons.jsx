import { useState } from 'react'

function CalculatorButtons({ value, setValue, preValue, setPreValue }) {
	const [operator, setOperator] = useState('')

	function addValue(number) {
		setValue(`${value}${number}`)
	}

	function getSecondValue(operator) {
		setPreValue(value)
		setValue('0')
		setOperator(operator)
	}

	function count(number1, number2, operator) {
		if (operator === '+') {
			return number1 + number2
		} else if (operator === '-') {
			return number1 - number2
		} else if (operator === '*') {
			return number1 * number2
		} else if (operator === '/') {
			return number1 / number2
		}
	}

	return (
		<div className='calculator__body'>
			<ul className='calculator-actions__list --1'>
				<li className='calculator-actions__item'>
					<button
						className='calculator-actions__item-button'
						onClick={() => {
							setValue(0)
							setOperator('')
							setPreValue('')
						}}
					>
						AC
					</button>
				</li>
				<li className='calculator-actions__item'>
					<button
						className='calculator-actions__item-button'
						onClick={() => {
							if (value === '0') {
								return
							} else {
								setValue(value.slice(0, -1))
							}
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='currentColor'
							className='bi bi-backspace'
							viewBox='0 0 16 16'
						>
							<path d='M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z' />
							<path d='M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 1 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z' />
						</svg>
					</button>
				</li>
				<li className='calculator-actions__item'>
					<button className='calculator-actions__item-button'>%</button>
				</li>
				<li className='calculator-actions__item'>
					<button
						className='calculator-actions__item-button'
						onClick={() => getSecondValue('/')}
					>
						/
					</button>
				</li>
			</ul>
			<ul className='calculator-actions__list --2'>
				<li className='calculator-actions__item'>
					<button
						className='calculator-actions__item-button'
						onClick={() => getSecondValue('*')}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='22'
							height='22'
							fill='currentColor'
							className='bi bi-x-lg'
							viewBox='0 0 16 16'
						>
							<path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
						</svg>
					</button>
				</li>
				<li className='calculator-actions__item'>
					<button
						className='calculator-actions__item-button'
						onClick={() => getSecondValue('+')}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='currentColor'
							className='bi bi-plus-lg'
							viewBox='0 0 16 16'
						>
							<path
								fillRule='evenodd'
								d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
							/>
						</svg>
					</button>
				</li>
				<li className='calculator-actions__item'>
					<button
						className='calculator-actions__item-button'
						onClick={() => getSecondValue('-')}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='currentColor'
							className='bi bi-dash-lg'
							viewBox='0 0 16 16'
						>
							<path
								fillRule='evenodd'
								d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z'
							/>
						</svg>
					</button>
				</li>
				<li>
					<button
						className='calculator-actions__item-button equal-button'
						onClick={() => {
							setValue(count(+preValue, +value, operator))
							setPreValue('')
						}}
					>
						<svg
							width='22'
							height='12'
							viewBox='0 0 22 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 11H21'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
							<path
								d='M1 1H21'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
					</button>
				</li>
			</ul>
			<ul className='numbers__list'>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(7)}>
						7
					</button>
				</li>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(8)}>
						8
					</button>
				</li>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(9)}>
						9
					</button>
				</li>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(4)}>
						4
					</button>
				</li>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(5)}>
						5
					</button>
				</li>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(6)}>
						6
					</button>
				</li>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(1)}>
						1
					</button>
				</li>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(2)}>
						2
					</button>
				</li>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(3)}>
						3
					</button>
				</li>
				<li className='numbers__item'>
					<button className='numbers__button' onClick={() => addValue(0)}>
						0
					</button>
				</li>
			</ul>
			<button
				className='add-comma-button numbers__button'
				onClick={() => {
					setValue(Number(value).toFixed(1).toString().slice(0, -1))
				}}
			>
				,
			</button>
		</div>
	)
}

export default CalculatorButtons
