import { useContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
// import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import { TabBar } from '..';
import userContext from '../../UserContext/context';

const Layout = () => {
  const { pathname } = useLocation();
  const navigator = useNavigate();
  const user = useContext(userContext);

  useEffect(() => {
    if (!user?.user) {
      navigator('/login');
    }
  }, [pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <MainComponent component="main">
        {(pathname.split('/')[1] === 'mytask'
          || pathname.split('/')[1] === 'project') && <TabBar />}
        <Outlet />
      </MainComponent>
    </Box>
  );
};

export default Layout;
