import { Toolbar, Typography, Avatar } from '@mui/material';
import {
  AppBarItem,
  AvatarBox,
} from './app.styled';

export const PermanentAppBar = () => (
  <AppBarItem position="fixed">
    <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <AvatarBox>
        <Avatar sx={{ bgcolor: 'primary.main', color: 'custom.darkFont' }}>A</Avatar>
        <Typography sx={{ color: 'custom.white' }}>Amal Mousa</Typography>
      </AvatarBox>
    </Toolbar>
  </AppBarItem>
);

export default PermanentAppBar;
