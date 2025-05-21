import { JSX } from 'react'
import styled from 'styled-components'
import {
	getTimeDifference,
	getTimeNumber,
	timeToString,
	TypeTime,
} from '../types'
import { TimeArrow } from './TimeArrow'

const TaskTimeBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
`

const Time = styled.p`
	height: 18px;
	font-size: 18px;
	line-height: 100%;
	color: var(--muted-color);
`

interface ITaskTime {
	taskStart: TypeTime
	taskEnd: TypeTime
	skipFirstTime?: boolean
}

export function TaskTime({
	taskStart,
	taskEnd,
	skipFirstTime = false,
}: ITaskTime): JSX.Element {
	const height: number = getTimeNumber(getTimeDifference(taskEnd, taskStart))
	return (
		<TaskTimeBox>
			{!skipFirstTime && <Time>{timeToString(taskStart)}</Time>}
			<TimeArrow height={height + (skipFirstTime ? 25 : 0)} />
			<Time>{timeToString(taskEnd)}</Time>
		</TaskTimeBox>
	)
}
