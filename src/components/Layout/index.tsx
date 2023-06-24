import { Box } from '@mui/material';
import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import { ProjectsCard } from '..';
// import BasicCard from '../WelcomeCard';
// import StatisticsCard from '../StatisticsCard';
// import DescriptionCard from '../DescrioptionCard';
// import Charts from '../Charts';

const PermanentDrawerLeft = () => (
  <Box sx={{ display: 'flex' }}>
    <PermanentAppBar />
    <Sidebar />
    <MainComponent component="main">
      <Box>
        <ProjectsCard />
      </Box>
      {/* OUTLET GOES HERE */}
      {/* <Box sx={{ display: 'flex' }}>
        <Box>
          <BasicCard />
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
    </MainComponent>
  </Box>
);

export default PermanentDrawerLeft;
