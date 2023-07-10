import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Cookie from 'js-cookie';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import { TabBar } from '..';

const Layout = () => {
  const { pathname } = useLocation();
  const navigator = useNavigate();

  const token = Cookie.get('token');

  useEffect(() => {
    if (!token) {
      navigator('/login');
    }
  }, [pathname, token]);

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
