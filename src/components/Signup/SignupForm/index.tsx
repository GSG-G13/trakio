import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import axios from 'axios';
import {
  EmailInput, PasswordInput, CustomIconButton, PasswordErrorMessage, UsernameInput,
  SignupButton, GooglePlusButton, EmailErrorMessage,
  PhoneInput, UsernameErrorMessage, PhoneErrorMessage,
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
    axios.post('/api/signup', values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
        phone: '',
      }}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <UsernameInput
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <UsernameErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div>
          <EmailInput
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <EmailErrorMessage name="email" component="div" className="error-message" />
        </div>
        <div>
          <PhoneInput
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />
          <PhoneErrorMessage name="phone" component="div" className="error-message" />
        </div>
        <div>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
          />
          <InputAdornment position="end">
            <CustomIconButton onClick={() => setShowPassword(!showPassword)} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </CustomIconButton>
          </InputAdornment>
          <PasswordErrorMessage name="password" component="div" className="error-message" />
        </div>
        <SignupButton fullWidth size="large" type="submit" variant="contained">
          Sign Up
        </SignupButton>
        <GooglePlusButton fullWidth size="large" type="submit" variant="contained">
          Sign up with Google
        </GooglePlusButton>
      </Form>
    </Formik>
  );
};

export default SignupForm;
