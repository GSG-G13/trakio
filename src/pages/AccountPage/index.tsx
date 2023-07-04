import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import THEME from '../../theme';
import { AccountInput, ErrorAlert } from '../../components';
import { WrappBtn } from '../../components/AccountInput/acount.styled';

// interface AccountData {
//   name: string,
//   email: string,
//   phone: string,
// }

const AccountPage = () => {
  const [name, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const navigator = useNavigate();
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    axios
      .get('/api/user')
      .then((res) => {
        setUsername(res.data.userData.name);
        setEmail(res.data.userData.email);
        setPhone(res.data.userData.phone);
      })
      .catch((err) => {
        setOpenError(true);
        setMessageError(err.response.data.message);
      });
  }, []);

  const handleDeleteAccount = () => {
    axios
      .delete('/api/account')
      .then(() => navigator('/login'))
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  };
  return (
    <>
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
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
            <WrappBtn onClick={handleDeleteAccount}>
              Delete Account
            </WrappBtn>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AccountPage;
