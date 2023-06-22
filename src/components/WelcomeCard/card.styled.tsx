import {
  Box, Button, Card, CardMedia, Typography, styled,
} from '@mui/material';

export const BasicCardBox = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  width: '740px',
  background: '#343537',
  justifyContent: 'space-between',
  borderRadius: '20px',
  padding: '30px',
}));

export const ContentCard = styled(Card)(()=> ({
  background: 'transparent',
  boxShadow: 'none',
  borderRadius: '0px',
}));

export const CardTitle = styled(Typography)(() => ({
  fontSize: '36px',
  color: '#FFDA3C',
}));

export const CardText = styled(Typography)(() => ({
  lineHeight: '2',
  letterSpacing: '.5px',
  fontWeight: 'light',
  fontSize: '14px',
  color: '#FFDA3C',
}));

export const CardButton = styled(Button)(() => ({
  width: '193px',
  color: '#455A64',
  fontWeight: '400',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#FFDA3C',
  },
}));

export const ImageCard = styled(Card)(() => ({
  background: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  right: '32px',
  bottom: '15px',
}));

export const CardImage = styled(CardMedia)(() => ({
  width: '290px',
  height: '250px',
}));
