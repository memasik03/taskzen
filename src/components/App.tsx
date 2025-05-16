import { JSX } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { Tasks } from './Tasks'

const AppBox = styled.div`
	padding: 15px;
`

export function App(): JSX.Element {
	return (
		<AppBox>
			<Container>
				<Tasks></Tasks>
			</Container>
		</AppBox>
	)
}
