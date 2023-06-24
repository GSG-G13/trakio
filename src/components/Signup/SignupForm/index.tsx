import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import {
  EmailInput, PasswordInput, CustomIconButton, PasswordErrorMessage, UsernameInput,
  SignupButton, GooglePlusButton, LoginImage, EmailErrorMessage, PhoneInput,
} from './signupForm';
import { signupSchema } from '../../../helper/validation/schema';

interface SignupFormValues {
  email: string;
  password: string;
  phone: string;
  username: string;
}
const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values: SignupFormValues) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        email: '', password: '', username: '', phone: '',
      }}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div />
        <div>
          <UsernameInput
            type="email"
            name="email"
            label="Email address"
            variant="standard"
            placeholder="Enter your email address"
          />
          <EmailErrorMessage name="email" component="div" className="error-message" />
        </div>

        <div>
          <EmailInput
            type="email"
            name="email"
            label="Email address"
            variant="standard"
            placeholder="Enter your email address"
          />
          <EmailErrorMessage name="email" component="div" className="error-message" />
        </div>
        <div>
          <PhoneInput
            type="email"
            name="email"
            label="Email address"
            variant="standard"
            placeholder="Enter your email address"
          />
          <EmailErrorMessage name="email" component="div" className="error-message" />
        </div>

        <div>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            label="Password"
            variant="standard"
            placeholder="Enter your password"
            InputLabelProps={{
              style: { color: 'white', marginLeft: '10px' },
            }}
          />
          <InputAdornment position="end">
            <CustomIconButton onClick={() => setShowPassword(!showPassword)} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </CustomIconButton>
          </InputAdornment>
          <PasswordErrorMessage name="password" component="div" className="error-message" />
        </div>

        <SignupButton fullWidth size="large" type="submit" variant="contained">
          Sign In
        </SignupButton>

        <GooglePlusButton fullWidth size="large" type="submit" variant="contained">
          Sign in with Google
        </GooglePlusButton>

        <LoginImage src="src/assets/todo.svg" alt="login" />
      </Form>
    </Formik>
  );
};

export default SignupForm;
