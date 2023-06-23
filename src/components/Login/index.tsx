import LoginForm from './LoginForm';
import {
  BodyContainer, CustomContainer, CustomTypography1,
  CustomTypography2, FormContent, DontHaveAcount, SignupText,
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
    <DontHaveAcount variant="h5">
      Don’t have an account?
      {' '}
      <SignupText variant="h5">
        {' '}
        Signup
      </SignupText>
    </DontHaveAcount>
  </BodyContainer>
);

export default Login;
