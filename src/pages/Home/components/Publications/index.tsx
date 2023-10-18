import { PublicationSubtitle, PublicationsContainer, SearchBar } from './styles'

export const Publications = () => {
  return (
    <PublicationsContainer>
      <PublicationSubtitle>
        <span>Publicações</span>
        <p>6 publicações</p>
      </PublicationSubtitle>

      <form>
        <SearchBar type="text" placeholder="Buscar conteúdo" />
      </form>
    </PublicationsContainer>
  )
}
