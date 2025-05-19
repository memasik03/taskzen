import { JSX } from 'react'
import styled from 'styled-components'
import { TypeTaskLine } from '../types'
import { AddTask } from './AddTask'
import { TaskLineInfo } from './TaskLineInfo'
import { TaskTime } from './TaskTime'

const TaskBox = styled.div`
	width: 100%;
	min-height: 40px;
	display: flex;
	border-radius: 30px;
	overflow: hidden;
	gap: 3px;
`

interface ITaskLine {
	taskInfo: TypeTaskLine
	onAddedTask: () => void
	setTask: (id: number, name: string, description: string) => void
}

export function TaskLine({
	taskInfo,
	onAddedTask,
	setTask,
}: ITaskLine): JSX.Element {
	return (
		<TaskBox>
			<TaskTime time={taskInfo.time} />
			<TaskLineInfo
				tasks={taskInfo.tasks}
				setTask={(id: number, name: string, description: string) =>
					setTask(id, name, description)
				}
			/>
			<AddTask onClick={onAddedTask} />
		</TaskBox>
	)
}
