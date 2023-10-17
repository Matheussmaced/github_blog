import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Home } from '../pages/Home'
import { Repository } from '../pages/Repository'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="repository" element={<Repository />} />
      </Route>
    </Routes>
  )
}
