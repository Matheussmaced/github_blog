import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './components/Router'
import { UserProfileProvider } from './context/UserProfileContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProfileProvider>
          <Router />
        </UserProfileProvider>

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
