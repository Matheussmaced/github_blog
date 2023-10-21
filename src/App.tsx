import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './components/Router'
import { UserProfileProvider } from './context/UserProfileContext'
import { UserReposityProvider } from './context/UserReposity'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProfileProvider>
          <UserReposityProvider>
            <Router />
          </UserReposityProvider>
        </UserProfileProvider>

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
