import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import photoex from '../../../../assets/photoex.svg'
import {
  Icons,
  ProfileContainer,
  ProfileDescription,
  ProfileInforms,
} from './styles'
import { defaultTheme } from '../../../../styles/themes/default'

export const Profile = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileInforms>
          <img src={photoex} />

          <ProfileDescription>
            <h2>Cameron Williamson</h2>

            <span>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </span>

            <Icons>
              <span>
                <GithubLogo
                  size={18}
                  weight="bold"
                  color={defaultTheme['base-label']}
                />
                <p>cameronwll</p>
              </span>

              <span>
                <Users
                  size={18}
                  weight="bold"
                  color={defaultTheme['base-label']}
                />
                <p>32 seguidores</p>
              </span>
            </Icons>
          </ProfileDescription>
        </ProfileInforms>

        <a href="#">
          github <ArrowSquareOut weight="bold" />
        </a>
      </ProfileContainer>
    </>
  )
}
