import { JSX } from 'react'
import styled from 'styled-components'
import { TypeTask } from '../types'
import { Task } from './Task'

const TaskLineInfoBox = styled.div`
	width: 300%;
	min-height: 100%;
	background-color: rgba(255, 255, 255, 0.4);
	border-radius: 7px;
	flex-direction: column;
	padding: 5px;
	display: flex;
	gap: 5px;
`

interface ITaskLineInfo {
	tasks: TypeTask[]
}

export function TaskLineInfo({ tasks }: ITaskLineInfo): JSX.Element {
	return (
		<TaskLineInfoBox>
			{tasks.map(t => (
				<Task task={t} key={t.id}></Task>
			))}
		</TaskLineInfoBox>
	)
}
