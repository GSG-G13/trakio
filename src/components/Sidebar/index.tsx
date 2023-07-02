import { useState, useEffect } from 'react';
import axios from 'axios';
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
import { Add } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
// import PermanentAppBar from '../AppBar';
import {
  DrawerItem,
  ListItemTextItem,
  ProjectTextItem,
} from './sidebar.styled';
import AddProjectModal from '../AddProject';
import { ErrorAlert } from '..';
import { iProjects } from '../../interfaces';
import { NAV_LIST } from '../../constants';
// import { Logo, NavItem } from '../Common';
// import UserCard from '../UserCard';
import ReactLogo from '../../../public/assets/logo.svg';

const Sidebar = () => {
  const [projects, setProjects] = useState<iProjects[]>([]);
  const navigator = useNavigate();
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get('/api/projects')
      .then((response) => {
        setProjects(response.data.data);
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  }, []);

  const handleViewMore = () => {
    navigator('/myproject');
  };

  return (
    <>
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      <Box sx={{ display: 'flex' }}>
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
            {NAV_LIST.map((nav) => (
              <NavLink to={nav.path} key={nav.title} style={{ textDecoration: 'none' }}>
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
              <NavLink to="/myproject">
                Projects
                <NavLink to="/projects/addProject">
                  <IconButton onClick={handleOpen} sx={{ marginLeft: '2rem' }}>
                    <Add sx={{ fontSize: 24, color: 'custom.white' }} />
                  </IconButton>
                  <AddProjectModal open={open} handleClose={handleClose} />
                </NavLink>
              </NavLink>
            </ProjectTextItem>
            {projects.slice(0, 5).map((project) => (
              <NavLink to={`/project/${project.project_id}`} style={{ textDecoration: 'none' }}>
                <ListItem key={project.project_id} disablePadding>
                  <ListItemButton sx={{ fontSize: '16px' }}>
                    <ListItemTextItem primary={project.title} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
            {projects.length > 5 && (
              <ListItem disablePadding>
                <ListItemButton sx={{ fontSize: '16px' }} onClick={handleViewMore}>
                  <ListItemTextItem primary="View More" />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </DrawerItem>
      </Box>
    </>
  );
};

export default Sidebar;
