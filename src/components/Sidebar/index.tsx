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
          sx={{ 
            marginTop: '15px', width: '70%', marginLeft: '9px' }}
        />
      </Typography>
      <Divider />
      <List>
        {['Home', 'Tasks', 'Account'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: '42px' }}>
                <HomeIcon sx={{ fontSize: 40, color: 'custom.white' }} />
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
  </Box>
);

export default Sidebar;
