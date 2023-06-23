import { styled } from '@mui/material/styles';
import {
  Typography,
  Box,
  Input,
  Button,
} from '@mui/material';

const WrapBox = styled(Box)(() => ({
  margin: '1vw',
}));

const WrapTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.white,
  fontWeight: 'bold',
  fontSize: '2vw',
  marginBottom: '3vw',
}));
const WrapContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.white,
  marginTop: '1vw',
  fontWeight: 'bold',
  fontSize: '1.4vw',
}));
const WrapInput = styled(Input)(({ theme }) => ({
  width: '20vw',
  height: '3vw',
  borderRadius: '0.5vw',
  color: theme.palette.custom.white,
  background: theme.palette.custom.divider,
}));
const Boxes = styled(Box)(() => ({
  display: 'flex',
}));
const WrapDelete = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: theme.palette.custom.white,
}));
const WrapBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.custom.black,
  width: '10vw',
  height: '4vh',
  marginTop: '3vh',
}));

export {
  WrapTypo,
  WrapBox,
  WrapContent,
  WrapInput,
  Boxes,
  WrapDelete,
  WrapBtn,
};
