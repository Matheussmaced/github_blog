import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserReposityProviderProps {
  children: ReactNode
}

export interface userReposityType {
  namesRepositys: string
  id: number
  name: string
  created_at: string
  description: string
  full_name: string
  language: string
  visibility: string
}

export const UserReposityContext = createContext<userReposityType[]>([])

export const UserReposityProvider = ({
  children,
}: UserReposityProviderProps) => {
  const [userReposity, setUserReposity] = useState<userReposityType[]>([])

  async function loadReposityUser() {
    const response = await api.get('/Matheussmaced/repos')

    const infos = response.data

    setUserReposity(infos)
  }

  useEffect(() => {
    loadReposityUser()
  }, [])

  return (
    <UserReposityContext.Provider value={userReposity}>
      {children}
    </UserReposityContext.Provider>
  )
}
