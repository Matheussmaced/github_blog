import { ArrowCircleUp } from 'phosphor-react'
import { Profile } from './components/Profile'
import { Publications } from './components/Publications'
import { ArrowContainer, HomeContainer } from './styles'
import { defaultTheme } from '../../styles/themes/default'

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <Profile />

        <Publications />
      </HomeContainer>

      <ArrowContainer>
        <a href="#">
          <ArrowCircleUp size={30} color={defaultTheme.white} />
        </a>
      </ArrowContainer>
    </>
  )
}
