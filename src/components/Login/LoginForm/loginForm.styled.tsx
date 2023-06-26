import { LoadingButton } from '@mui/lab';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Field, ErrorMessage } from 'formik';

export const EmailErrorMessage = styled(ErrorMessage)(() => ({
  position: 'absolute',
  top: '370px',
  left: '70px',
  right: '575px',
  transform: 'translate(-50%, -50%)',
  color: 'red',
  fontSize: '10px',
}));
export const PasswordErrorMessage = styled(ErrorMessage)(() => ({
  position: 'absolute',
  top: '450px',
  left: '392px',
  right: '575px',
  transform: 'translate(-50%, -50%)',
  color: 'red',
  fontSize: '10px',
  minWidth: '100%',
}));
export const EmailInput = styled(Field)(() => ({
  position: 'absolute',
  width: '380px',
  height: '54px',
  left: '12.3px',
  top: '300px',
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
  left: '12.3px',
  top: '380px',
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
  left: '350px',
  top: '380px',
  color: '#818098',
}));
export const SigninButton = styled(LoadingButton)(() => ({
  position: 'absolute',
  width: '380px',
  height: '54px',
  left: '12.3px',
  top: '465px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '26px',
  textAlign: 'center',
  color: '#1E1F21',
  textTransform: 'none',
}));
export const GooglePlusButton = styled(LoadingButton)(() => ({
  position: 'absolute',
  width: '380px',
  height: '54px',
  left: '12.3px',
  top: '528px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '26px',
  textAlign: 'center',
  color: '#1E1F21',
  backgroundColor: '#fff',
  textTransform: 'none',
}));

export const LoginImage = styled('img')(() => ({
  borderStyle: 'none',
  width: '600px',
  height: '600px',
  marginLeft: '450px',
  marginTop: '-210px',
}));
