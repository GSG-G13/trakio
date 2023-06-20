/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';

import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { deepOrange } from '@mui/material/colors';

const drawerWidth = 240;

const AppBarItem = styled(AppBar)(({ theme }) => ({
  marginTop: '32px',
  boxShadow: 'none',
  backgroundColor: 'transparent',
  '& > div': {
    backgroundColor: theme.palette.custom.background,
    marginLeft: '32px',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create('width'),
    transition: 'all 0.3s ease',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function PermanentAppBar() {
  return (
    <AppBarItem position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>

        <Box sx={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
        }}
        >
          <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
          <Typography>Amal Mousa</Typography>
        </Box>
      </Toolbar>
    </AppBarItem>
  );
}
