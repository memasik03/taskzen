import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const TasksListBox = styled.div`
	width: 100%;
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	gap: 5px;
	align-items: flex-start;
`

export const TasksList: React.FC<PropsWithChildren> = ({ children }) => {
	return <TasksListBox>{children}</TasksListBox>
}
