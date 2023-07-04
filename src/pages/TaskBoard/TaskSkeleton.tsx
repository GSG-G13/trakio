import { Paper, Skeleton } from '@mui/material';

const TaskSkeleton = () => (
  <Paper
    sx={{
      backgroundColor: '#2E2E30',
      height: '180px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '12px',
      borderRadius: 3,
    }}
  >
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="50px"
      sx={{ borderRadius: 1 }}
    />
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="100%"
      height="20px"
      sx={{ borderRadius: 1 }}
    />
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="100%"
      height="60px"
      sx={{ borderRadius: 1 }}
    />
  </Paper>
);

export default TaskSkeleton;
