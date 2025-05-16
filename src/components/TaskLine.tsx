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
	gap: 7px;
`

interface ITaskLine {
	taskInfo: TypeTaskLine
	onAddedTask: () => void
}

export function TaskLine({ taskInfo, onAddedTask }: ITaskLine): JSX.Element {
	return (
		<TaskBox>
			<TaskTime time={taskInfo.time} />
			<TaskLineInfo tasks={taskInfo.tasks} />
			<AddTask onClick={onAddedTask} />
		</TaskBox>
	)
}
