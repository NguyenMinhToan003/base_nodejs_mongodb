import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { theme } from './theme.js'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import { ConfirmProvider } from 'material-ui-confirm'
import './main.css'
createRoot(document.getElementById('root')).render(
  <CssVarsProvider theme={theme}>
    <ConfirmProvider defaultOptions={
      {
        title: 'Are you sure?',
        confirmationText: '',
        cancellationText: 'Close'
      }
    }>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ConfirmProvider>
  </CssVarsProvider>
)
