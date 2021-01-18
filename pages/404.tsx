import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`

const Main = styled.h2`
  font-size: 10rem;
  line-height: 11rem;
  font-family: ${p => p.theme.fonts.accent};
  width: 100%
`

const NotFound = () => {
    return (
        <Container>
            <Main>404</Main>
            Oops! The page not found!
        </Container>
    )
}

export default NotFound