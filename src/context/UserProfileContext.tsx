import { createContext, ReactNode, useEffect, useState } from 'react'

export interface userProfileProps {
  userAvatar: string
  userName: string
  followers: string
  nickName: string
}

interface UserProfileProviderProps {
  children: ReactNode
}

export const UserProfileContext = createContext<userProfileProps[] | null>(null)

export const UserProfileProvider = ({ children }: UserProfileProviderProps) => {
  const [userProfile, setUserProfile] = useState<userProfileProps[]>([])

  async function loadProfileGithub() {
    const response = await fetch('https://api.github.com/users/Matheussmaced')
    /* const reponseReposity = await fetch(
      'https://api.github.com/users/Matheussmaced/subscriptions',
    )
    const dataReposity = await reponseReposity.json()
    */
    const data = await response.json()

    const userAvatar = data.avatar_url
    const userName = data.name
    const followers = data.followers
    const nickName = data.login

    const userProfileInfos = { userAvatar, userName, followers, nickName }
    setUserProfile((prevProfile) => [...prevProfile, userProfileInfos])
  }

  useEffect(() => {
    loadProfileGithub()
  }, [])

  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
    </UserProfileContext.Provider>
  )
}
