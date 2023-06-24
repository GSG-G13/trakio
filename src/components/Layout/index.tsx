import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';

const Layout = () => (
  <Box sx={{ display: 'flex' }}>
    <PermanentAppBar />
    <Sidebar />
    <MainComponent component="main">
      <Outlet />
    </MainComponent>
  </Box>
);

export default Layout;
