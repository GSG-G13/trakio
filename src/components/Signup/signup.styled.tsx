import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import 'typeface-montserrat';

export const CustomTypography1 = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  position: 'absolute',
  width: '301px',
  height: '34px',
  right: '100px',
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
  right: '85px',
  top: '140.88px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '30px',
}));
export const FormContent = styled('div')(() => ({
  maxWidth: '380px',
  alignItems: 'center',
  marginLeft: '18.3px',
  marginTop: '280.88px',
}));
export const BodyContainer = styled(Container)(({ theme: { palette: { custom } } }) => ({
  position: 'absolute',
  height: '100vh',
  top: '0px',
  left: '0px',
  backgroundColor: custom.purple,
}));
export const CustomContainer = styled(Container)(({ theme: { palette: { custom } } }) => ({
  position: 'absolute',
  width: '50.875rem',
  height: '100vh',
  right: '-3.7rem',
  top: '0rem',
  background: custom.background,
  borderRadius: '66px',
  borderColor: custom.white,
}));

export const DontHaveAcount = styled(Typography)(() => ({
  position: 'absolute',
  top: '610px',
  fontSize: '12px',
  left: '-30px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  color: '#777777',
}));
export const SigninText = styled(Typography)(() => ({
  position: 'absolute',
  top: '0px',
  left: '148px',
  fontSize: '14px',
  color: '#FFDA3C',
}));
