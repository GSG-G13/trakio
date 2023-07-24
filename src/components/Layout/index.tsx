import { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import axios from 'axios';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import { TabBar } from '..';
import { ISection } from '../../interfaces';
import ENDPOINTS from '../../constants/endpoints';
import userContext from '../../UserContext/context';

const Layout = () => {
  const { pathname } = useLocation();
  const [render, setRender] = useState<boolean>(false);
  const [section, setSection] = useState<ISection[]>([]);
  const { user } = useContext(userContext);
  const navigator = useNavigate();

  useEffect(() => {
    axios
      .get(ENDPOINTS.SECTIONS, {
        withCredentials: true,
      })
      .then((res) => {
        setSection(res.data.data);
      });
  }, []);

  useEffect(() => {
    if (!user) {
      navigator('/login');
    }
  }, [pathname, user]);

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
