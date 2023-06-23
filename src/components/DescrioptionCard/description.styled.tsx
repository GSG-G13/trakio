import {
  Box, Card, CardMedia, Typography, styled,
} from '@mui/material';

export const DescriptionCardBox = styled(Box)(({ theme: { palette: { custom } } }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '12rem',
  background: custom.divider,
  borderRadius: '1.25rem',
  padding: '1.87rem',
  marginLeft: '1rem',
}));

export const ContentCard = styled(Card)(() => ({
  background: 'transparent',
  boxShadow: 'none',
  borderRadius: '0px',
}));

export const CardTitle = styled(Typography)(({ theme: { palette: { primary } } }) => ({
  fontSize: '2.25rem',
  color: primary.main,
}));

export const CardText = styled(Typography)(() => ({
  lineHeight: '2',
  letterSpacing: '.03rem',
  fontWeight: 'light',
  fontSize: '.87rem',
  color: '#FFDA3C',
}));

export const DescriptionImageCard = styled(Card)(() => ({
  background: 'transparent',
  boxShadow: 'none',
}));

export const CardImage = styled(CardMedia)(() => ({
  width: '10.12rem',
  height: '8.6rem',
}));
