import React, { JSX, PropsWithChildren } from 'react'
import styled from 'styled-components'

const Text = styled.h1`
	font-family: 'Playfair Display';
	font-weight: 800;
	font-size: 30px;
`

export const Title: React.FC<PropsWithChildren> = ({
	children,
}): JSX.Element => {
	return <Text>{children}</Text>
}
