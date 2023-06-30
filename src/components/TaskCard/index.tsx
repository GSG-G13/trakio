import {
  Paper, Typography, Box, Avatar,
} from '@mui/material';
import { iTask } from '../../interfaces';

const TaskCard = ({ task }: iTask) => (
  <Paper
    elevation={0}
    sx={{
      backgroundColor: '#2E2E30', minWidth: 240, padding: 2, cursor: 'pointer', marginBottom: 1, borderRadius: 3,
    }}
  >
    <Typography variant="subtitle1" sx={{ color: 'white', mb: 3 }}>
      {task?.title.toUpperCase()}
    </Typography>

    <Typography
      variant="body1"
      sx={{
        color: 'white', fontWeight: '200', mb: 3, textAlign: 'left', overflow: 'clip', maxHeight: 70,
      }}
    >
      {task?.description}
    </Typography>

    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

      <Avatar sx={{ bgcolor: 'deepskyblue', width: 32, height: 32 }}>
        {task?.name?.[0].toUpperCase()}
      </Avatar>

      <Typography variant="h6" sx={{ color: 'white' }}>
        {task?.project}
      </Typography>
    </Box>
  </Paper>
);

export default TaskCard;
