import React from 'react';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom: {
      background: React.CSSProperties['color'];
      white: React.CSSProperties['color'];
      black: React.CSSProperties['color'];
      purple: React.CSSProperties['color'];
      divider: React.CSSProperties['color'];
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFDA3C',
    },
    secondary: {
      main: '#3435373d',
    },
    custom: {
      background: '#1E1F21',
      white: '#FFFFFF',
      black: '#000000',
      purple: '#A9AAC0',
      divider: '#343537',
    },
  },

  typography: {
    fontFamily: ['Montserrat', 'Poppins'].join(','),
  },
});

export default theme;
