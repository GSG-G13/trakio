import { useState } from 'react';
import axios from 'axios';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  EmailInput,
  PasswordInput,
  CustomIconButton,
  PasswordErrorMessage,
  SigninButton,
  GooglePlusButton,
  EmailErrorMessage,
  LoginImage,
} from './loginForm.styled';
import validationSchema from '../../../helper/validation/yupSchema';
import { ErrorAlert, SuccessAlert } from '../..';

interface LoginFormValues {
  email: string;
  password: string;
}
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState('');
  const [messageError, setMessageError] = useState('');
  const navigator = useNavigate();

  const handleSubmit = (values: LoginFormValues) => {
    axios
      .post('/api/login', values)
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
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <EmailInput
              type="email"
              name="email"
              label="Email address"
              variant="standard"
              placeholder="Enter your email address"
              InputProps={{ disableUnderline: true }}
            />
            <EmailErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              name="password"
              label="Password"
              variant="standard"
              placeholder="Enter your password"
            />
            <InputAdornment position="end">
              <CustomIconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </CustomIconButton>
            </InputAdornment>
            <PasswordErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <SigninButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Sign In
          </SigninButton>

          <GooglePlusButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Sign in with Google
          </GooglePlusButton>

          <LoginImage src="src/assets/todo.svg" alt="login" />
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
