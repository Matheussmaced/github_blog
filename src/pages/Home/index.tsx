import { Profile } from './components/Profile'
import { Publications } from './components/Publications'
import { HomeContainer } from './styles'

import { useState, useEffect } from 'react'

export interface userProfileProps {
  userAvatar: string
  userName: string
  followers: string
  nickName: string
}

export const Home = () => {
  const [userProfile, setUserProfile] = useState<userProfileProps>({
    userAvatar: '',
    userName: '',
    followers: '',
    nickName: '',
  })

  async function loadProfileGithub() {
    const response = await fetch('https://api.github.com/users/Matheussmaced')
    /* const reponseReposity = await fetch(
      'https://api.github.com/users/Matheussmaced/subscriptions',
    )
    const dataReposity = await reponseReposity.json()
    */
    const data = await response.json()

    console.log(data)
    const userAvatar = data.avatar_url
    const userName = data.name
    const followers = data.followers
    const nickName = data.login

    const userProfileInfos = { userAvatar, userName, followers, nickName }
    setUserProfile(userProfileInfos)
  }

  useEffect(() => {
    loadProfileGithub()
  }, [])

  return (
    <HomeContainer>
      <Profile userProfile={userProfile} />
      <Publications />
    </HomeContainer>
  )
}
