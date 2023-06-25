import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  CardMedia,
  IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Add } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import ReactLogo from '../../assets/logo.svg';
import PermanentAppBar from '../AppBar';
import {
  DrawerItem,
  ListItemTextItem,
  ProjectTextItem,
} from './sidebar.styled';
import AddProject from '../AddProject';

const NavList = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon sx={{ fontSize: 24, color: 'custom.white' }} />,
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: (
      <FormatListNumberedIcon sx={{ fontSize: 24, color: 'custom.white' }} />
    ),
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
        {NavList.map((nav) => (
          <NavLink to={nav.path} key={nav.title}>
            <ListItem disablePadding>
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
        <ProjectTextItem sx={{ color: 'custom.white' }}>
          <NavLink to="/projects">
            Projects
            <NavLink to="/projects/addProject">
              <IconButton onClick={AddProject} sx={{ marginLeft: '2rem' }}>
                <Add sx={{ fontSize: 24, color: 'custom.white' }} />
              </IconButton>
            </NavLink>
          </NavLink>
        </ProjectTextItem>
        {['project-A', 'Project1', 'Team 5'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ fontSize: '16px' }}>
              <ListItemTextItem primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerItem>
  </Box>
);

export default Sidebar;
