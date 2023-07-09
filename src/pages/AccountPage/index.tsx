import { useState, useContext } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AccountInput, ErrorAlert } from '../../components';
import { WrappBtn } from '../../components/AccountInput/acount.styled';
import userContext from '../../UserContext/context';
import { ServerError } from '../Errors';

const AccountPage = () => {
  const navigator = useNavigate();
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const user = useContext(userContext);

  const handleDeleteAccount = () => {
    axios
      .delete('/api/account')
      .then(() => navigator('/login'))
      .catch((error) => {
        if (error.response.state >= 500) ServerError();
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
          color: 'custom.white',
          fontWeight: 'bold',
          fontSize: '2vw',
          marginBottom: '2vw',
        }}
        >
          Edit Profile Information
        </Typography>
        <Grid container spacing={3} sx={{ marginBottom: '2vw' }}>
          <Grid item xs={7}>
            <AccountInput label="Name" value={user?.user?.name} />
          </Grid>
          <Grid item xs={7}>
            <AccountInput label="Email" value={user?.user?.email} />
          </Grid>
          <Grid item xs={7}>
            <AccountInput label="Phone" value={user?.user?.phone} />
          </Grid>
        </Grid>
        <Box>
          <Typography sx={{ color: 'custom.white' }}>
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
