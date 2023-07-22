import {
  Grid, Box, Typography, Skeleton,
} from '@mui/material';
import Lottie from 'react-lottie';
import todoSvg from '../../lotties/todoSvg.json';
import inprogress from '../../lotties/inprogress.json';
import review from '../../lotties/review.json';
import done from '../../lotties/done.json';
import { ISection } from '../../interfaces';

const OverviewTaskCard = ({
  section,
  tasks,
  loading,
}: {
  section: ISection;
  tasks: number;
  loading: boolean;
}) => {
  const lotties = [
    <Lottie
      height={70}
      width={100}
      options={{
        animationData: todoSvg,
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />,
    <Lottie
      height={70}
      width={100}
      options={{
        animationData: inprogress,
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />,
    <Lottie
      height={70}
      width={140}
      options={{
        animationData: review,
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />,
    <Lottie
      height={70}
      width={100}
      options={{
        animationData: done,
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />,
  ];

  return (
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
        {lotties[section.id - 1]}
        <Typography padding={1} color="custom.gray">
          {!loading ? (
            section.section
          ) : (
            <Skeleton variant="rectangular" height={16} width="100%" />
          )}
        </Typography>
        <Typography fontSize={18} fontWeight={700} color="custom.white">
          {!loading ? (
            tasks
          ) : (
            <Skeleton variant="rectangular" height={16} width="100%" />
          )}
        </Typography>
      </Box>
    </Grid>
  );
};

export default OverviewTaskCard;
