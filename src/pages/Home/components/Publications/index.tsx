import { useContext } from 'react'

import {
  UserProfileContext,
  userProfileProps,
} from '../../../../context/UserProfileContext'
import {
  InformesContainer,
  PublicationSubtitle,
  PublicationsContainer,
  SearchBar,
  UsePublicationsHeader,
  UserPublicationsContainer,
  UserPublicationsDescription,
} from './styles'
import {
  UserReposityContext,
  userReposityType,
} from '../../../../context/UserReposity'

export const Publications = () => {
  const userReposity = useContext(UserReposityContext) as
    | userReposityType[]
    | null

  const userProfile = useContext(UserProfileContext) as
    | userProfileProps[]
    | null

  if (!userProfile) {
    return null
  }

  if (!userReposity) {
    return null
  }

  console.log(userReposity)

  return (
    <PublicationsContainer>
      {userProfile.map((user, index) => (
        <div key={index}>
          <PublicationSubtitle>
            <span>Publicações</span>
            <p>{user.publicReposi} publicações</p>
          </PublicationSubtitle>

          <form>
            <SearchBar type="text" placeholder="Buscar conteúdo" />
          </form>

          <InformesContainer>
            {userReposity.map((user) => (
              <UserPublicationsContainer key={user.id}>
                <UsePublicationsHeader>
                  <span>{user.name}</span>
                  <p>{user.created_at}</p>
                </UsePublicationsHeader>

                <UserPublicationsDescription>
                  <span>{user.description}</span>
                </UserPublicationsDescription>
              </UserPublicationsContainer>
            ))}
          </InformesContainer>
        </div>
      ))}
    </PublicationsContainer>
  )
}
