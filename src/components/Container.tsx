import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const ContainerBox = styled.div`
	max-width: 1080px;
	width: 100%;
	margin: 0 auto;
`

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
	return <ContainerBox>{children}</ContainerBox>
}
