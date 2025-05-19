import { JSX, useState } from 'react'
import styled from 'styled-components'
import { EditTaskFunction, TypeTaskLine } from '../types'
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
	gap: 3px;
	margin-top: 20px;
`

export function Tasks(): JSX.Element {
	const [tasks, setTasks] = useState<TypeTaskLine[]>(
		Array.from({ length: 24 }, (_, index) => ({
			id: index,
			time: `${String(index).padStart(2, '0')}:00`,
			tasks: [],
			lastId: 0,
		}))
	)

	function addTask(time: string, name: string, description: string): void {
		setTasks((prev: TypeTaskLine[]) => {
			const found: TypeTaskLine | undefined = prev.find(l => l.time === time)
			if (!found) return prev

			return prev.map((task: TypeTaskLine, index: number) =>
				task.id === found.id
					? {
							...task,
							tasks: [
								...task.tasks,
								{
									id: prev[index].lastId,
									name: name,
									description: description,
								},
							],
							lastId: prev[index].lastId + 1,
					  }
					: task
			)
		})
	}

	const editTask: EditTaskFunction = (time, id, name, description) => {
		setTasks((prev: TypeTaskLine[]) => {
			return prev.map(taskLine => {
				if (taskLine.time !== time) return taskLine // Оставляем неизменённым

				return {
					...taskLine,
					tasks: taskLine.tasks.map(task =>
						task.id === id
							? { id: id, name: name, description: description }
							: task
					),
				}
			})
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
						onAddedTask={() => addTask(t.time, 'rat2', 'rat2')}
						setTask={(id: number, name: string, description: string) =>
							editTask(t.time, id, name, description)
						}
					/>
				))}
			</TaskLines>
		</TasksBox>
	)
}
