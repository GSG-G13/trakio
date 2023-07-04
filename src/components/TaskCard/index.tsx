import {
  Paper, Typography, Box, Avatar,
} from '@mui/material';
import { iTask } from '../../interfaces';

const TaskCard = ({ task }: iTask) => (
  <Paper
    elevation={0}
    sx={{
      backgroundColor: '#2E2E30',
      minWidth: 240,
      padding: 2,
      cursor: 'pointer',
      marginBottom: 1,
      borderRadius: 3,
      height: '190px',
    }}
  >
    <Box
      bgcolor={task?.color}
      borderRadius={1}
      paddingX={0.5}
      display="inline-block"
      mb={1}
    >
      <Typography fontSize={11} fontWeight={600} color="custom.white">
        {task?.priority.toUpperCase()}
      </Typography>
    </Box>
    <Typography
      fontSize={16}
      fontWeight={500}
      sx={{
        color: 'custom.white',
        mb: 3,
        overflow: 'hidden',
        height: 20,
      }}
    >
      {task?.title.toUpperCase()}
    </Typography>

    <Typography
      variant="body1"
      fontSize={14}
      sx={{
        color: 'custom.gray',
        fontWeight: '200',
        mb: 3,
        textAlign: 'left',
        overflow: 'clip',
        height: 60,
      }}
    >
      {task?.description}
    </Typography>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Avatar sx={{ bgcolor: 'custom.purple', width: 32, height: 32 }}>
          {task?.name?.[0].toUpperCase()}
        </Avatar>
      </Box>
      <Typography
        fontSize={12}
        fontWeight={700}
        variant="h6"
        sx={{ color: 'primary.main' }}
      >
        {task?.project}
      </Typography>
    </Box>
  </Paper>
);

export default TaskCard;
