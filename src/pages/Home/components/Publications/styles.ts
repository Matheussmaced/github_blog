import * as Dialog from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom'
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

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
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

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;

  width: 50%;

  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  @media (max-width: 800px) {
    width: 90%;
  }
`

export const Close = styled(Dialog.Close)`
  margin-bottom: 1.25rem;

  background-color: transparent;
  border: none;
  border-radius: 2px;

  cursor: pointer;
`

export const ViewButton = styled.button`
  span {
    padding: 0.3rem;
    margin-top: 1rem;

    border-radius: 3px;
    display: flex;
    align-items: center;

    gap: 0.3rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  gap: 0.5rem;
  color: ${(props) => props.theme.blue};
`

export const Informations = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-label']};
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  gap: 0.5rem;

  strong {
    color: ${(props) => props.theme.blue};
  }
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`
