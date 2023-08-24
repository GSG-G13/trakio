import { useContext } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import StyledAccount from './user.styled';
import { account } from '../../fake';
import userContext from '../../UserContext/context';

const UserCard = () => {
  const user = useContext(userContext);
  return (
    <StyledAccount>
      <Avatar src={account.photoURL} alt="photoURL" />
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2" sx={{ color: 'custom.white' }}>
          {user?.user?.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'custom.fontGray', fontSize: '10px' }}
        >
          {user?.user?.email}
        </Typography>
      </Box>
    </StyledAccount>
  );
};

export default UserCard;
