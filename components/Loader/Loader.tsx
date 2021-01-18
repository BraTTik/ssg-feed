import React, {FunctionComponent} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: ${ p => p.theme.fonts.accent };
`
export const Loader: FunctionComponent = () => {
    return (
        <Container>
            Loading...
        </Container>
    )
}