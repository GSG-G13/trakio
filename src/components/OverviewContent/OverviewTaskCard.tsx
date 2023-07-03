import { Grid, Box, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import todoSvg from '../../lotties/todoSvg.json';

const OverviewTaskCard = ({
  section,
  tasks,
}: {
  section: string;
  tasks: number;
}) => (
  <Grid item xs={3}>
    <Box
      padding={3}
      borderRadius={2}
      sx={{
        backgroundColor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Lottie
        height={100}
        width={100}
        options={{
          animationData: todoSvg,
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
      />
      <Typography padding={1} color="custom.gray">{section}</Typography>
      <Typography fontSize={18} fontWeight={700} color="custom.white">
        {tasks}
      </Typography>
    </Box>
  </Grid>
);

export default OverviewTaskCard;
