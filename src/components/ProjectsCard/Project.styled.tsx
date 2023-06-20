import {
  styled,
  Card,
  Button,
  CardContent,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const Wrapper = styled(Card)(({ theme }) => ({
  background: theme.palette.custom.black,
  height: '100%',
  display: 'grid',
  gap: '52px',
  gridTemplateColumns: 'auto auto auto',
  padding: '10px',
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
  width: '100px',
  borderRadius: 4,
  marginTop: '-40px',
  marginBottom: '15px',
  textAlign: 'center',
  marginRight: '20px',
}));
export const WrapperDes = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.gray,
  fontSize: '12px',
}));
export const WrapperApp = styled(CardContent)(({ theme }) => ({
  background: theme.palette.custom.black,
  width: '995px',
}));
export const WrapperH1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.white,
  fontSize: '27px',
  marginBottom: '10px',
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
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '15px',
  marginRight: '5px',
}));
export const WrappBtnDone = styled(Button)(({ theme }) => ({
  color: theme.palette.custom.green,
}));
export const WrapperBtnUD = styled(Button)(({ theme }) => ({
  color: theme.palette.custom.orange,
}));
export const WrapperIc = styled(DashboardIcon)(({ theme }) => ({
  color: theme.palette.custom.white,
  marginRight: '10px',
}));
