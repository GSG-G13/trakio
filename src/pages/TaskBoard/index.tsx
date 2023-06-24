import { Grid, Box, Typography } from '@mui/material';
import { TaskCard } from '../../components';
import Theme from '../../theme';
import iTask from '../../interfaces';
import { task } from '../../interfaces/task';

const TaskBoard = ({ tasks }: iTask) => (
  <Grid container spacing={2}>

    <Grid item xs={3}>
      <Box>
        <Typography variant="subtitle1" color={Theme.palette.custom.white}>
          To-Do
        </Typography>

        {tasks?.filter((item: task) => item.section === 'To-Do').map((object: task) => <TaskCard key={object.id} task={object} />)}
      </Box>
    </Grid>

    <Grid item xs={3}>
      <Box>
        <Typography variant="subtitle1" color={Theme.palette.custom.white}>
          Doing
        </Typography>

        {tasks?.filter((item: task) => item.section === 'Doing').map((object: task) => <TaskCard key={object.id} task={object} />)}
      </Box>
    </Grid>

    <Grid item xs={3}>
      <Box>
        <Typography variant="subtitle1" color={Theme.palette.custom.white}>
          Reviewing
        </Typography>

        {tasks?.filter((item: task) => item.section === 'Reviewing').map((object: task) => <TaskCard key={object.id} task={object} />)}
      </Box>
    </Grid>

    <Grid item xs={3}>
      <Box>
        <Typography variant="subtitle1" color={Theme.palette.custom.white}>
          Done
        </Typography>

        {tasks?.filter((item: task) => item.section === 'Done').map((object: task) => <TaskCard key={object.id} task={object} />)}
      </Box>
    </Grid>
  </Grid>
);

export default TaskBoard;
