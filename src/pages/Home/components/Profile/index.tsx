import { useContext } from 'react'
import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'

import {
  Icons,
  ProfileContainer,
  ProfileDescription,
  ProfileInforms,
} from './styles'
import { defaultTheme } from '../../../../styles/themes/default'

import {
  UserProfileContext,
  userProfileProps,
} from '../../../../context/UserProfileContext'

export const Profile = () => {
  const userProfile = useContext(UserProfileContext) as
    | userProfileProps[]
    | null

  if (!userProfile) {
    return null
  }

  console.log(userProfile)

  return (
    <>
      <ProfileContainer>
        {userProfile.map((user: userProfileProps, index: number) => (
          <ProfileInforms key={index}>
            <img src={user.userAvatar} alt="Foto do usuario" width={148} />

            <ProfileDescription>
              <h2>{user.userName}</h2>

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
                  <p>{user.nickName}</p>
                </span>

                <span>
                  <Users
                    size={18}
                    weight="bold"
                    color={defaultTheme['base-label']}
                  />
                  <p>{user.followers}</p>
                </span>
              </Icons>
            </ProfileDescription>
          </ProfileInforms>
        ))}

        <a href="#">
          github <ArrowSquareOut weight="bold" />
        </a>
      </ProfileContainer>
    </>
  )
}
