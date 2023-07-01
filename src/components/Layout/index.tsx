import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
// import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import { ProjectTabBar, TaskTabBar } from '..';

const Layout = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <PermanentAppBar /> */}
      <Sidebar />
      <MainComponent component="main">
        {location.pathname.split('/')[1] === 'mytask' && <TaskTabBar />}
        {location.pathname.split('/')[1] === 'project' && <ProjectTabBar />}
        <Outlet />
      </MainComponent>
    </Box>
  );
};

export default Layout;
