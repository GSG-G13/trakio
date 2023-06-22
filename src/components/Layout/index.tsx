import { Box } from '@mui/material';
import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import BasicCard from '../WelcomeCard';
import StatisticsCard from '../StatisticsCard';
// import { TaskTable } from '../TaskTable/TaskTable';

const PermanentDrawerLeft = () => (
  <Box sx={{ display: 'flex' }}>
    <PermanentAppBar />
    <Sidebar />
    <MainComponent component="main">
      {/* OUTLET GOES HERE */}
      {/* <TaskTable /> */}
      <Box>
        <BasicCard />
        <Box sx={{ display: 'flex', gap: '12px', width: '780px' }}>
          <StatisticsCard />
          <StatisticsCard />
          <StatisticsCard />
          <StatisticsCard />
        </Box>
      </Box>
    </MainComponent>
  </Box>
);

export default PermanentDrawerLeft;
