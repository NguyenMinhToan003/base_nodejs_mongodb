import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

export const theme = extendTheme({
  socialMedia: {
    withLeft:'30%',
    withMain:'50%',
    withRight:'20%'
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
      secondary:'#65676b'
    },
    hastag:{
      primary:'#1776f2'
    }
  },
  components:{
    MuiButton:{
      styleOverrides: {
        root: {
          textTransform: 'none',
          whiteSpace: 'nowrap',
          color:'inherit'
        } }
    }
  }

})