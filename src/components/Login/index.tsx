import { CardMedia } from '@mui/material';
import LoginForm from './LoginForm';
import {
  BodyContainer, CustomContainer, CustomTypography1,
  CustomTypography2, FormContent, DontHaveAcount, SignupText,
} from './login.styled';
import ReactLogo from '../../assets/logo.svg';

const Login = () => (
  <BodyContainer>
    <CardMedia
      component="img"
      alt="Trackio"
      image={ReactLogo}
      sx={{ marginTop: '46px', width: '150px', marginLeft: '-251px' }}
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
    <DontHaveAcount>
      Don’t have an account?
      {' '}
    </DontHaveAcount>
    <SignupText>
      {' '}
      Signup
    </SignupText>
  </BodyContainer>
);

export default Login;
