import { createTheme } from '@mui/material/styles';
import tinycolor from 'tinycolor2';




const theme = createTheme({
  palette: {
    primary: {
      light: tinycolor('#5069DE').lighten(5).toString(),
      main: tinycolor('#5069DE').toHexString(),
      dark: tinycolor('#5069DE').darken(5).toString(),
      contrastText: '#fff',
    },
    secondary: {
        light: tinycolor('#fff').lighten(5).toString(),
        main: tinycolor('#fff').toHexString(),
        dark: tinycolor('#fff').darken(5).toString(),
        contrastText: '#696969',
    },
    text: {
      primary: '#000000',
      secondary: '#696969'
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
    h1: {
        fontSize: 48,
        fontWeight: 500
    },
    h2: {
        fontSize: 32,
        fontWeight: 500
    },
    body1: {
        fontSize: 24,
        fontWeight: 400
    },
    body2: {
      fontSize: 22,
      fontWeight: 200
  },
    subtitle1: {
        fontSize: 16,
        fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;