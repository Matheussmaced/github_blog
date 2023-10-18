import { Profile } from './components/Profile'
import { Publications } from './components/Publications'
import { HomeContainer } from './styles'

import { useState, useEffect } from 'react'

export const Home = () => {
  const [userProfile, setUserProfile] = useState([])

  async function loadProfileGithub() {
    const response = await fetch('https://api.github.com/users/Matheussmaced')
    const data = await response.json()

    setUserProfile(data)
  }

  useEffect(() => {
    loadProfileGithub()
  }, [])

  console.log(userProfile)

  return (
    <HomeContainer>
      <Profile />
      <Publications />
    </HomeContainer>
  )
}
