import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import router from './routes';
import THEME from './theme';
import AuthContext from './UserContext/AuthContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={THEME}>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </ThemeProvider>,
);
