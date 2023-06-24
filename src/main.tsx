import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { LoginPage, HomePage } from './pages';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <HomePage />
    <LoginPage />
  </ThemeProvider>,
);
