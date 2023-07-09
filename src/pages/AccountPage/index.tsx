import { useState, useContext } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AccountInput, ErrorAlert, ConfirmDialog } from '../../components';
import { WrappBtn } from '../../components/AccountInput/acount.styled';
import userContext from '../../UserContext/context';

const AccountPage = () => {
  const navigator = useNavigate();
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const user = useContext(userContext);

  const handleDeleteAccount = () => {
    axios
      .delete('/api/account')
      .then(() => navigator('/login'))
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  };
  const handleConfirmDelete = () => {
    setConfirmOpen(false);
    handleDeleteAccount();
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
            <WrappBtn onClick={() => setConfirmOpen(true)}>
              Delete Account
            </WrappBtn>
          </Typography>
        </Box>
      </Box>
      <ConfirmDialog
        title="Delete Task"
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={handleConfirmDelete}
      >
        Are you sure you want to delete your account?
      </ConfirmDialog>
    </>
  );
};

export default AccountPage;
