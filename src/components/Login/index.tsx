import { Typography } from '@mui/material';
import LoginForm from '../../section/auth/LoginForm';
import {
  BodyContainer, CustomContainer, CustomTypography1, CustomTypography2, FormContent,
} from './login.styled';

const Login = () => (
  <BodyContainer>
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
    <Typography variant="h5">
      Don’t have an account?
      {' '}
      <Typography variant="h5"> Signup</Typography>
    </Typography>
  </BodyContainer>
);

export default Login;
