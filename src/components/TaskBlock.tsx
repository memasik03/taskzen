import { Check, Edit } from 'lucide-react'
import { JSX } from 'react'
import styled from 'styled-components'
import { getTimeDifference, TypeTask, TypeTime } from '../types'
import { TaskAction } from './TaskAction'

const TaskBlockBox = styled.div<ITaskBlockBoxProps>`
	display: flex;
	padding: 10px;
	justify-content: space-between;
	border-radius: 10px;
	background-color: var(--th-color);
	max-width: 400px;
	width: 100%;
	opacity: ${props => props.completed === 'true' && '50%'};
	transition: all 0.2s;
	text-decoration: ${props => props.completed === 'true' && 'line-through'};
`

const TaskInfo = styled.div``

const TaskActions = styled.div`
	display: flex;
	gap: 5px;
	height: min-content;
`

interface ITaskBlockBoxProps {
	completed: string
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
	triggerCompleted: () => void
}

export function TaskBlock({ task, triggerCompleted }: ITaskBlock): JSX.Element {
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
		<TaskBlockBox completed={`${task.completed}`}>
			<TaskInfo>
				<Name>
					{task.name}
					<Time>({displayTimeDifference})</Time>
				</Name>
				<Description>{task.description}</Description>
			</TaskInfo>
			<TaskActions>
				<TaskAction>
					<Edit size={22} />
				</TaskAction>
				<TaskAction onClick={triggerCompleted}>
					<Check size={25} />
				</TaskAction>
			</TaskActions>
		</TaskBlockBox>
	)
}
