import { CardMedia } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookie from 'js-cookie';
import SignupForm from './SignupForm';
import {
  BodyContainer,
  CustomContainer,
  CustomTypography1,
  CustomTypography2,
  FormContent,
  DontHaveAcount,
  SigninText,
} from './signup.styled';
import ReactLogo from '/assets/logo.svg';
import { SignupImage } from './SignupForm/signupForm';

const Sigup = () => {
  const token = Cookie.get('token');
  const navigator = useNavigate();
  useEffect(() => {
    if (token) {
      navigator('/');
    }
  });
  return (
    <>
      <BodyContainer>
        <CardMedia
          component="img"
          alt="Trackio"
          image={ReactLogo}
          sx={{
            marginTop: '46px',
            width: '150px',
            marginLeft: '60px',
            '@media(max-width: 600px)': {
              marginTop: '4px',
              width: '70px',
              marginLeft: '50px',
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
          <SignupForm />
        </CustomContainer>
        <DontHaveAcount>Already have an account ?</DontHaveAcount>
        <Link to="/login">
          <SigninText>Sign in</SigninText>
        </Link>
      </BodyContainer>
      <SignupImage src="public/assets/todo.svg" alt="login" />
    </>
  );
};
export default Sigup;
