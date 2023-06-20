/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { Toolbar, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import {
  AppBarItem,
  AvatarBox,
} from './app.styled';

export const PermanentAppBar = () => (
  <AppBarItem position="fixed">
    <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <AvatarBox>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
        <Typography sx={{ color: '#fff' }}>Amal Mousa</Typography>
      </AvatarBox>
    </Toolbar>
  </AppBarItem>
);

export default PermanentAppBar;
