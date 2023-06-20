/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/system';
import ReactLogo from './logo.svg';
import PermanentAppBar from '../AppBar';

const drawerWidth = 240;

const DrawerItem = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    borderRadius: '35px',
    border: '1px solid transparent',
    margin: '32px',
    overflowY: 'initial',
    height: '90%',
    background: theme.palette.secondary.main,
  },
}));

const ListItemTextItem = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.custom.white,
  opacity: 1,
}));

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <PermanentAppBar />
      <DrawerItem variant="permanent" anchor="left">
        <Typography>
          <img src={ReactLogo} style={{ marginTop: '15px', width: '70%', marginLeft: '9px' }} alt="Trakio" />
        </Typography>
        <Divider />
        <List>
          {['Home', 'Tasks', 'Account'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: '42px' }}>
                  <HomeIcon sx={{ fontSize: 40 , color: 'red'}} />
                </ListItemIcon>
                <ListItemTextItem primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ fontSize: '1.1rem', paddingLeft: '0.4rem' }}>
          <ListItemText sx={{ marginLeft: '18px', color: '#fff', '& span': { fontSize: '1.1rem' } }}>
            Projects
          </ListItemText>
          {['project-A', 'Project1', 'Team 5'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemTextItem primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DrawerItem>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , background: '#fff' }} />

    </Box>
  );
}
