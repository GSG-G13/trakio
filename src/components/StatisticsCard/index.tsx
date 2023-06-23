import Typography from '@mui/material/Typography';
import { StatisticsBox, StatisticsContent } from './statistics.styed';

const StatisticsCard = () => (
  <StatisticsBox>
    <StatisticsContent>
      <Typography component="div">
        Completed Tasks
      </Typography>
      <Typography component="div">
        3
      </Typography>
    </StatisticsContent>
  </StatisticsBox>
);

export default StatisticsCard;
