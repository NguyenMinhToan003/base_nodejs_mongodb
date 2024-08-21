import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { theme } from './theme.js'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import './main.css'
createRoot(document.getElementById('root')).render(
  <CssVarsProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline/>
      <App />
    </BrowserRouter>
  </CssVarsProvider>
)
