import { Profile } from './components/Profile'
import { Publications } from './components/Publications'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Profile />
      <Publications />
    </HomeContainer>
  )
}
