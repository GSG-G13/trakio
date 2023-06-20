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
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ReactLogo from './logo.svg';
import PermanentAppBar from '../AppBar';
import { DrawerItem, ListItemTextItem, ProjectTextItem } from './layout.styled';

const PermanentDrawerLeft = () => (
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
                <HomeIcon sx={{ fontSize: 40, color: 'red' }} />
              </ListItemIcon>
              <ListItemTextItem primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ fontSize: '1.1rem', paddingLeft: '0.4rem' }}>
        <ProjectTextItem>
          Projects
        </ProjectTextItem>
        {['project-A', 'Project1', 'Team 5'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemTextItem primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerItem>
    <Box component="main" sx={{ flexGrow: 1, p: 3, background: '#fff' }} />
    {/* OUTLET GOES HERE */}
  </Box>
);

export default PermanentDrawerLeft;
