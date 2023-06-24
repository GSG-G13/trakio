import { Box } from '@mui/material';
import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
// import { ProjectsCard } from '..';
import WelcomeCard from '../WelcomeCard';
import StatisticsCard from '../StatisticsCard';
import DescriptionCard from '../DescrioptionCard';
import Charts from '../Charts';

const Layout = () => (
  <Box sx={{ display: 'flex' }}>
    <PermanentAppBar />
    <Sidebar />
    <MainComponent component="main">
      {/* <Box>
        <ProjectsCard />
      </Box> */}
      {/* OUTLET GOES HERE */}
      <Box sx={{ display: 'flex' }}>
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
      </Box>
      <Charts />
    </MainComponent>
  </Box>
);

export default Layout;
