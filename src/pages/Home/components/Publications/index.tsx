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

import { dateFormatter } from '../../../../utils/formatter'

import * as Dialog from '@radix-ui/react-dialog'

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
              <Dialog.Root key={user.id}>
                <Dialog.Trigger>
                  <UserPublicationsContainer>
                    <UsePublicationsHeader>
                      <span>{user.name}</span>
                      <p>{dateFormatter.format(new Date(user.created_at))}</p>
                    </UsePublicationsHeader>

                    <Dialog.Portal>
                      <Dialog.Content>
                        <Dialog.Title>
                          <h1>teste</h1>
                        </Dialog.Title>
                      </Dialog.Content>
                    </Dialog.Portal>

                    <UserPublicationsDescription>
                      <span>{user.description}</span>
                    </UserPublicationsDescription>
                  </UserPublicationsContainer>
                </Dialog.Trigger>
              </Dialog.Root>
            ))}
          </InformesContainer>
        </div>
      ))}
    </PublicationsContainer>
  )
}
