import { createTheme } from '@mui/material';

export default createTheme({
  typography: {
    fontSize: 13,
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: '#160B8C',
      dark: '#07004D',
      light: '#D2DDFC',
    },
    secondary: {
      main: '#d01317',
    },
    grey: {
      A100: '#D5D5D5',
      A200: '#B7B7B7',
      '50': '#F5F5F5',
      '100': '#616161',
      '200': '#6E6B7B',
      '400': '#BDBDBD',
      '900': '#303030',
      A700: '#212121',
    },
    error: {
      main: '#E31B0C',
    },
    common: {
      black: '#0E0E2C',
    },
    success: {
      main: '#4CAF50',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});
