/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { Toolbar, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { deepOrange } from '@mui/material/colors';
import {
  AppBarItem,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  AvatarBox,
} from './app.styled';

export default function PermanentAppBar() {
  return (
    <AppBarItem position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
        <AvatarBox>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
          <Typography>Amal Mousa</Typography>
        </AvatarBox>
      </Toolbar>
    </AppBarItem>
  );
}
