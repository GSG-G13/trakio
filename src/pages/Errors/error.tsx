import {
  styled,
  Container,
} from '@mui/material';

const BigBox = styled('body')({
  margin: 0,
  padding: 0,
  fontFamily: 'Tomorrow, sans-serif',
  height: '97vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});
const TextContainer = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(2),
}));

const AstronautContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const Image = styled('img')({
  width: '12.5rem',
});

export {
  TextContainer,
  AstronautContainer,
  Image,
  BigBox,
};
