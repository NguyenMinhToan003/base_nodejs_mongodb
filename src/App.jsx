import Container from '@mui/material/Container'
import Home from './pages/Home/Home'
function App() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <Home />
      </Container>
    </>
  )
}

export default App
