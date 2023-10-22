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
import { Link } from 'react-router-dom'

export const Profile = () => {
  const userProfile = useContext(UserProfileContext) as
    | userProfileProps[]
    | null

  if (!userProfile) {
    return null
  }

  return (
    <>
      <ProfileContainer>
        {userProfile.map((user, index) => (
          <ProfileInforms key={index}>
            <img src={user.userAvatar} alt="Foto do usuario" width={148} />

            <ProfileDescription>
              <h2>{user.userName}</h2>

              <span>{user.bio}</span>

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
        <Link to="https://github.com/Matheussmaced" target="_blank">
          github <ArrowSquareOut weight="bold" />
        </Link>
      </ProfileContainer>
    </>
  )
}
