import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  align-items: start;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 1.875rem 0;
`
