import { Grid } from '@mui/material';
import { AccountInput } from '../../components';

const AccountPage = () => (
  <Grid container spacing={3}>
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
);

export default AccountPage;
