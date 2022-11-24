import {red} from '@mui/material/colors'
import {createTheme} from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    common: {
        white: '#ffffff',
        black: '#000000',
        greyLight: '#d9d9d9',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme
