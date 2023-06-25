import { CardMedia } from '@mui/material';
import SignupForm from './SignupForm';
import {
  BodyContainer, CustomContainer, CustomTypography1,
  CustomTypography2, FormContent, DontHaveAcount, SigninText,
} from './signup.styled';
import ReactLogo from '../../assets/logo.svg';
import { SignupImage } from './SignupForm/signupForm';

const Sigup = () => (
  <>
    <BodyContainer>
      <CardMedia
        component="img"
        alt="Trackio"
        image={ReactLogo}
        sx={{ marginTop: '46px', width: '150px', marginLeft: '60px' }}
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
      <DontHaveAcount>
        Already have an account ?
      </DontHaveAcount>
      <SigninText>
        Sign in
      </SigninText>
    </BodyContainer>
    <SignupImage src="src/assets/todo.svg" alt="login" />
  </>
);

export default Sigup;
