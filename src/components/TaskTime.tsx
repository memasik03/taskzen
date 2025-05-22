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
	max-width: 100px;
	width: 100%;
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
	skipValues?: boolean[]
}

export function TaskTime({
	taskStart,
	taskEnd,
	skipValues = [false, false],
}: ITaskTime): JSX.Element {
	const height: number = getTimeNumber(getTimeDifference(taskEnd, taskStart))
	return (
		<TaskTimeBox>
			{!skipValues[0] && <Time>{timeToString(taskStart)}</Time>}
			<TimeArrow
				height={height + (skipValues[0] ? 25 : 0) + (skipValues[2] ? 25 : 0)}
			/>
			{!skipValues[1] && <Time>{timeToString(taskEnd)}</Time>}
		</TaskTimeBox>
	)
}
