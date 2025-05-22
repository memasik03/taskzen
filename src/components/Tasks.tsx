import React, { JSX, useState } from 'react'
import styled from 'styled-components'
import { compareTime, TypeTask } from '../types'
import { Task } from './Task'
import { TaskEditor } from './TaskEditor'
import { TasksList } from './TasksList'
import { TaskTime } from './TaskTime'
import { Title } from './Title'

const TasksBox = styled.div`
	width: 100%;
	padding: 10px;
	background-color: var(--main-color);
	border-radius: 20px;
	position: relative;
`

export function Tasks(): JSX.Element {
	const [tasks, setTasks] = useState<TypeTask[]>([
		{
			id: 1,
			name: 'Go to pijon',
			description: 'a',
			completed: true,
			start: { hour: 1, minute: 0 },
			end: { hour: 2, minute: 30 },
		},
		{
			id: 2,
			name: 'Rat 4 kill',
			description: 'Ultra sigma',
			completed: false,
			start: { hour: 2, minute: 30 },
			end: { hour: 3, minute: 0 },
		},
		{
			id: 3,
			name: 'Spat',
			description: 'z z z z z z',
			completed: false,
			start: { hour: 4, minute: 0 },
			end: { hour: 23, minute: 0 },
		},
	])

	function sortTasks(tasks: TypeTask[]): TypeTask[] {
		return tasks.sort((a, b) => {
			const timeA = a.start.hour * 60 + a.start.minute
			const timeB = b.start.hour * 60 + b.start.minute
			return timeA - timeB
		})
	}

	function triggerCompleted(taskId: number): void {
		setTasks(prev => [
			...prev.map(t =>
				t.id === taskId
					? {
							...t,
							completed: !t.completed,
					  }
					: t
			),
		])
	}

	return (
		<TasksBox>
			<Title>Welcome to taskzen</Title>
			<TasksList>
				{sortTasks(tasks).map(t => (
					<React.Fragment key={t.id}>
						<Task
							tasks={sortTasks(tasks)}
							currentTaskId={t.id}
							prevTaskId={tasks.findIndex(task => task.id === t.id)}
							triggerCompleted={() => triggerCompleted(t.id)}
						/>
						{tasks[sortTasks(tasks).findIndex(task => task.id === t.id) + 1] &&
							!compareTime(
								t.end,
								tasks[tasks.findIndex(task => task.id === t.id) + 1].start
							) && (
								<TaskTime
									taskStart={t.end}
									taskEnd={
										tasks[
											sortTasks(tasks).findIndex(task => task.id === t.id) + 1
										].start
									}
									skipValues={[true, true]}
								/>
							)}
					</React.Fragment>
				))}
			</TasksList>
			<TaskEditor />
		</TasksBox>
	)
}
