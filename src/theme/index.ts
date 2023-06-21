import React from 'react';
import { createTheme } from '@mui/material/styles';

interface iCustom {
  background: React.CSSProperties['color'];
  white: React.CSSProperties['color'];
  black: React.CSSProperties['color'];
  purple: React.CSSProperties['color'];
  divider: React.CSSProperties['color'];
  fontGray: React.CSSProperties['color'];
}

declare module '@mui/material/styles' {
  interface Palette {
    custom: iCustom;
  }
  interface PaletteOptions {
    custom: Partial<iCustom>;
  }
}

const THEME = createTheme({
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
      fontGray: '#B8B8B8',
    },
  },

  typography: {
    fontFamily: 'Montserrat',
    h6: {
      fontSize: 18,
      fontWeight: '500',
    },
    body1: {
      fontSize: 16,
    },
  },
});

export default THEME;
