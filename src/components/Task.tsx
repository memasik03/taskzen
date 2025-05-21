import { JSX, useEffect } from 'react'
import styled from 'styled-components'
import { TypeTask } from '../types'
import { TaskBlock } from './TaskBlock'
import { TaskTime } from './TaskTime'

const TaskBox = styled.div`
	display: flex;
	gap: 50px;
`

interface ITask {
	tasks: TypeTask[]
	currentTaskId: number
}

export function Task({ tasks, currentTaskId }: ITask): JSX.Element {
	const taskInfo: TypeTask | undefined = tasks.find(t => t.id === currentTaskId)

	const prevTaskIndex = tasks.findIndex(task => task.id === currentTaskId)
	const prevTaskInfo =
		prevTaskIndex !== -1 && prevTaskIndex - 1 < tasks.length
			? tasks[prevTaskIndex - 1]
			: undefined
	const skipFirstTime =
		prevTaskInfo?.end.hour === taskInfo?.start.hour &&
		prevTaskInfo?.end.minute === taskInfo?.start.minute
	useEffect(() => {
		console.log(skipFirstTime)
	})

	if (!taskInfo) return <></>
	return (
		<TaskBox>
			<TaskTime
				taskStart={taskInfo.start}
				taskEnd={taskInfo.end}
				skipFirstTime={skipFirstTime}
			/>
			<TaskBlock task={taskInfo} />
		</TaskBox>
	)
}
