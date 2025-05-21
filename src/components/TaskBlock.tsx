import { JSX } from 'react'
import styled from 'styled-components'
import { TypeTask } from '../types'

const TaskBlockBox = styled.div`
	padding: 10px;
	border-radius: 10px;
	background-color: var(--th-color);
	max-width: 400px;
	width: 100%;
`

const Name = styled.p`
	font-size: 22px;
`
const Description = styled.p`
	font-size: 16px;
`

interface ITaskBlock {
	task: TypeTask
}

export function TaskBlock({ task }: ITaskBlock): JSX.Element {
	return (
		<TaskBlockBox>
			<Name>{task.name}</Name>
			<Description>{task.description}</Description>
		</TaskBlockBox>
	)
}
