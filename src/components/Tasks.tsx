import { JSX } from 'react'
import styled from 'styled-components'

const TasksBox = styled.div`
	width: 100%;
	padding: 10px;
	background-color: var(--main-color);
	border-radius: 20px;
`

const TaskLines = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3px;
	margin-top: 20px;
	background: red;
`

export function Tasks(): JSX.Element {
	return (
		<TasksBox>
			<TaskLines></TaskLines>
		</TasksBox>
	)
}
