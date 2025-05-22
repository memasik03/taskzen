import React, { JSX, PropsWithChildren } from 'react'
import styled from 'styled-components'

const TaskActionBox = styled.button`
	background-color: transparent;
	max-width: 25px;
	width: 100%;
	aspect-ratio: 1/1;
	justify-content: center;
	display: flex;
	align-items: center;
	svg {
		color: #fff;
	}
`

interface ITaskAction {
	onClick?: () => void
	children: JSX.Element
}

export const TaskAction: React.FC<PropsWithChildren<ITaskAction>> = ({
	children,
	onClick,
}: ITaskAction) => {
	return <TaskActionBox onClick={onClick}>{children}</TaskActionBox>
}
