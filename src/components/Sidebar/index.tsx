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
import { FaHome, FaTasks, FaUser } from 'react-icons/fa';
import ReactLogo from '../../assets/logo.svg';
import PermanentAppBar from '../AppBar';
import {
  DrawerItem,
  ListItemTextItem,
  ProjectTextItem,
} from './sidebar.styled';

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
        {[
          { text: 'Home', icon: FaHome },
          { text: 'Tasks', icon: FaTasks },
          { text: 'Account', icon: FaUser },
        ].map(({ text, icon: Icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: '32px', color: 'custom.white' }}>
                <Icon />
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
