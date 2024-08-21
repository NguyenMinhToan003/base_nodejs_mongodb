import Container from '@mui/material/Container'

import AppRouter from './routers/AppRouter'
function App() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <AppRouter />
      </Container>
    </>
  )
}

export default App
