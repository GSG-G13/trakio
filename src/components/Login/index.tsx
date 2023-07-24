import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useNavigate, Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import ReactLogo from '/assets/logo.svg';

import LoginForm from './LoginForm';
import {
  BodyContainer,
  CustomContainer,
  CustomTypography1,
  CustomTypography2,
  FormContent,
  DontHaveAcount,
  SignupText,
} from './login.styled';

const Login = () => {
  const token = Cookie.get('token');
  const navigator = useNavigate();
  useEffect(() => {
    if (token) {
      navigator('/');
    }
  });

  return (
    <BodyContainer>
      <CardMedia
        component="img"
        alt="Trackio"
        image={ReactLogo}
        sx={{
          marginTop: '46px',
          width: '150px',
          marginLeft: '-251px',
          '@media(max-width: 600px)': {
            marginTop: '4px',
            width: '150px',
            marginLeft: '320px',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: window.innerWidth <= 600 ? '1' : '-1',
            opacity: window.innerWidth <= 600 ? '1' : '0',
            transition: 'opacity 0.3s ease-in-out',
          },
        }}
      />
      <CustomContainer>
        <CustomTypography1 variant="h4" gutterBottom>
          Start For Free
        </CustomTypography1>
        <CustomTypography2 variant="h3" gutterBottom>
          Let’s Go !!
        </CustomTypography2>
        <FormContent />
        <LoginForm />
      </CustomContainer>
      <DontHaveAcount>Don’t have an account?</DontHaveAcount>
      <Link to="/signup">
        <SignupText>Signup</SignupText>
      </Link>
    </BodyContainer>
  );
};

export default Login;
