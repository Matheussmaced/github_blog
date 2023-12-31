import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;

  a {
    width: 18%;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-weight: bold;
    transition: 1s;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 600px) {
    display: block;
    text-align: center;

    justify-content: center;
    margin: 0 auto;
  }
`

export const ProfileInforms = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    margin-top: 0.5rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;

    justify-content: center;
  }
`

export const Icons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 600px) {
    margin: 0 auto 1rem;
  }
`
