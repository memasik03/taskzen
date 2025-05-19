import { JSX, useState } from 'react'
import styled from 'styled-components'
import { SetTask, TypeTask } from '../types'
import { OpenEditor } from './OpenEditor'
import { TaskEditor } from './TaskEditor'

const TaskBox = styled.div`
	position: relative;
	min-height: 30px;
	width: 100%;
	background-color: var(--accent-color);
	border-radius: 5px;
	display: flex;
	font-size: 18px;
	padding: 3px;
	flex-direction: column;
	gap: 3px;
`

const Name = styled.h3`
	width: 100%;
`

const TaskInfo = styled.div`
	display: flex;
`

interface ITask {
	task: TypeTask
	setTask: SetTask
}

export function Task({ task, setTask }: ITask): JSX.Element {
	const [isOpen, setIsOpen] = useState(true)
	return (
		<TaskBox>
			{!isOpen && (
				<TaskInfo>
					<Name>{task.name}</Name>
					<OpenEditor onClick={() => setIsOpen(true)} />
				</TaskInfo>
			)}
			{isOpen && (
				<TaskEditor
					name={task.name}
					description={task.description}
					setTask={setTask}
					onClose={() => setIsOpen(false)}
				/>
			)}
		</TaskBox>
	)
}
