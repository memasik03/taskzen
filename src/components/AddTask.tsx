import { Plus } from 'lucide-react'
import { JSX } from 'react'
import styled from 'styled-components'

const Buttton = styled.button`
	min-height: 40px;
	min-width: 40px;
	border-radius: 7px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	background-color: var(--sc-color);
	svg {
		color: var(--main-color);
	}
`

interface IAddTask {
	onClick: () => void
}

export function AddTask({ onClick }: IAddTask): JSX.Element {
	return (
		<Buttton onClick={onClick}>
			<Plus size={22} />
		</Buttton>
	)
}
