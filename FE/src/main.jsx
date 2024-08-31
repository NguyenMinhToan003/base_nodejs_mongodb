import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { theme } from './theme.js'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import { ConfirmProvider } from 'material-ui-confirm'
import { Bounce, ToastContainer } from 'react-toastify'
import './main.css'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store from '~/redux/store'
createRoot(document.getElementById('root')).render(
  <CssVarsProvider theme={theme}>
    <ConfirmProvider defaultOptions={
      {
        title: '',
        confirmationText: 'Confirm',
        cancellationText: 'Close'
      }
    }>
      <BrowserRouter>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
        <ToastContainer
          position='bottom-left'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
          transition={Bounce}
        />
      </BrowserRouter>
    </ConfirmProvider>
  </CssVarsProvider>
)