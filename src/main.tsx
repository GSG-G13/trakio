import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <h1 style={{ color: theme.palette.custom.black }}>Welcome Here, Happy Coding!</h1>
    </ThemeProvider>
  </React.StrictMode>,
);
