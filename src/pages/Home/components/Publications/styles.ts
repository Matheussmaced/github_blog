import styled from 'styled-components'

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  button {
    display: flex;
    background-color: transparent;
    width: 100%;
    margin: 0 auto;

    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.white};

    &:focus {
      box-shadow: none;
    }
  }
`

export const UserPublicationsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-post']};
  margin: 3rem auto;
  padding: 2rem;

  border-radius: 18px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
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
