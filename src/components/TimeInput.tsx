import { JSX, useRef } from 'react'
import styled from 'styled-components'
import { TimeType } from '../types'

const TimeInputInput = styled.input`
	border-radius: 5px;
	padding: 5px;
	font-size: 20px;
	background-color: transparent;
	border: 2px solid var(--main-color);
	color: var(--color);
	height: 30px;
	max-width: 40px;
	text-align: center;
`

interface ITimeInput {
	type: TimeType
	value?: number
	id?: string
}

export function TimeInput({ type, value, id }: ITimeInput): JSX.Element {
	function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
		if (!inputRef.current) return
		const inputValue = parseInt(e.target.value)
		inputRef.current.value = checkValue(inputValue)
	}

	function checkValue(inputValue: number): string {
		const maxValues = { [TimeType.hour]: 24, [TimeType.minute]: 59 }
		if (inputValue >= maxValues[type]) {
			return maxValues[type].toString().padStart(2, '0')
		} else if (inputValue <= 0) {
			return (0).toString().padStart(2, '0')
		} else {
			return inputValue.toString().padStart(2, '0')
		}
	}

	function wheel(e: React.WheelEvent<HTMLInputElement>): void {
		e.stopPropagation()
		if (!inputRef.current) return
		if (e.deltaY < 0) {
			inputRef.current.value = checkValue(
				parseInt(inputRef.current.value) + 1
			).toString()
		} else {
			inputRef.current.value = checkValue(
				parseInt(inputRef.current.value) - 1
			).toString()
		}
	}
	const inputRef = useRef<HTMLInputElement>(null)
	return (
		<TimeInputInput
			type='text'
			ref={inputRef}
			onChange={e => onChange(e)}
			onMouseEnter={() => (document.body.style.overflow = 'hidden')}
			onMouseLeave={() => (document.body.style.overflow = 'scroll')}
			onWheel={e => wheel(e)}
			value={value ? value : '00'}
			id={id ? id : type}
			inputMode='numeric'
		/>
	)
}
