import {
  Box, Button, Card, CardMedia, Typography, styled,
} from '@mui/material';

export const BasicCardBox = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  width: '45rem',
  background: '#343537',
  justifyContent: 'space-between',
  borderRadius: '1.25rem',
  padding: '1.87rem',
}));

export const ContentCard = styled(Card)(() => ({
  background: 'transparent',
  boxShadow: 'none',
  borderRadius: '0px',
}));

export const CardTitle = styled(Typography)(() => ({
  fontSize: '2.25rem',
  color: '#FFDA3C',
}));

export const CardText = styled(Typography)(() => ({
  lineHeight: '2',
  letterSpacing: '.03rem',
  fontWeight: 'light',
  fontSize: '.87rem',
  color: '#FFDA3C',
}));

export const CardButton = styled(Button)(() => ({
  width: '12.06rem',
  color: '#455A64',
  fontWeight: '600',
  borderRadius: '.6rem',
  '&:hover': {
    backgroundColor: '#FFDA3C',
  },
  textTransform: 'capitalize',
}));

export const ImageCard = styled(Card)(() => ({
  background: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  right: '2rem',
  bottom: '.93rem',
}));

export const CardImage = styled(CardMedia)(() => ({
  width: '18.12rem',
  height: '15.6rem',
}));
