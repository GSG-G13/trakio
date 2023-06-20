import React from 'react';
import { createTheme } from '@mui/material/styles';

  interface ICustom {
    background: React.CSSProperties['color'];
    white: React.CSSProperties['color'];
    black: React.CSSProperties['color'];
    purple: React.CSSProperties['color'];
    gray: React.CSSProperties['color'];
    green: React.CSSProperties['color'];
    orange: React.CSSProperties['color'];
  }

  declare module '@mui/material/styles' {
    interface PaletteOptions {
      custom: ICustom
    }

    interface Palette {
      custom: ICustom,
    }
  }

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFDA3C',
    },
    secondary: {
      main: '#343537',
    },
    custom: {
      background: '#1E1F21',
      white: '#FFFFFF',
      black: '#000000',
      purple: '#A9AAC0',
      gray: '#787486',
      green: '#68B266',
      orange: '#FFA500',
    },
  },

  typography: {
    fontFamily: ['Montserrat', 'Poppins'].join(','),
  },
});

export default theme;
