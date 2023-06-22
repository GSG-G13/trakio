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
  background: theme.palette.custom.background,
  width: '70em',
  display: 'grid',
  gap: '2vw',
  gridTemplateColumns: 'auto auto auto auto',
  padding: '0.8vw',
  marginLeft: '1vw',
}));
export const Wrapper2 = styled(CardContent)(({ theme }) => ({
  background: theme.palette.custom.divider,
  borderRadius: 10,
  color: theme.palette.custom.white,
}));
export const WrapperPN = styled(Typography)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.custom.black,
  width: '7vw',
  borderRadius: 4,
  height: '2vw',
  overflow: 'hidden',
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
  background: theme.palette.custom.background,
  width: '30vw',
}));
export const WrapperH1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.white,
  fontSize: '2em',
  marginTop: '-8vh',
  marginBottom: '1vw',
  marginLeft: '1vw',
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
