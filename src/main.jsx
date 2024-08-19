import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { theme } from './theme.js'
import CssBaseline from '@mui/material/CssBaseline'
// import ConfirmProvider from 'material-ui-confirm'
createRoot(document.getElementById('root')).render(
  <CssVarsProvider theme={theme}>
    <StrictMode>
      <CssBaseline/>
      <App />
    </StrictMode>
  </CssVarsProvider>
)
