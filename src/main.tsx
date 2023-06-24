import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
// import { LoginPage } from './pages';
import theme from './theme';
import { Layout } from './components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <Layout />
    {/* <LoginPage /> */}
  </ThemeProvider>,
);
