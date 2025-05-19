import { JSX, useState } from 'react'
import styled from 'styled-components'
import { SetTask } from '../types'
import { CloseEditor } from './CloseEditor'

const TaskEditorBox = styled.div`
	width: 100%;
	border: rgba(255, 255, 255, 0.3);
	z-index: 100552;
`
const Form = styled.form`
	display: flex;
	gap: 3px;
	flex-direction: column;
`
const Name = styled.input`
	font-size: 18px;
	background-color: transparent;
	color: inherit;
	width: 100%;
`
const Description = styled.textarea`
	background-color: transparent;
	color: inherit;
	resize: none;
`

const NameString = styled.div`
	display: flex;
	gap: 3px;
`

interface ITaskEditor {
	name: string
	description: string
	setTask: SetTask
	onClose: () => void
}

export function TaskEditor({
	name,
	description,
	setTask,
	onClose,
}: ITaskEditor): JSX.Element {
	const [localName, setLocalName] = useState(name)
	const [localDescription, setLocalDescription] = useState(description)

	return (
		<TaskEditorBox>
			<Form>
				<NameString>
					<Name
						value={localName}
						placeholder='Task name'
						onChange={e => {
							setLocalName(e.target.value)
							setTask(e.target.value, localDescription)
						}}
					/>
					<CloseEditor onClick={onClose} />
				</NameString>
				<Description
					value={localDescription}
					placeholder='Task description'
					onChange={e => {
						setLocalDescription(e.target.value)
						setTask(localName, e.target.value)
					}}
				/>
			</Form>
		</TaskEditorBox>
	)
}
