import { Plus } from 'lucide-react'
import React, { JSX, useState } from 'react'
import styled from 'styled-components'
import { compareTime, TypeEditorTask, TypeTask } from '../types'
import { Task } from './Task'
import { TaskEditor } from './TaskEditor'
import { TasksList } from './TasksList'
import { TaskTime } from './TaskTime'
import { Title } from './Title'

const TasksBox = styled.div`
	width: 100%;
	padding: 10px;
	background-color: var(--main-color);
	border-radius: 20px;
	position: relative;
`

const TitleSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 40px;
`

const AddTask = styled.button`
	height: 100%;
	aspect-ratio: 1/1;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--color);
	svg {
		color: var(--main-color);
	}
`

export function Tasks(): JSX.Element {
	const [tasks, setTasks] = useState<TypeTask[]>([])
	const [editorInfo, setEditorInfo] = useState<IEditorInfo>({
		isOpen: false,
		editedTask: null,
	})
	function editTask(task: TypeTask | null = null) {
		const defaultEditorTask: TypeEditorTask = {
			name: '',
			description: '',
			completed: false,
			end: { hour: 0, minute: 0 },
			start: { hour: 0, minute: 0 },
		}
		setEditorInfo(prev => ({
			...prev,
			isOpen: true,
			editedTask: task ? task : defaultEditorTask,
		}))
	}

	interface IEditorInfo {
		isOpen: boolean
		editedTask: TypeEditorTask | null
	}

	function sortTasks(tasks: TypeTask[]): TypeTask[] {
		return tasks.sort((a, b) => {
			const timeA = a.start.hour * 60 + a.start.minute
			const timeB = b.start.hour * 60 + b.start.minute
			return timeA - timeB
		})
	}

	function triggerCompleted(taskId: number): void {
		setTasks(prev => [
			...prev.map(t =>
				t.id === taskId
					? {
							...t,
							completed: !t.completed,
					  }
					: t
			),
		])
	}

	function addTask(task: TypeEditorTask): void {
		const foundTask = tasks.find(t => t.id === task.id)

		if (!foundTask) {
			const maxId = Math.max(...tasks.map(t => t.id), 0)
			setTasks(prev => [...prev, { ...task, id: maxId + 1 }])
		} else {
			setTasks(prev =>
				prev.map(t => (t.id === task.id ? { ...task, id: t.id } : t))
			)
		}
	}

	return (
		<TasksBox>
			{editorInfo.isOpen && (
				<TaskEditor
					task={editorInfo.editedTask}
					onClose={() => setEditorInfo(prev => ({ ...prev, isOpen: false }))}
					onAddedTask={(task: TypeEditorTask) => addTask(task)}
				/>
			)}
			<TitleSection>
				<Title>Welcome to taskzen</Title>
				<AddTask onClick={() => editTask()}>
					<Plus />
				</AddTask>
			</TitleSection>
			<TasksList>
				{sortTasks(tasks).map(t => (
					<React.Fragment key={t.id}>
						<Task
							tasks={sortTasks(tasks)}
							currentTaskId={t.id}
							prevTaskId={tasks.findIndex(task => task.id === t.id)}
							triggerCompleted={() => triggerCompleted(t.id)}
							onEditTask={() => editTask(t)}
						/>
						{tasks[sortTasks(tasks).findIndex(task => task.id === t.id) + 1] &&
							!compareTime(
								t.end,
								tasks[tasks.findIndex(task => task.id === t.id) + 1].start
							) && (
								<TaskTime
									taskStart={t.end}
									taskEnd={
										tasks[
											sortTasks(tasks).findIndex(task => task.id === t.id) + 1
										].start
									}
									skipValues={[true, true]}
								/>
							)}
					</React.Fragment>
				))}
			</TasksList>
		</TasksBox>
	)
}
