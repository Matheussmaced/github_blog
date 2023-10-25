import { useContext } from 'react'

import {
  UserProfileContext,
  userProfileProps,
} from '../../../../context/UserProfileContext'
import {
  Buttons,
  Close,
  Content,
  Description,
  Icons,
  Informations,
  InformesContainer,
  LinkContainer,
  Overlay,
  PublicationSubtitle,
  PublicationsContainer,
  SearchBar,
  UsePublicationsHeader,
  UserPublicationsContainer,
  UserPublicationsDescription,
  ViewButton,
} from './styles'
import {
  UserReposityContext,
  userReposityType,
} from '../../../../context/UserReposity'

import { dateFormatter } from '../../../../utils/formatter'

import * as Dialog from '@radix-ui/react-dialog'
import {
  ArrowCircleUpRight,
  CalendarBlank,
  GithubLogo,
  X,
} from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'

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
                  <p>{dateFormatter.format(new Date(user.created_at))}</p>
                </UsePublicationsHeader>

                <UserPublicationsDescription>
                  <span>{user.description}</span>
                </UserPublicationsDescription>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <ViewButton>
                      <span>ABRIR {<ArrowCircleUpRight size={22} />}</span>
                    </ViewButton>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Overlay />
                    <Content>
                      <Buttons>
                        <Close>
                          <X
                            color={defaultTheme.blue}
                            size={22}
                            weight="bold"
                          />
                        </Close>

                        <LinkContainer
                          to={`https://github.com/${user.full_name}`}
                          target="_blank"
                        >
                          <span>VER NO GITHUB</span>
                          <ArrowCircleUpRight size={22} />
                        </LinkContainer>
                      </Buttons>

                      <header>
                        <Dialog.Title>
                          <span>{user.name}</span>
                        </Dialog.Title>
                      </header>

                      <Informations>
                        <Icons>
                          <GithubLogo size={22} />
                          {userProfile.map((user) => user.nickName)}
                        </Icons>

                        <Icons>
                          <CalendarBlank size={22} />
                          <span>Há um dia</span>
                        </Icons>
                      </Informations>

                      <Description>
                        <span>
                          Linguagem predominante:
                          <strong> {user.language}</strong>
                        </span>

                        <span>
                          Visibilidade: <strong>{user.visibility}</strong>
                        </span>
                      </Description>
                    </Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </UserPublicationsContainer>
            ))}
          </InformesContainer>
        </div>
      ))}
    </PublicationsContainer>
  )
}
