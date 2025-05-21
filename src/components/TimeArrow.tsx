import { JSX } from 'react'
import styled from 'styled-components'

const Arrow = styled.div<ITimeArrow>`
	height: ${props => props.height}px;
	svg {
		height: 100%;
		color: var(--muted-color);
	}
`

interface ITimeArrow {
	height: number
}

export function TimeArrow({ height }: ITimeArrow): JSX.Element {
	return (
		<Arrow height={height}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='28' /* Фиксированная ширина */
				height={height + 4}
				viewBox={`0 0 28 ${height + 6}`}
				fill='none'
				stroke='currentColor'
				strokeWidth='3' /* Увеличенная толщина линии */
				strokeLinecap='round'
				strokeLinejoin='round'
				className='lucide lucide-move-vertical'
				preserveAspectRatio='xMidYMin meet' /* Фиксирует ширину */
			>
				<path d={`M14 2v${height}`} />
				<path d={`m8 ${height - 2} 6 6 6-6`} />
				<path d='m8 8 6-6 6 6' />
			</svg>
		</Arrow>
	)
}
