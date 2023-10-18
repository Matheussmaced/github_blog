import { Profile } from './components/Profile'
import { Publications } from './components/Publications'
import { HomeContainer } from './styles'

import { useState, useEffect } from 'react'

export const Home = () => {
  const [userProfile, setUserProfile] = useState<string[]>([])

  async function loadProfileGithub() {
    const response = await fetch('https://api.github.com/users/Matheussmaced')
    const data = await response.json()

    const userAvatar = data.avatar_url

    setUserProfile((prevUserProfile) => [...prevUserProfile, userAvatar])
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
