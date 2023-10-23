import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 54rem;
  margin: -4rem auto;
  padding: 0 1rem;
`

export const ArrowContainer = styled.div`
  position: fixed;

  right: 1rem;
  bottom: 2rem;
  cursor: pointer;
  transition: 0.5s;

  a {
    outline: none;

    &:focus {
      box-shadow: none;
    }

    &:hover {
      outline: none;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`
