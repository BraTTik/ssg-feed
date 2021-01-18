import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  &:after{
    content: "";
    flex: auto;
  }
  
  &:after,
  & > *{
    width: calc(33% - 10px);
    margin-bottom: 20px;
  }
  
  @media (max-width: 800px){
    &:after,
    & > *{
      width: 100%;
    }
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
`

export const MoreLink = styled.a`
  margin: -30px 0 20px;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
`