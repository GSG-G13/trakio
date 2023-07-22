import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Cookie from 'js-cookie';
import axios from 'axios';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import { TabBar } from '..';
import { ISection } from '../../interfaces';

const Layout = () => {
  const { pathname } = useLocation();
  const navigator = useNavigate();
  const [render, setRender] = useState<boolean>(false);
  const token = Cookie.get('token');
  const [section, setSection] = useState<ISection[]>([]);

  useEffect(() => {
    axios.get('/api/sections')
      .then((res) => {
        setSection(res.data.data);
      });
  }, []);

  useEffect(() => {
    if (!token) {
      navigator('/login');
    }
  }, [pathname, token]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar render={render} />
      <MainComponent component="main">
        {(pathname.split('/')[1] === 'mytask'
        || pathname.split('/')[1] === 'project') && <TabBar />}
        <Outlet context={{ render: [render, setRender], section }} />
      </MainComponent>
    </Box>
  );
};

export default Layout;
