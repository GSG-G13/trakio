import {
  styled,
  Card,
  Button,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import { MdDashboard } from 'react-icons/md';

export const Wrapper = styled(Card)(({ theme: { palette: { custom } } }) => ({
  background: custom.background,
  display: 'grid',
  gap: '1.5rem 1rem',
  boxShadow: 'none',
  gridTemplateColumns: 'auto auto auto',
  padding: '0.8vw',
  marginLeft: '1vw',
}));
export const Wrapper2 = styled(CardContent)(({ theme: { palette: { custom } } }) => ({
  background: custom.divider,
  borderRadius: 10,
  color: custom.white,
  maxWidth: '330px',
}));
export const WrapperPN = styled(Typography)(({ theme: { palette: { custom, primary } } }) => ({
  background: primary.main,
  color: custom.darkFont,
  width: '7vw',
  borderRadius: '4px',
  height: '2vw',
  overflow: 'hidden',
  marginTop: '-3vw',
  marginLeft: '-1.2vw',
  marginBottom: '1vw',
  textAlign: 'center',
  fontWeight: 'bold',
}));
export const WrapperDes = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.gray,
  // fontSize: '1vw',
}));
export const WrapperApp = styled(CardContent)(({ theme: { palette: { custom } } }) => ({
  background: custom.background,
  marginTop: '-2rem',
  marginLeft: '-2rem',

  // width: '30vw',
}));
export const WrapperH1 = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  fontSize: '1.5em',
  marginTop: '-8vh',
  marginBottom: '1vw',
  marginLeft: '1vw',
}));
export const WrappBtnDone = styled(Button)(({ theme: { palette: { custom } } }) => ({
  color: custom.green,
}));
export const WrapperBtnUD = styled(Button)(({ theme: { palette: { custom } } }) => ({
  color: custom.orange,
}));
export const WrapperIc = styled(MdDashboard)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  marginRight: '0.6vw',
}));
export const WrappBtn = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));
