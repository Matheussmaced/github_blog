import { useContext, useState } from 'react'

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

interface postsType {
  id: number
  title: string
  publishedAt: string
  description: string
}

export const Publications = () => {
  const [posts] = useState<postsType[]>([
    {
      id: 1,
      title: 'JavaScript data types and data structures',
      publishedAt: 'Há 1 dia',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
    },
    {
      id: 2,
      title: 'JavaScript data types and data structures',
      publishedAt: 'Há 1 dia',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
    },
  ])

  const userProfile = useContext(UserProfileContext) as
    | userProfileProps[]
    | null

  if (!userProfile) {
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
            {posts.map((informs) => (
              <UserPublicationsContainer key={informs.id}>
                <UsePublicationsHeader>
                  <span>{informs.title}</span>
                  <p>{informs.publishedAt}</p>
                </UsePublicationsHeader>

                <UserPublicationsDescription>
                  <span>{informs.description}</span>
                </UserPublicationsDescription>
              </UserPublicationsContainer>
            ))}
          </InformesContainer>
        </div>
      ))}
    </PublicationsContainer>
  )
}
