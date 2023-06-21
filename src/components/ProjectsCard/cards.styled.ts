import {
  styled,
  Card,
  Button,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import { MdDashboard } from 'react-icons/md';

export const Wrapper = styled(Card)(({ theme }) => ({
  background: theme.palette.custom.black,
  width: '50em',
  display: 'grid',
  gap: '3vw',
  gridTemplateColumns: 'auto auto auto',
  padding: '0.8vw',
  marginLeft: '15vw',
}));
export const Wrapper2 = styled(CardContent)(({ theme }) => ({
  background: theme.palette.custom.background,
  borderRadius: 10,
  color: theme.palette.custom.white,
  maxWidth: 289,
}));
export const WrapperPN = styled(Typography)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.custom.black,
  width: '7vw',
  borderRadius: 4,
  marginTop: '-3vw',
  marginLeft: '-1.2vw',
  marginBottom: '1vw',
  textAlign: 'center',
}));
export const WrapperDes = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.gray,
  fontSize: '1vw',
}));
export const WrapperApp = styled(CardContent)(({ theme }) => ({
  background: theme.palette.custom.black,
  width: '70vw',
}));
export const WrapperH1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.white,
  fontSize: '2em',
  marginBottom: '1vw',
  marginLeft: '15.5vw',
}));
export const WrapperUserName = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.white,
  display: 'flex',
  justifyContent: 'flex-end',
}));
export const WrapperUNDiv = styled(Typography)(({ theme }) => ({
  background: theme.palette.custom.white,
  color: theme.palette.custom.black,
  borderRadius: '50%',
  width: '3vw',
  height: '3vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1vw',
  marginRight: '0.5vw',
}));
export const WrappBtnDone = styled(Button)(({ theme }) => ({
  color: theme.palette.custom.green,
}));
export const WrapperBtnUD = styled(Button)(({ theme }) => ({
  color: theme.palette.custom.orange,
}));
export const WrapperIc = styled(MdDashboard)(({ theme }) => ({
  color: theme.palette.custom.white,
  marginRight: '0.6vw',
}));

export const WrappBtn = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));
