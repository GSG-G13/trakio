import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import 'typeface-montserrat';

export const CustomTypography1 = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  position: 'absolute',
  width: '301px',
  height: '34px',
  left: '12.3px',
  top: '180px',
  fontSize: '25px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
}));
export const CustomTypography2 = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  position: 'absolute',
  width: '316px',
  height: '52px',
  left: '12.3px',
  top: '220.88px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '30px',
}));
export const FormContent = styled('div')(() => ({
  maxWidth: '380px',
  alignItems: 'center',
  marginLeft: '12.3px',
  marginTop: '280.88px',
}));
export const BodyContainer = styled(Container)(({ theme: { palette: { custom } } }) => ({
  position: 'absolute',
  height: '100vh',
  top: '0px',
  right: '0px',
  backgroundColor: custom.purple,
}));
export const CustomContainer = styled(Container)(({ theme: { palette: { custom } } }) => ({
  position: 'absolute',
  width: '46.875rem',
  height: '100vh',
  left: '-3.7rem',
  top: '0rem',
  background: custom.background,
  borderRadius: '66px',
  borderColor: custom.white,
}));

export const DontHaveAcount = styled(Typography)(() => ({
  position: 'absolute',
  top: '585px',
  fontSize: '11px',
  left: '-30px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  color: '#777777',
}));
export const SignupText = styled(Typography)(() => ({
  position: 'absolute',
  top: '585px',
  left: '107px',
  fontSize: '12px',
  color: '#FFDA3C',
}));
