import { JSX } from 'react'
import styled from 'styled-components'
import { TypeTask } from '../types'
import { TaskBlock } from './TaskBlock'
import { TaskTime } from './TaskTime'

const TaskBox = styled.div`
	display: flex;
	width: 100%;
`

interface ITask {
	tasks: TypeTask[]
	currentTaskId: number | null
	prevTaskId: number | null
	onEditTask: () => void
	triggerCompleted: () => void
}

export function Task({
	tasks,
	currentTaskId,
	prevTaskId,
	onEditTask,
	triggerCompleted,
}: ITask): JSX.Element {
	const taskInfo: TypeTask | undefined = tasks.find(t => t.id === currentTaskId)
	let prevTaskInfo: TypeTask | undefined
	if (prevTaskId) {
		prevTaskInfo =
			prevTaskId !== -1 && prevTaskId - 1 < tasks.length
				? tasks[prevTaskId - 1]
				: undefined
	}
	const skipFirstTime =
		prevTaskInfo?.end.hour === taskInfo?.start.hour &&
		prevTaskInfo?.end.minute === taskInfo?.start.minute
	if (!taskInfo) return <></>

	return (
		<TaskBox>
			<TaskTime
				taskStart={taskInfo.start}
				taskEnd={taskInfo.end}
				skipValues={[skipFirstTime, false]}
			/>
			<TaskBlock
				onEditTask={onEditTask}
				task={currentTaskId === null ? null : taskInfo}
				triggerCompleted={triggerCompleted}
			/>
		</TaskBox>
	)
}
