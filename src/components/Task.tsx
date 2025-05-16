import { JSX } from 'react'
import styled from 'styled-components'
import { TypeTask } from '../types'

const TaskBox = styled.div`
	min-height: 30px;
	height: 100%;
	width: 100%;
	background-color: var(--accent-color);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
`

interface ITask {
	task: TypeTask
}

export function Task({ task }: ITask): JSX.Element {
	return <TaskBox>{task.name}</TaskBox>
}
