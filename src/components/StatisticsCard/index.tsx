import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const StatisticsCard = () => (
  <Card sx={{
    marginTop: '15px',
    background: '#343537',
    color: '#fff',
    borderRadius: '15px',
    width: '200px',
  }}
  >
    <CardContent sx={{
      display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
    }}
    >
      <Typography component="div">
        Completed Tasks
      </Typography>
      <Typography component="div">
        3
      </Typography>
    </CardContent>
  </Card>
);

export default StatisticsCard;
