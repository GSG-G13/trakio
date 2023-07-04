import {
  Avatar, Box, Grid, Typography,
} from '@mui/material';
import { IMember } from '../../interfaces';

const Member = ({ member }: { member: IMember }) => (
  <Grid item xs={3}>
    <Box display="flex" alignItems="center">
      <Avatar sx={{ width: 56, height: 56, backgroundColor: 'deeppink' }}>
        {member.name[0].toUpperCase()}
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
            {member.name}
          </Typography>

          <Typography
            fontSize={12}
            fontWeight={600}
            color={member.role === 'manager' ? 'primary.main' : 'custom.darkFont'}
            textTransform="capitalize"
            marginLeft={2}
          >
            {member.role}
          </Typography>
        </Box>

        <Typography fontSize={12} color="custom.gray">
          {member.email}
        </Typography>
      </Box>
    </Box>
  </Grid>
);

export default Member;
