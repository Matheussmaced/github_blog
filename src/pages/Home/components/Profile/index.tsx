import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import {
  Icons,
  ProfileContainer,
  ProfileDescription,
  ProfileInforms,
} from './styles'
import { defaultTheme } from '../../../../styles/themes/default'

import { userProfileProps } from '../..'

interface UserProfileProps {
  userProfile: userProfileProps
}

export const Profile = ({ userProfile }: UserProfileProps) => {
  console.log('USER', userProfile)

  return (
    <>
      <ProfileContainer>
        <ProfileInforms>
          <img src={userProfile.userAvatar} alt="Foto do usuario" width={148} />

          <ProfileDescription>
            <h2>{userProfile.userName}</h2>

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
                <p>{userProfile.nickName}</p>
              </span>

              <span>
                <Users
                  size={18}
                  weight="bold"
                  color={defaultTheme['base-label']}
                />
                <p>{userProfile.followers}</p>
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
