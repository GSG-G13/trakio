import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  EmailInput, PasswordInput, CustomIconButton, PasswordErrorMessage, UsernameInput,
  SignupButton, GooglePlusButton, EmailErrorMessage,
  PhoneInput, UsernameErrorMessage, PhoneErrorMessage,
} from './signupForm';
import { signupSchema } from '../../../helper/validation/schema';
import { ErrorAlert, SuccessAlert } from '../..';

interface SignupFormValues {
  email: string;
  password: string;
  phone: string;
  username: string;
}
const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState('');
  const [messageError, setMessageError] = useState('');
  const navigator = useNavigate();

  const handleSubmit = (values: SignupFormValues) => {
    axios
      .post('/api/signup', values)
      .then((res) => {
        setOpenSuccess(true);
        setMessageSuccess(res.data.message);
        if (!openSuccess) navigator('/');
      })
      .catch((err) => {
        setOpenError(true);
        setMessageError(err.response.data.message);
      });
  };

  return (
    <>
      <SuccessAlert
        open={openSuccess}
        message={messageSuccess}
        setOpen={setOpenSuccess}
      />
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
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
    </>
  );
};

export default SignupForm;
