import { JSX, useState } from 'react'
import styled from 'styled-components'
import { TypeTaskLine } from '../types'
import { TaskLine } from './TaskLine'
import { Title } from './Title'

const TasksBox = styled.div`
	width: 100%;
	padding: 20px;
	background-color: var(--main-color);
	border-radius: 20px;
`

const TaskLines = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 20px;
`

export function Tasks(): JSX.Element {
	const [tasks, setTasks] = useState<TypeTaskLine[]>(
		Array.from({ length: 24 }, (_, index) => ({
			id: index,
			time: `${String(index).padStart(2, '0')}:00`,
			tasks: [],
		}))
	)

	function addTask(time: string): void {
		setTasks((prev: TypeTaskLine[]) => {
			const found: TypeTaskLine | undefined = prev.find(l => l.time === time)
			if (!found) return prev

			return prev.map(task =>
				task.id === found.id
					? {
							...task,
							tasks: [
								...task.tasks,
								{
									id: task.tasks.length
										? task.tasks[task.tasks.length - 1].id + 1
										: 0,
									name: `${task.tasks.length}`,
									description: '',
								},
							],
					  }
					: task
			)
		})
	}

	return (
		<TasksBox>
			<Title>Welcome to Taskzen!</Title>
			<TaskLines>
				{tasks.map(t => (
					<TaskLine
						taskInfo={t}
						key={t.time}
						onAddedTask={() => addTask(t.time)}
					/>
				))}
			</TaskLines>
		</TasksBox>
	)
}
