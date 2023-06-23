import { useState } from 'react';
import {
  Stack, InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  EmailInput, PasswordInput, CustomIconButton, SigninButton, GooglePlusButton, LoginImage,
} from './loginForm.styled';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Stack spacing={3}>
        <EmailInput
          name="email"
          label="Email address"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{
            style: { color: 'white', marginLeft: '10px' },
          }}
        />
        <PasswordInput
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CustomIconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </CustomIconButton>
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
          InputLabelProps={{
            style: { color: 'white', marginLeft: '10px' },
          }}
        />
      </Stack>
      <SigninButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        Sign In
      </SigninButton>
      <GooglePlusButton fullWidth size="large" type="submit" variant="contained">
        Sign in with Google
      </GooglePlusButton>
      <LoginImage src="src/assets/todo.svg" alt="login" />
    </>
  );
};

export default LoginForm;
