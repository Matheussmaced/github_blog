import effect1 from '../../assets/effect1.svg'
import effect2 from '../../assets/effect2.svg'
import logo from '../../assets/logo.svg'

import { Effects, HeaderContainer, Logo, LogoContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Effects src={effect1} alt="linhas azuis" />

      <LogoContainer>
        <Logo
          src={logo}
          alt="sinal de mais com underline e abaixo escrito github blog"
        />
      </LogoContainer>

      <Effects src={effect2} alt="linhas azuis" />
    </HeaderContainer>
  )
}
