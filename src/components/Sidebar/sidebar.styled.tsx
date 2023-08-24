import { Drawer, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DRAWER_WIDTH } from '../../constants';

export const DrawerItem = styled(Drawer)(({ theme: { palette: { secondary, custom } } }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    background: secondary.main,
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: secondary.main,
    },
    '&::-webkit-scrollbar-thumb': {
      background: custom.divider,
      borderRadius: '2px',
    },
  },
}));

export const ListItemTextItem = styled(ListItemText)(({ theme: { palette: { custom } } }) => ({
  color: custom.fontGray,
  marginLeft: '1rem',
}));

export const ProjectTextItem = styled(ListItemText)(({ theme: { palette: { custom } } }) => ({
  marginLeft: '18px',
  color: custom.white,
  '& span': {
    width: '98%',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
