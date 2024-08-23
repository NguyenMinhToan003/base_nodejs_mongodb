import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

export const theme = extendTheme({
  socialMedia: {
    widthLeft: '15%',
    widthMain: '55%',
    widthRight: '30%'
  },
  palette: {
    primary: {
      main: '#DEE1E6'
    },
    background: {
      primary: '#f7f8fa',
      secondary: '#FFFFFF'
    },
    text: {
      primary: '#000000',
      secondary: '#65676b'
    },
    hashtag: {
      primary: '#1776f2'
    },
    error: {
      main: '#ff0000'
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