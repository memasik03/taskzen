import { JSX } from 'react'
import styled from 'styled-components'
import { getTimeDifference, getTimeNumber, TypeTask } from '../types'

const TaskInfoBox = styled.div<ITaskInfoBoxProps>`
	max-width: 250px;
	height: ${props => props.height}px;
	background-color: var(--th-color);
	padding: 10px;
	border-radius: 10px;
`

const Name = styled.p`
	font-size: 20px;
`

const Description = styled.p``

interface ITaskInfo {
	task: TypeTask
}

interface ITaskInfoBoxProps {
	height: number
}

export function TaskInfo({ task }: ITaskInfo): JSX.Element {
	const height: number =
		getTimeNumber(getTimeDifference(task.end, task.start)) + (18 * 2 + 10)
	return (
		<TaskInfoBox height={height}>
			<Name>{task.name}</Name>
			<Description>{task.description}</Description>
		</TaskInfoBox>
	)
}
