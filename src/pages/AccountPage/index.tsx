import { Box, Grid, Typography } from '@mui/material';
import { AccountInput } from '../../components';
import THEME from '../../theme';
import { WrappBtn } from '../../components/AccountInput/acount.styled';

const AccountPage = () => (
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
        <WrappBtn>
          Delete Account
        </WrappBtn>
      </Typography>
    </Box>
  </Box>
);

export default AccountPage;
