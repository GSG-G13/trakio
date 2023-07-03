import { Avatar, Box, Typography } from '@mui/material';
import StyledAccount from './user.styled';
import { account } from '../../fake';

const UserCard = () => (
  <StyledAccount>
    <Avatar src={account.photoURL} alt="photoURL" />
    <Box sx={{ ml: 2 }}>
      <Typography variant="subtitle2" sx={{ color: 'custom.white' }}>
        {account.displayName}
      </Typography>
      <Typography variant="body2" sx={{ color: 'custom.fontGray', fontSize: '10px' }}>
        {account.role.toUpperCase()}
      </Typography>
    </Box>
  </StyledAccount>
);

export default UserCard;
