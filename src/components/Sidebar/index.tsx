import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  CardMedia,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import ReactLogo from '../../assets/logo.svg';
import PermanentAppBar from '../AppBar';
import {
  DrawerItem,
  ListItemTextItem,
  ProjectTextItem,
} from './sidebar.styled';

const NavList = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon sx={{ fontSize: 24, color: 'custom.white' }} />,
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: <FormatListNumberedIcon sx={{ fontSize: 24, color: 'custom.white' }} />,
  },
  {
    title: 'Account',
    path: '/account',
    icon: <AccountCircleIcon sx={{ fontSize: 24, color: 'custom.white' }} />,
  },
];

const Sidebar = () => (
  <Box sx={{ display: 'flex' }}>
    <PermanentAppBar />
    <DrawerItem variant="permanent" anchor="left">
      <Typography>
        <CardMedia
          component="img"
          alt="Trackio"
          image={ReactLogo}
          sx={{ marginTop: '15px', width: '70%', marginLeft: '9px' }}
        />
      </Typography>
      <Divider />
      <List>
        {/* {['Home', 'Tasks', 'Account'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: '42px' }}>
                <HomeIcon sx={{ fontSize: 24, color: 'custom.white' }} />
              </ListItemIcon>
              <ListItemTextItem primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        {NavList.map((nav) => (
          <NavLink to={nav.path}>
            <ListItem key={nav.title} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: '42px' }}>
                  {nav.icon}
                </ListItemIcon>
                <ListItemTextItem primary={nav.title} />
              </ListItemButton>
            </ListItem>
          </NavLink>
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
  </Box>
);

export default Sidebar;
