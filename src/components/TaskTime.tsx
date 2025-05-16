import { JSX } from 'react'
import styled from 'styled-components'

const TaskTimeBox = styled.button`
	width: 100%;
	min-height: 100%;
	background-color: var(--sc-color);
	border-radius: 7px;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	color: var(--main-color);
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
`

type TypeTaskTime = {
	time: string
}

export function TaskTime({ time }: TypeTaskTime): JSX.Element {
	return <TaskTimeBox>{time}</TaskTimeBox>
}
