import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import 'typeface-montserrat';

export const CustomTypography1 = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  position: 'absolute',
  width: '301px',
  height: '34px',
  left: '18.3px',
  top: '124px',
  fontSize: '28px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
}));
export const CustomTypography2 = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  position: 'absolute',
  width: '316px',
  height: '52px',
  left: '18.3px',
  top: '180.88px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '43px',
}));
export const FormContent = styled('div')(() => ({
  maxWidth: '380px',
  alignItems: 'center',
  marginLeft: '18.3px',
  marginTop: '280.88px',
}));
export const BodyContainer = styled(Container)(({ theme: { palette: { custom } } }) => ({
  position: 'absolute',
  height: '50.6rem',
  top: '0px',
  right: '0px',
  backgroundColor: custom.purple,
}));
export const CustomContainer = styled(Container)(({ theme: { palette: { custom } } }) => ({
  position: 'absolute',
  width: '50.875rem',
  height: '50.6rem',
  left: '-3.7rem',
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
export const SignupText = styled(Typography)(() => ({
  position: 'absolute',
  top: '0px',
  left: '148px',
  fontSize: '14px',
  color: '#FFDA3C',
}));
