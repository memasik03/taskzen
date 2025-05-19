import { JSX } from 'react'
import styled from 'styled-components'
import { TypeTask } from '../types'
import { Task } from './Task'

const TaskLineInfoBox = styled.div`
	width: 400%;
	min-height: 100%;
	background-color: rgba(255, 255, 255, 0.4);
	border-radius: 7px;
	flex-direction: column;
	padding: 3px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
	gap: 3px;
`

interface ITaskLineInfo {
	tasks: TypeTask[]
	setTask: (id: number, name: string, description: string) => void
}

export function TaskLineInfo({ tasks, setTask }: ITaskLineInfo): JSX.Element {
	return (
		<TaskLineInfoBox>
			{tasks.map(t => (
				<Task
					task={t}
					key={t.id}
					setTask={(name: string, description: string) =>
						setTask(t.id, name, description)
					}
				></Task>
			))}
		</TaskLineInfoBox>
	)
}
