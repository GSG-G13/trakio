import {
  Avatar, Box, Grid, Skeleton, Typography,
} from '@mui/material';
import { IMember } from '../../interfaces';

const Member = ({ member, loading }: { member: IMember; loading: boolean; }) => (
  <Grid item xs={3}>
    <Box display="flex" alignItems="center">
      <Avatar sx={{ width: 56, height: 56, backgroundColor: 'deeppink' }}>
        {!loading ? member.name[0].toUpperCase() : <Skeleton variant="rectangular" height={16} width="100%" />}
      </Avatar>
      <Box
        marginLeft={1}
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Box display="flex" alignItems="center">
          <Typography color="custom.white" textTransform="capitalize">
            {!loading ? member.name : <Skeleton variant="rectangular" height={16} width="100%" />}
          </Typography>

          <Typography
            fontSize={12}
            fontWeight={600}
            color={member.role === 'manager' ? 'primary.main' : 'custom.darkFont'}
            textTransform="capitalize"
            marginLeft={2}
          >
            {!loading ? member.role : <Skeleton variant="rectangular" height={16} width="100%" />}
          </Typography>
        </Box>

        <Typography fontSize={12} color="custom.gray">
          {!loading ? member.email : <Skeleton variant="rectangular" height={16} width="100%" />}
        </Typography>
      </Box>
    </Box>
  </Grid>
);

export default Member;
