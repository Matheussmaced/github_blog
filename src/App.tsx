import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './components/Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
