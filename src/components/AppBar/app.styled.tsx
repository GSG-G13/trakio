import { AppBar, InputBase, Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import drawerWidth from '../../constants';

export const AppBarItem = styled(AppBar)(({ theme: { palette: { custom } } }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  ml: `${drawerWidth}px`,
  marginTop: '32px',
  boxShadow: 'none',
  backgroundColor: 'transparent',
  '& > div': {
    backgroundColor: custom.background,
    marginLeft: '32px',
  },
}));

export const Search = styled('div')((
  {
    theme: {
      palette: { common }, spacing, shape, breakpoints,
    },
  },
) => ({
  position: 'relative',
  borderRadius: shape.borderRadius,
  backgroundColor: alpha(common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [breakpoints.up('sm')]: {
    marginLeft: spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme: { spacing } }) => ({
  padding: spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme: { spacing, breakpoints } }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${spacing(4)})`,
    // transition: theme.transitions.create('width'),
    transition: 'all 0.3s ease',
    width: '100%',
    [breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const AvatarBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  marginRight: '15px',
}));
