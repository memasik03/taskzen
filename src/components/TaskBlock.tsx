import { Check, Edit } from 'lucide-react'
import { motion } from 'motion/react'
import { JSX } from 'react'
import styled from 'styled-components'
import { getTimeDifference, TypeTask, TypeTime } from '../types'
import { TaskAction } from './TaskAction'

const TaskBlockBox = styled(motion.div)<ITaskBlockBoxProps>`
	display: flex;
	padding: 10px;
	justify-content: space-between;
	border-radius: 10px;
	background-color: var(--th-color);
	max-width: 400px;
	width: 100%;
	h3 {
		text-decoration: ${props =>
			props.completed === true ? 'line-through' : 'none'};
	}
`

const TaskInfo = styled.div``

const TaskActions = styled.div`
	display: flex;
	gap: 5px;
	height: min-content;
`

interface ITaskBlockBoxProps {
	completed: boolean
}

const Name = styled.h3`
	font-size: 22px;
	display: flex;
	gap: 5px;
	align-items: end;
`
const Time = styled.p`
	font-size: 16px;
	color: var(--muted-color);
`
const Description = styled.p`
	font-size: 16px;
`

interface ITaskBlock {
	task: TypeTask | null
	onEditTask: () => void
	triggerCompleted: () => void
}

export function TaskBlock({
	task,
	onEditTask,
	triggerCompleted,
}: ITaskBlock): JSX.Element {
	if (!task) return <></>
	const timeDifference: TypeTime = getTimeDifference(task.end, task.start)
	const displayTimeHours: string =
		timeDifference.hour !== 0 ? timeDifference.hour.toString() + 'h' : ''
	const displayTimeMinutes: string =
		timeDifference.minute !== 0 ? timeDifference.minute.toString() + 'min' : ''
	const displayTimeDifference: string =
		displayTimeHours +
		(displayTimeHours !== '' && displayTimeMinutes !== '' ? ' ' : '') +
		displayTimeMinutes

	return (
		<TaskBlockBox
			layout
			completed={task.completed}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: !task.completed ? 1 : 0.5 }}
			exit={{ scale: 0, opacity: 0 }}
		>
			<TaskInfo>
				<Name>
					{task.name}
					<Time>({displayTimeDifference})</Time>
				</Name>
				<Description>{task.description}</Description>
			</TaskInfo>
			<TaskActions>
				<TaskAction>
					<Edit size={22} onClick={onEditTask} />
				</TaskAction>
				<TaskAction onClick={triggerCompleted}>
					<Check size={25} />
				</TaskAction>
			</TaskActions>
		</TaskBlockBox>
	)
}
