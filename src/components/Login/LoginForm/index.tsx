import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { validationSchema } from '../../../helper/validation/schema';
import { ErrorAlert, SuccessAlert } from '../..';
import userContext from '../../../UserContext/context';
import ENDPOINTS from '../../../constants/endpoints';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const navigator = useNavigate();
  const { setUserData } = useContext(userContext);

  const handleSubmit = (values: LoginFormValues) => {
    axios
      .post(ENDPOINTS.LOGIN, values, {
        withCredentials: true,
      })
      .then((res) => {
        setOpenSuccess(true);
        setUserData(res.data.data[0]);
        navigator('/');
      })
      .catch((err) => {
        setOpenError(true);
        if (err) setMessageError(err.response.data.message);
      });
  };

  useEffect(() => {
    if (
      location.state
      && location.state.success
      && location.state.success.length
    ) {
      setOpenSuccess(true);
    }
  }, []);

  return (
    <>
      {location.state && location.state.success && (
        <SuccessAlert
          open={openSuccess}
          message={location.state.success}
          setOpen={setOpenSuccess}
        />
      )}
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
              inputprops={{ disableUnderline: true }}
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

          <LoginImage src="/assets/todo.svg" alt="login" />
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
