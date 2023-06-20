import React from 'react';
import { createTheme } from '@mui/material/styles';

  interface ICustom {
    background: React.CSSProperties['color'];
    white: React.CSSProperties['color'];
    black: React.CSSProperties['color'];
    purple: React.CSSProperties['color'];
    fontGray: React.CSSProperties['color'];
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
      fontGray: '#B8B8B8',
    },

  },

  typography: {
    fontFamily: ['Montserrat', 'Poppins'].join(','),
    h6: {
      fontSize: 18,
      fontWeight: '500',
    },
    body1: {
      fontSize: 16,
    },
  },
});

export default theme;
