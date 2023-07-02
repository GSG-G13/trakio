import { Drawer, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DRAWER_WIDTH } from '../../constants';

export const DrawerItem = styled(Drawer)(({ theme: { palette: { secondary } } }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    background: secondary.main,
  },
}));

export const ListItemTextItem = styled(ListItemText)(({ theme: { palette: { custom } } }) => ({
  color: custom.white,
  opacity: 1,
}));

export const ProjectTextItem = styled(ListItemText)(({ theme: { palette: { custom } } }) => ({
  marginLeft: '18px',
  color: custom.white,
  '& span': {
    fontSize: '1.1rem',
  },
}));
