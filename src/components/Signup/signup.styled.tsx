import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import 'typeface-montserrat';

export const CustomTypography1 = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  position: 'absolute',
  width: '18.8125rem',
  height: '2.125rem',
  right: '6.25rem',
  top: '11.25rem',
  fontSize: '1.5625rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
}));

export const CustomTypography2 = styled(Typography)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  position: 'absolute',
  width: '19.75rem',
  height: '3.25rem',
  right: '5.3125rem',
  top: '8.805rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1.875rem',
}));

export const FormContent = styled('div')(() => ({
  maxWidth: '23.75rem',
  alignItems: 'center',
  marginLeft: '1.14375rem',
  marginTop: '17.555rem',
}));

export const BodyContainer = styled(Container)(({ theme: { palette: { custom } } }) => ({
  position: 'absolute',
  height: '100vh',
  top: '0rem',
  left: '0rem',
  backgroundColor: custom.purple,
}));

export const CustomContainer = styled(Container)(({ theme: { palette: { custom } } }) => ({
  position: 'absolute',
  width: '50.875rem',
  height: '100vh',
  right: '-3.7rem',
  top: '0rem',
  background: custom.background,
  borderRadius: '4.125rem',
  borderColor: custom.white,
}));

export const DontHaveAcount = styled(Typography)(() => ({
  position: 'absolute',
  top: '44.375rem',
  fontSize: '0.6875rem',
  right: '10.625rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  color: '#777777',
}));

export const SigninText = styled(Typography)(() => ({
  position: 'absolute',
  top: '44.375rem',
  right: '7.8125rem',
  fontSize: '.75rem',
  color: '#FFDA3C',
}));
