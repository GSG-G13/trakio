import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import LineCharts from './LineChart';
import BarCharts from './BarChart';

const Charts = () => (
  <Box sx={{ display: 'flex', gap: '20px', paddingTop: '1rem' }}>
    <LineCharts />
    <BarCharts />
  </Box>
);

export default Charts;
