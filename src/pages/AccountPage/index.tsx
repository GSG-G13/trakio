import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Box, Grid, Typography } from '@mui/material';
import { AccountInput } from '../../components';
import THEME from '../../theme';
import { WrappBtn } from '../../components/AccountInput/acount.styled';

interface AccountData {
  name: string,
  email: string,
  phone: string,
}

const AccountPage = () => {
  const [name, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // eslint-disable-next-line no-shadow
      const { name, email, phone } = JSON.parse(atob(token)) as AccountData;
      setUsername(name);
      setEmail(email);
      setPhone(phone);
    }
  }, []);
  return (
    <Box>
      <Typography sx={{
        color: THEME.palette.custom.white,
        fontWeight: 'bold',
        fontSize: '2vw',
        marginBottom: '2vw',
      }}
      >
        Edit Profile Information
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: '2vw' }}>
        <Grid item xs={7}>
          <AccountInput label="Name" value={name} />
        </Grid>
        <Grid item xs={7}>
          <AccountInput label="Email" value={email} />
        </Grid>
        <Grid item xs={7}>
          <AccountInput label="Phone" value={phone} />
        </Grid>
        <Grid item xs={7}>
          <WrappBtn>
            Save
          </WrappBtn>
        </Grid>
      </Grid>
      <Box>
        <Typography sx={{ color: THEME.palette.custom.white }}>
          <Typography sx={{ marginBottom: '1vw' }}>
            Delete Your Account
          </Typography>
          <WrappBtn>
            Delete Account
          </WrappBtn>
        </Typography>
      </Box>
    </Box>
  );
};
export default AccountPage;
