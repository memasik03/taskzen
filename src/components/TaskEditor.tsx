import { JSX } from 'react'
import styled from 'styled-components'
import { TypeTask } from '../types'
import { TimeInput } from './TimeInput'

const TaskEditorBox = styled.div`
	width: 100%;
	padding: 20px;
`
const Form = styled.form``
const Name = styled.input``
const Description = styled.textarea``
const Time = styled.div``

interface ITaskEditor {
	task?: TypeTask
}

export function TaskEditor({ task }: ITaskEditor): JSX.Element {
	if (!task) return <></>
	return (
		<TaskEditorBox>
			<Form>
				<Name placeholder='Name' value={task.name} />
				<Description placeholder='Description' value={task.name} />
				<Time>
					<TimeInput />
					<TimeInput />
				</Time>
			</Form>
		</TaskEditorBox>
	)
}
