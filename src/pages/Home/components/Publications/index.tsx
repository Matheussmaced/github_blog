import { useContext, useState } from 'react'
import { differenceInHours } from 'date-fns'

import { useForm } from 'react-hook-form'

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

interface FormData {
  value: string
}

export const Publications = () => {
  const [searchResults, setSearchResults] = useState<userReposityType[] | null>(
    null,
  )

  const { register } = useForm<FormData>()

  const userReposity = useContext(UserReposityContext) as userReposityType[]

  const userProfile = useContext(UserProfileContext) as
    | userProfileProps[]
    | null

  if (!userProfile) {
    return null
  }

  if (!userReposity) {
    return null
  }

  function filterUserReposity(searchValue: string) {
    if (searchValue) {
      return userReposity.filter((user) =>
        user.name.toLowerCase().includes(searchValue),
      )
    }
    return userReposity
  }

  function handleSearch(data: FormData) {
    const searchValue = data.value.toLowerCase()
    const filteredReposity = filterUserReposity(searchValue)

    setSearchResults(filteredReposity)
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
            <SearchBar
              type="text"
              placeholder="Buscar conteúdo"
              {...register('value', { required: true })}
              onChange={(e) => handleSearch({ value: e.target.value })}
            />
          </form>

          <InformesContainer>
            {(searchResults || userReposity).map((user) => (
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
                          <span>
                            Há{' '}
                            {differenceInHours(
                              new Date(),
                              new Date(user.created_at),
                            ) >= 24
                              ? `${Math.floor(
                                  differenceInHours(
                                    new Date(),
                                    new Date(user.created_at),
                                  ) / 24,
                                )} dias`
                              : `${differenceInHours(
                                  new Date(),
                                  new Date(user.created_at),
                                )} horas`}
                          </span>
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
