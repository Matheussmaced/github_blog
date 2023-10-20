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
  color: ${(props) => props.theme.white};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const InformesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const UserPublicationsContainer = styled.div`
  width: 47%;
  background-color: ${(props) => props.theme['base-post']};
  margin: 3rem auto;
  padding: 2rem;

  border-radius: 18px;
`

export const UsePublicationsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  span {
    font-size: 1.25rem;
    width: 73%;
    margin-bottom: 1.25rem;
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const UserPublicationsDescription = styled.div`
  span {
    color: ${(props) => props.theme['base-text']};
  }
`
