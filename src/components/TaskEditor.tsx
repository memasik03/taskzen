import { Check, X } from 'lucide-react'
import { JSX, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { getTimeDifference, summTime, TimeType, TypeEditorTask } from '../types'
import { TimeInput } from './TimeInput'

const TaskEditorBox = styled.div`
	width: calc(100% - 20px);
	padding: 20px;
	background-color: var(--th-color);
	border-radius: 20px;
	z-index: 100;
	position: absolute;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
`
const Name = styled.input`
	border-radius: 7px;
	padding: 7px;
	font-size: 20px;
	background-color: var(--main-color);
	color: var(--color);
	height: 40px;
`
const Description = styled.textarea`
	border-radius: 7px;
	padding: 7px;
	font-size: 16px;
	background-color: var(--main-color);
	color: var(--color);
	resize: vertical;
	min-height: 40px;
	max-height: 500px;
	height: 120px;
`
const TimeBlock = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 30px;
`
const Time = styled.div`
	font-size: 20px;
	display: flex;
	gap: 3px;
	align-items: center;
`
const Action = styled.button`
	color: inherit;
	background-color: var(--main-color);
	border-radius: 7px;
	right: 0;
	font-size: 18px;
	display: flex;
	align-items: center;
	height: 100%;
	aspect-ratio: 1/1;
	justify-content: center;
`
const TimeSelection = styled.div`
	display: flex;
	gap: 30px;
`
const Actions = styled.div`
	display: flex;
	gap: 3px;
	height: 100%;
`

interface ITaskEditor {
	task?: TypeEditorTask | null
	onClose: () => void
	onAddedTask: (task: TypeEditorTask) => void
}

export function TaskEditor({
	task,
	onClose,
	onAddedTask,
}: ITaskEditor): JSX.Element {
	const formRef = useRef<HTMLFormElement>(null)
	useEffect(() => {
		if (task && formRef.current) {
			const current = formRef.current
			current.querySelector<HTMLInputElement>('#editor-name')!.value = task.name
			current.querySelector<HTMLTextAreaElement>('#editor-description')!.value =
				task.description
			current.querySelector<HTMLInputElement>('#editor-hour')!.value =
				task.start.hour.toString().padStart(2, '0')
			current.querySelector<HTMLInputElement>('#editor-minute')!.value =
				task.start.minute.toString().padStart(2, '0')
			current.querySelector<HTMLInputElement>('#editor-d-hour')!.value =
				getTimeDifference(task.end, task.start).hour.toString().padStart(2, '0')
			current.querySelector<HTMLInputElement>('#editor-d-minute')!.value =
				getTimeDifference(task.end, task.start)
					.minute.toString()
					.padStart(2, '0')
		}
	})
	function getValues(): TypeEditorTask {
		const current = formRef.current
		if (!current) return task!
		return {
			name: current.querySelector<HTMLInputElement>('#editor-name')!.value,
			description: current.querySelector<HTMLTextAreaElement>(
				'#editor-description'
			)!.value,
			start: {
				hour: parseInt(
					current.querySelector<HTMLInputElement>('#editor-hour')!.value
				),
				minute: parseInt(
					current.querySelector<HTMLInputElement>('#editor-minute')!.value
				),
			},
			end: {
				...summTime(
					{
						hour: parseInt(
							current.querySelector<HTMLInputElement>('#editor-d-hour')!.value
						),
						minute: parseInt(
							current.querySelector<HTMLInputElement>('#editor-d-minute')!.value
						),
					},
					{
						hour: parseInt(
							current.querySelector<HTMLInputElement>('#editor-hour')!.value
						),
						minute: parseInt(
							current.querySelector<HTMLInputElement>('#editor-minute')!.value
						),
					}
				),
			},
			completed: false,
			id: task?.id,
		}
	}
	return (
		<TaskEditorBox>
			<Form ref={formRef}>
				<Name placeholder='Name' id='editor-name' />
				<Description placeholder='Description' id='editor-description' />
				<TimeBlock>
					<TimeSelection>
						<Time>
							Start:
							<TimeInput type={TimeType.hour} id='editor-hour' />:
							<TimeInput type={TimeType.minute} id='editor-minute' />
						</Time>
						<Time>
							Duration:
							<TimeInput type={TimeType.hour} id='editor-d-hour' />
							h
							<TimeInput type={TimeType.minute} id='editor-d-minute' />m
						</Time>
					</TimeSelection>
					<Actions>
						<Action onClick={onClose}>
							<X />
						</Action>
						<Action
							onClick={e => {
								e.preventDefault()
								onClose()
								onAddedTask(getValues())
							}}
						>
							<Check />
						</Action>
					</Actions>
				</TimeBlock>
			</Form>
		</TaskEditorBox>
	)
}
