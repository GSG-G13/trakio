import { LoadingButton } from '@mui/lab';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Field, ErrorMessage } from 'formik';

export const EmailErrorMessage = styled(ErrorMessage)(() => ({
  position: 'relative',
  top: '6.2rem',
  left: '25rem',
  color: 'red',
  fontSize: '0.625rem',
}));

export const PasswordErrorMessage = styled(ErrorMessage)(() => ({
  position: 'relative',
  top: '15rem',
  left: '25rem',
  color: 'red',
  fontSize: '0.625rem',
  minWidth: '100%',
}));

export const UsernameErrorMessage = styled(ErrorMessage)(() => ({
  position: 'relative',
  top: '1.825rem',
  left: '25rem',
  color: 'red',
  fontSize: '0.625rem',
  minWidth: '100%',
}));

export const PhoneErrorMessage = styled(ErrorMessage)(() => ({
  position: 'relative',
  top: '10.5rem',
  left: '25rem',
  color: 'red',
  fontSize: '0.625rem',
  minWidth: '100%',
}));

export const UsernameInput = styled(Field)(() => ({
  position: 'absolute',
  width: '23.75rem',
  height: '3.375rem',
  top: '15.625rem',
  right: '0.76875rem',
  bottom: '1.25rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.375rem',
  lineHeight: '1.6875rem',
  color: '#818098',
  backgroundColor: '#282A36',
  border: '1px solid #818098',
  borderRadius: '0.5rem',
  '::placeholder': {
    fontSize: '1rem',
    padding: '0.625rem',

  },
}));

export const EmailInput = styled(Field)(() => ({
  position: 'absolute',
  width: '23.75rem',
  height: '3.375rem',
  right: '0.76875rem',
  top: '20.625rem',
  bottom: '1.25rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.375rem',
  lineHeight: '1.6875rem',
  color: '#818098',
  backgroundColor: '#282A36',
  border: '1px solid #818098',
  borderRadius: '0.5rem',
  '::placeholder': {
    fontSize: '1rem',
    padding: '0.625rem',
  },
}));

export const PhoneInput = styled(Field)(() => ({
  position: 'absolute',
  width: '23.75rem',
  height: '3.375rem',
  right: '0.76875rem',
  top: '25.625rem',
  bottom: '1.25rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.375rem',
  lineHeight: '1.6875rem',
  color: '#818098',
  backgroundColor: '#282A36',
  border: '1px solid #818098',
  borderRadius: '0.5rem',
  '::placeholder': {
    fontSize: '1rem',
    padding: '0.625rem',
  },
}));

export const PasswordInput = styled(Field)(() => ({
  position: 'absolute',
  width: '23.75rem',
  height: '3.375rem',
  right: '0.76875rem',
  top: '30.625rem',
  bottom: '1.25rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.375rem',
  lineHeight: '1.6875rem',
  color: '#818098',
  backgroundColor: '#282A36',
  border: '1px solid #818098',
  borderRadius: '0.5rem',
  '::placeholder': {
    fontSize: '1rem',
    padding: '0.625rem',
  },
}));

export const CustomIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: '2.5rem',
  color: '#818098',
  top: '31.1875rem',
}));

export const SignupButton = styled(LoadingButton)(() => ({
  position: 'absolute',
  width: '23.75rem',
  height: '3.375rem',
  right: '0.76875rem',
  top: '35.625rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1.3125rem',
  lineHeight: '1.6225rem',
  textAlign: 'center',
  color: '#1E1F21',
  textTransform: 'none',
}));

export const GooglePlusButton = styled(LoadingButton)(() => ({
  position: 'absolute',
  width: '23.75rem',
  height: '3.375rem',
  right: '0.76875rem',
  top: '40rem',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '1.3125rem',
  lineHeight: '1.625rem',
  textAlign: 'center',
  color: '#1E1F21',
  backgroundColor: '#fff',
  textTransform: 'none',
}));

export const SignupImage = styled('img')(() => ({
  position: 'absolute',
  borderStyle: 'none',
  width: '37.5rem',
  height: '37.5rem',
  left: '6.5rem',
  top: '150px',
}));
