import { LoadingButton } from '@mui/lab';
import { IconButton, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EmailInput = styled(TextField)(() => ({
  position: 'absolute',
  width: '406px',
  height: '60px',
  left: '18.3px',
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
}));

export const PasswordInput = styled(TextField)(() => ({
  position: 'absolute',
  width: '406px',
  height: '60px',
  left: '18.3px',
  top: '360px',
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
}));
export const CustomIconButton = styled(IconButton)(() => ({
  marginRight: '10px',
}));

export const SigninButton = styled(LoadingButton)(() => ({
  position: 'absolute',
  width: '406px',
  height: '60px',
  left: '18.3px',
  top: '470px',
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
  width: '406px',
  height: '60px',
  left: '18.3px',
  top: '550px',
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

export const LoginImage = styled('img')(() => ({
  borderStyle: 'none',
  width: '800px',
  height: '800px',
  marginLeft: '450px',
  marginTop: '-250px',
}));
