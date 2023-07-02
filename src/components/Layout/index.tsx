import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
// import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import { TabBar } from '..';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <MainComponent component="main">
        {(pathname.split('/')[1] === 'mytask' || pathname.split('/')[1] === 'project') && <TabBar />}
        <Outlet />
      </MainComponent>
    </Box>
  );
};

export default Layout;
