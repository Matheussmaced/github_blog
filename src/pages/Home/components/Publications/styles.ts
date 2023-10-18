import styled from 'styled-components'

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PublicationSubtitle = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 4.5rem 0 0.75rem;

  span {
    font-weight: bold;
    font-size: 1.125rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchBar = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-input']};
  border: ${(props) => props.theme['base-border']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
