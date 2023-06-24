import { Box } from '@mui/material';
import { StatisticsCard, BasicCard, DescriptionCard } from '../../components';

const HomePage = () => (
  <Box sx={{ display: 'flex' }}>
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
  </Box>
);

export default HomePage;
