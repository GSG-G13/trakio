import { useState, useContext } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import { AccountInput, ErrorAlert, ConfirmDialog } from '../../components';
import { WrappBtn } from '../../components/AccountInput/acount.styled';
import userContext from '../../UserContext/context';
import profile from '../../lotties/profile.json';
import ENDPOINTS from '../../constants/endpoints';

const AccountPage = () => {
  const navigator = useNavigate();
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const user = useContext(userContext);

  const handleDeleteAccount = () => {
    axios
      .delete(ENDPOINTS.ACCOUNT, {
        withCredentials: true,
      })
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
        <Typography
          sx={{
            color: 'custom.white',
            fontWeight: 'bold',
            fontSize: '2vw',
            marginY: '2vh',
          }}
        >
          Profile Information
        </Typography>
        <Grid container spacing={1} sx={{ marginBottom: '2vw' }}>
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <Grid item xs={12}>
              <AccountInput label="Name" value={user?.user?.name} />
            </Grid>

            <Grid item xs={12}>
              <AccountInput label="Email" value={user?.user?.email} />
            </Grid>
            <Grid item xs={12}>
              <AccountInput label="Phone" value={user?.user?.phone} />
            </Grid>
          </Grid>
          <Grid item marginBottom="2vh" xs={6}>
            <Lottie
              height="auto"
              width={400}
              options={{
                animationData: profile,
                loop: true,
                autoplay: true,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
            />
          </Grid>
        </Grid>
        <Box>
          <Typography
            color="custom.fontGray"
            width="80%"
            marginBottom="2vh"
            textAlign="justify"
          >
            We value your control and privacy. By clicking Delete Account you
            will permanently remove all of your personal data and account
            information from our system. This action is irreversible, and you
            will lose access to your account, including any saved preferences,
            settings, and content
          </Typography>
          <WrappBtn onClick={() => setConfirmOpen(true)}>
            Delete Account
          </WrappBtn>
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
