import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Typography,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { MdLogout } from 'react-icons/md';
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
import { Logo, NavItem } from '../Common';
import UserCard from '../UserCard';

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
          <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
            <Logo />
          </Box>
          <Box sx={{ mb: 2, mx: 2.5 }}>
            <UserCard />
          </Box>
          <Divider sx={{ bgcolor: 'custom.white', opacity: '.2' }} />
          <List
            disablePadding
            sx={{
              p: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem',
            }}
          >
            {NAV_LIST.map(({ title, path, icon }: any) => (
              <NavItem key={title} path={path} title={title} icon={icon} />
            ))}
          </List>
          <Divider sx={{ bgcolor: 'custom.white', opacity: '.2' }} />
          <List
            disablePadding
            sx={{
              p: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem',
            }}
          >
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
            {projects.slice(0, 3).map((project) => (
              <NavLink to={`/project/${project.project_id}`} style={{ textDecoration: 'none' }}>
                <ListItem key={project.project_id} disablePadding>
                  <ListItemButton sx={{ fontSize: '16px' }}>
                    <ListItemTextItem primary={project.title} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
            {projects.length > 3 && (
              <ListItem disablePadding>
                <ListItemButton sx={{ fontSize: '16px' }} onClick={handleViewMore}>
                  <ListItemTextItem primary="View More" />
                </ListItemButton>
              </ListItem>
            )}
          </List>
          <Box sx={{ mb: 2, mx: 1 }}>
            <Typography sx={{ color: 'custom.fontGray' }}>
              Others
            </Typography>
            <NavItem path="/logout" title="Logout" icon={<MdLogout />} />
          </Box>
        </DrawerItem>
      </Box>
    </>
  );
};

export default Sidebar;
