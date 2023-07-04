/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Divider,
  List,
  Typography,
} from '@mui/material';
import { MdLogout } from 'react-icons/md';
import {
  DrawerItem,
  ProjectTextItem,
} from './sidebar.styled';
import { ErrorAlert, SuccessAlert } from '..';
import { iProjects } from '../../interfaces';
import { NAV_LIST } from '../../constants';
import { Logo, NavItem } from '../Common';
import UserCard from '../UserCard';

const Sidebar = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<iProjects[]>([]);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');

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

  const handleLogout = () => {
    axios.get('/api/logout')
      .then((data) => {
        setOpenSuccess(true);
        setMessageSuccess(data.data.message);
        navigate('/login', { state: { success: 'Logout Successfully' } });
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  };

  return (
    <>
      <SuccessAlert
        open={openSuccess}
        message={messageSuccess}
        setOpen={setOpenSuccess}
      />
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      <Box sx={{ display: 'flex' }}>
        <DrawerItem variant="permanent" anchor="left">
          <Box sx={{ px: 2.5, py: 2, display: 'inline-flex' }}>
            <Logo />
          </Box>
          <Box sx={{ mb: 2, mx: 2.5 }}>
            <UserCard />
          </Box>
          <List
            disablePadding
            sx={{
              p: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem',
            }}
          >
            {NAV_LIST.map(({ title, path, icon }: any) => (
              <NavItem key={title} path={path} title={title} icon={icon} />
            ))}
          </List>
          <List
            disablePadding
            sx={{
              p: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem',
            }}
          >
            <ProjectTextItem sx={{ display: 'flex', justifyContent: 'space-between', color: 'custom.white' }}>
              <Typography sx={{ color: 'custom.fontGray', fontSize: '16px' }}>
                Projects
              </Typography>
            </ProjectTextItem>
            {projects.map(({ title, project_id }) => (
              <NavItem
                key={project_id}
                path={`/project/${project_id}`}
                title={title.split(' ')[0]}
              />
            ))}
          </List>
          <Divider sx={{ bgcolor: 'custom.white', opacity: '.2' }} />
          <Box sx={{ mb: 2, mx: 3, mt: 2 }}>
            <Typography sx={{ color: 'custom.fontGray', fontSize: '16px' }}>
              Others
            </Typography>
            <NavItem path="/logout" title="Logout" icon={<MdLogout />} onClick={handleLogout} />
          </Box>
        </DrawerItem>
      </Box>
    </>
  );
};

export default Sidebar;
