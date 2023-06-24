import { Box } from '@mui/material';
import {
  StatisticsCard,
  WelcomeCard,
  DescriptionCard,
  Charts,
} from '../../components';

const HomePage = () => (
  <>
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
  </>
);

export default HomePage;
