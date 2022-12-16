import 'react-toastify/dist/ReactToastify.css';

import './assets/fonts/lustria.woff';
import './assets/fonts/raleway.woff';
import './assets/fonts/retro.woff';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';

import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
