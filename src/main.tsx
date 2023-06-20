import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import './index.css';
import ProjectsCard from './components';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <ProjectsCard />
  </ThemeProvider>,
);
