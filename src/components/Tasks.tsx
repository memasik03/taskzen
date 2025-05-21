import { JSX, useState } from 'react'
import styled from 'styled-components'
import { TypeTask } from '../types'
import { Task } from './Task'
import { TasksList } from './TasksList'
import { Title } from './Title'

const TasksBox = styled.div`
	width: 100%;
	padding: 10px;
	background-color: var(--main-color);
	border-radius: 20px;
`

export function Tasks(): JSX.Element {
	const [tasks] = useState<TypeTask[]>([
		{
			id: 1,
			name: 'a',
			description: 'a',
			start: { hour: 1, minute: 0 },
			end: { hour: 2, minute: 30 },
		},
		{
			id: 2,
			name: 'aas',
			description: 'aadddd',
			start: { hour: 2, minute: 30 },
			end: { hour: 3, minute: 0 },
		},
		{
			id: 3,
			name: 'sdfsg',
			description: 'sggg gdfgdf gdf',
			start: { hour: 4, minute: 0 },
			end: { hour: 23, minute: 0 },
		},
	])
	return (
		<TasksBox>
			<Title>Welcome to taskzen</Title>
			<TasksList>
				{tasks.map(t => (
					<Task tasks={tasks} currentTaskId={t.id} key={t.id} />
				))}
			</TasksList>
		</TasksBox>
	)
}
