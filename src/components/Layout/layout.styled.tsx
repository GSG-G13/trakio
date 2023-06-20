import { Drawer, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 240;

export const DrawerItem = styled(Drawer)(({ theme }) => ({
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
    background: theme.palette.secondary.main,
  },
}));

export const ListItemTextItem = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.custom.white,
  opacity: 1,
}));

export const ProjectTextItem = styled(ListItemText)(({ theme }) => ({
  marginLeft: '18px',
  color: theme.palette.custom.white,
  '& span': {
    fontSize: '1.1rem',
  },
}));

export const MainComponent = styled(Box)(({ theme }) => ({
  marginLeft: '3.4rem',
  marginTop: '7rem',
  flexGrow: 1,
  p: 3,
  background: theme.palette.custom.white,
}));
