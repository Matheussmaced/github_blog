import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserReposityProviderProps {
  children: ReactNode
}

interface userReposityType {
  nameRepositys: string
}

export const UserReposityContext = createContext<userReposityType[] | null>(
  null,
)

export const UserReposityProvider = ({
  children,
}: UserReposityProviderProps) => {
  const [userReposity, setUserReposity] = useState<userReposityType[]>([])

  async function loadReposityUser() {
    const response = await api.get('/Matheussmaced/repos')
    const nameRepositys = response.data.name

    const infosRepositys = {
      nameRepositys,
    }

    setUserReposity((prevUserReposity) => [...prevUserReposity, infosRepositys])
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
