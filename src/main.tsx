import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
// import { LoginPage } from './pages';
import { Layout } from './components';
import router from './routes';
import THEME from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={THEME}>
    <Layout />
    {/* <LoginPage /> */}
    <RouterProvider router={router} />
  </ThemeProvider>,
);
