import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
// import WelcomeCard from '../WelcomeCard';
// import DescriptionCard from '../DescrioptionCard';
// import Charts from '../Charts';
import AddProject from '../AddProject';
// import StatisticsCard from '../StatisticsCard';

const Layout = () => (
  <Box sx={{ display: 'flex' }}>
    <PermanentAppBar />
    <Sidebar />
    <MainComponent component="main">
      <AddProject />
      {/* OUTLET GOES HERE */}
      {/* <Box sx={{ display: 'flex' }}>
        <Box>
          <WelcomeCard />
          <Box sx={{ display: 'flex', gap: '.75rem', width: '48.75rem' }}>
            <StatisticsCard />
            <StatisticsCard />
            <StatisticsCard />
            <StatisticsCard />
          </Box>
        </Box>
        <DescriptionCard />
      </Box> */}
      {/* <Charts /> */}
      <Outlet />
    </MainComponent>
  </Box>
);

export default Layout;
