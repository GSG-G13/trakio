import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
// import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import { TabBar } from '..';

const Layout = () => (
  <Box sx={{ display: 'flex' }}>
    {/* <PermanentAppBar /> */}
    <Sidebar />
    <MainComponent component="main">
      <TabBar />
      <Outlet />
    </MainComponent>
  </Box>
);

export default Layout;
