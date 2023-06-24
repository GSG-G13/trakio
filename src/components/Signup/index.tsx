import { CardMedia } from '@mui/material';
import SignupForm from './SignupForm';
import {
  BodyContainer, CustomContainer, CustomTypography1,
  CustomTypography2, FormContent, DontHaveAcount, SigninText,
} from './signup.styled';
import ReactLogo from '../../assets/logo.svg';

const Sigup = () => (
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
      <SignupForm />
    </CustomContainer>
    <DontHaveAcount>
      Already have an account ?
      {' '}
      <SigninText>
        {' '}
        Sign in
      </SigninText>
    </DontHaveAcount>
  </BodyContainer>
);

export default Sigup;
