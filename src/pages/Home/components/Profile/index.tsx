import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import photoex from '../../../../assets/photoex.svg'
import {
  Icons,
  ProfileContainer,
  ProfileDescription,
  ProfileInforms,
} from './styles'

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
                <GithubLogo />
                <p>cameronwll</p>
              </span>

              <span>
                <Users />
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
