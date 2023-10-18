import {
  PublicationSubtitle,
  PublicationsContainer,
  SearchBar,
  UsePublicationsHeader,
  UserPublicationsContainer,
  UserPublicationsDescription,
} from './styles'

export const Publications = () => {
  const informsContainer = [
    {
      id: 1,
      title: 'JavaScript data types and data structures',
      publishedAt: 'Há 1 dia',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
    },
  ]

  return (
    <PublicationsContainer>
      <PublicationSubtitle>
        <span>Publicações</span>
        <p>6 publicações</p>
      </PublicationSubtitle>

      <form>
        <SearchBar type="text" placeholder="Buscar conteúdo" />
      </form>

      {informsContainer.map((informs) => (
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
    </PublicationsContainer>
  )
}
