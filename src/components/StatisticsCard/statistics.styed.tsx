import {
  Card, styled, CardContent,
} from '@mui/material';

export const StatisticsBox = styled(Card)(({ theme: { palette: { custom } } }) => ({
  marginTop: '.93rem',
  backgroundColor: custom.divider,
  color: custom.white,
  borderRadius: '.93rem',
  width: '12.5rem',
}));

export const StatisticsContent = styled(CardContent)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
}));
