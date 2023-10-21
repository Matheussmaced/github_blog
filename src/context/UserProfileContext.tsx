import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface userProfileProps {
  userAvatar: string
  userName: string
  followers: string
  nickName: string
  publicReposi: number
  bio: string
}

interface UserProfileProviderProps {
  children: ReactNode
}

export const UserProfileContext = createContext<userProfileProps[] | null>(null)

export const UserProfileProvider = ({ children }: UserProfileProviderProps) => {
  const [userProfile, setUserProfile] = useState<userProfileProps[]>([])

  async function loadProfileGithub() {
    const response = await api.get('/Matheussmaced')

    const userAvatar = response.data.avatar_url
    const userName = response.data.name
    const followers = response.data.followers
    const nickName = response.data.login
    const bio = response.data.bio

    const publicReposi = response.data.public_repos

    const userProfileInfos = {
      userAvatar,
      userName,
      followers,
      nickName,
      publicReposi,
      bio,
    }
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
