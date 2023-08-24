import {
  Avatar, Box, Grid, Skeleton, Typography,
} from '@mui/material';
import { IMember } from '../../interfaces';

const Member = ({ member, loading }: { member: IMember; loading: boolean; }) => (
  <Grid item xs={3}>
    <Box display="flex" alignItems="center">
      <Avatar sx={{ width: 56, height: 56, backgroundColor: 'deeppink' }}>
        {!loading ? member.name[0].toUpperCase() : <Skeleton variant="circular" height={22} width="25%" />}
      </Avatar>
      <Box
        marginLeft={1}
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Box display="flex" alignItems="center">
          {!loading ? (
            <Typography color="custom.white" textTransform="capitalize">
              {member.name}
            </Typography>
          ) : <Skeleton variant="rectangular" height={16} width="50%" sx={{ marginY: '0.5rem' }} />}

          {!loading ? (
            <Typography
              fontSize={12}
              fontWeight={600}
              color={member.role === 'manager' ? 'primary.main' : 'custom.darkFont'}
              textTransform="capitalize"
              marginLeft={2}
            >
              {member.role}
            </Typography>
          ) : <Skeleton variant="rectangular" height={12} width="20%" sx={{ margin: '0.5rem' }} />}
        </Box>

        {!loading ? (
          <Typography fontSize={12} color="custom.gray">
            {member.email}
          </Typography>
        ) : <Skeleton variant="rectangular" height={12} width="80%" />}
      </Box>
    </Box>
  </Grid>
);

export default Member;
