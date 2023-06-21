import { Box } from '@mui/material';
import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import BasicCard from '../WelcomeCard';
import StatisticsCard from '../StatisticsCard';
import Sidebar from '../Sidebar';

const PermanentDrawerLeft = () => (
  <Box sx={{ display: 'flex' }}>
    <PermanentAppBar />
    <Sidebar />
    <MainComponent component="main">
      {/* OUTLET GOES HERE */}
      <Box sx={{
        display: 'flex', flexDirection: 'column',
      }}
      >
        <BasicCard />
        <Box sx={{ display: 'flex', gap: '12px', width: '800px' }}>
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
