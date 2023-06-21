import { Drawer, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 225;

export const DrawerItem = styled(Drawer)(({ theme: { palette: { secondary } } }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    borderRadius: '35px',
    border: '1px solid transparent',
    margin: '32px',
    overflowY: 'initial',
    height: '92%',
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

export const MainComponent = styled(Box)(() => ({
  marginLeft: '3.4rem',
  marginTop: '10rem',
  flexGrow: 1,
}));
