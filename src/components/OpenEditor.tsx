import { SquarePen } from 'lucide-react'
import { JSX } from 'react'
import styled from 'styled-components'

const OpenEditorBox = styled.button`
	height: 100%;
	aspect-ratio: 1/1;
	border-radius: 3px;
	background-color: transparent;
	svg {
		color: var(--color);
	}
`

interface ICloseEditor {
	onClick: () => void
}

export function OpenEditor({ onClick }: ICloseEditor): JSX.Element {
	return (
		<OpenEditorBox
			onClick={event => {
				event.preventDefault()
				onClick()
			}}
		>
			<SquarePen size={22} />
		</OpenEditorBox>
	)
}
