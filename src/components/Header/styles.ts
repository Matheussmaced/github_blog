import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  align-items: center;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 1.875rem 0;
`

export const Effects = styled.img`
  @media (max-width: 958px) {
    width: 30%;
  }
`
