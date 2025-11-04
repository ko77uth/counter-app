import { useEffect, useState } from 'react'
import CalculatorButtons from '../components/CalculatorButtons'

function CalculatorPage() {
	const [value, setValue] = useState('0')
	const [preValue, setPreValue] = useState('')
	useEffect(() => {
		if (value.length > 1 && value[0] === '0') {
			setValue(value.slice(1))
		} else if (value.length === 0) {
			setValue('0')
		}
	}, [value])
	return (
		<>
			<div className='calculator-counter'>
				<h2 className='calculator-counter-fv'>{value}</h2>
				<h4 className='calculator-counter-pv'>{preValue}</h4>
			</div>
			<CalculatorButtons
				value={value}
				setValue={setValue}
				preValue={preValue}
				setPreValue={setPreValue}
			></CalculatorButtons>
		</>
	)
}

export default CalculatorPage
