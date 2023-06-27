import {
  Avatar, Box, Grid, Typography,
} from '@mui/material';

const TabBar = () => (
  <Grid container padding={3}>
    <Grid item xs={3}>
      <Box
        sx={{
          display: 'flex',
          color: 'custom.white',
        }}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            padding: '8px',
            backgroundColor: 'blue',
          }}
        >
          KH
        </Avatar>
        <Box
          marginLeft={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant="h6">My Tasks</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography fontSize={14}>List</Typography>
            <Typography fontSize={14}>Board</Typography>
            <Typography fontSize={14}>Calendar</Typography>
            <Typography fontSize={14}>Files</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  </Grid>
);

export default TabBar;
