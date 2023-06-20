import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './pages/index.ts';
import theme from './theme/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>,
);
