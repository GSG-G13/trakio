import { LoadingButton } from '@mui/lab';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Field, ErrorMessage } from 'formik';

export const EmailErrorMessage = styled(ErrorMessage)(() => ({
  position: 'absolute',
  top: '374px',
  left: '70px',
  right: '650px',
  transform: 'translate(-50%, -50%)',
  color: 'red',
  fontSize: '10px',
}));

export const PasswordErrorMessage = styled(ErrorMessage)(() => ({
  position: 'absolute',
  top: '460px',
  left: '430px',
  right: '650px',
  transform: 'translate(-50%, -50%)',
  color: 'red',
  fontSize: '10px',
  minWidth: '100%',
}));
export const UsernameInput = styled(Field)(() => ({
  position: 'absolute',
  width: '380px',
  height: '54px',
  top: '250px',
  right: '12.3px',
  bottom: '20px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  lineHeight: '27px',
  color: '#818098',
  backgroundColor: '#282A36',
  border: '1px solid #818098',
  borderRadius: '8px',
  '::placeholder': {
    fontSize: '16px',
    padding: '10px',

  },
}));
export const EmailInput = styled(Field)(() => ({
  position: 'absolute',
  width: '380px',
  height: '54px',
  right: '12.3px',
  top: '330px',
  bottom: '20px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  lineHeight: '27px',
  color: '#818098',
  backgroundColor: '#282A36',
  border: '1px solid #818098',
  borderRadius: '8px',
  '::placeholder': {
    fontSize: '16px',
    padding: '10px',
  },
}));

export const PhoneInput = styled(Field)(() => ({
  position: 'absolute',
  width: '380px',
  height: '54px',
  right: '12.3px',
  top: '410px',
  bottom: '20px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  lineHeight: '27px',
  color: '#818098',
  backgroundColor: '#282A36',
  border: '1px solid #818098',
  borderRadius: '8px',
  '::placeholder': {
    fontSize: '16px',
    padding: '10px',
  },
}));
export const PasswordInput = styled(Field)(() => ({
  position: 'absolute',
  width: '380px',
  height: '54px',
  right: '12.3px',
  top: '490px',
  bottom: '20px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  lineHeight: '27px',
  color: '#818098',
  backgroundColor: '#282A36',
  border: '1px solid #818098',
  borderRadius: '8px',
  '::placeholder': {
    fontSize: '16px',
    padding: '10px',
  },
}));
export const CustomIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: '40px',
  color: '#818098',
  top: '499px',
}));

export const SignupButton = styled(LoadingButton)(() => ({
  position: 'absolute',
  width: '380px',
  height: '54px',
  right: '12.3px',
  top: '570px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '21px',
  lineHeight: '26px',
  textAlign: 'center',
  color: '#1E1F21',
  textTransform: 'none',
}));
export const GooglePlusButton = styled(LoadingButton)(() => ({
  position: 'absolute',
  width: '380px',
  height: '54px',
  right: '12.3px',
  top: '640px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '21px',
  lineHeight: '26px',
  textAlign: 'center',
  color: '#1E1F21',
  backgroundColor: '#fff',
  textTransform: 'none',
}));

export const SignupImage = styled('img')(() => ({
  borderStyle: 'none',
  width: '800px',
  height: '800px',
  marginLeft: '95px',
  marginTop: '-250px',
}));
