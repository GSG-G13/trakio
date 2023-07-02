import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AccountInput, ErrorAlert } from '../../components';
import THEME from '../../theme';
import { WrappBtn } from '../../components/AccountInput/acount.styled';

const AccountPage = () => {
  const navigator = useNavigate();
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');

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
        <Typography color={THEME.palette.custom.white} sx={{ fontWeight: 'bold', fontSize: '2vw', marginBottom: '2vw' }}>
          Edit Profile Information
        </Typography>
        <Grid container spacing={3} sx={{ marginBottom: '2vw' }}>
          <Grid item xs={6}>
            <AccountInput label="Name" />
          </Grid>
          <Grid item xs={6}>
            <AccountInput label="Email" />
          </Grid>
          <Grid item xs={6}>
            <AccountInput label="Old Password" />
          </Grid>
          <Grid item xs={6}>
            <AccountInput label="New Password" />
          </Grid>
        </Grid>
        <Box>
          <Typography color={THEME.palette.custom.white}>
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
