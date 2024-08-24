import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

export const theme = extendTheme({
  socialMedia: {
    widthLeft: '15%',
    widthMain: '55%',
    widthRight: '30%'
  },
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#2b54ea'
    },
    background: {
      primary: '#f7f8fa',
      secondary: '#ffffff'
    },
    text: {
      primary: '#000000',
      secondary: '#65676b'
    },
    hashtag: {
      primary: '#1776f2'
    },
    error: {
      main: '#E23744'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          whiteSpace: 'nowrap',
          color: 'inherit',
          borderRadius: 'none',
          fontSize: 'inherit'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          minHeight: '80vh',
          minWidth: '75vw'
        }
      }
    }
  }

})