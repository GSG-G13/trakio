import { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { StatisticsBox, StatisticsContent } from './statistics.styed';
import { task } from '../../interfaces';
import { ErrorAlert } from '..';

const StatisticsCard = () => {
  const [completedTasks, setCompletedTasks] = useState<task[]>([]);
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    axios
      .get('/api/tasks')
      .then((response) => {
        const tasks: task[] = response.data.data;
        const filteredTasks = tasks.filter((Task: task) => Task.section === 'Done');
        setCompletedTasks(filteredTasks);
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  }, []);

  return (
    <>
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      <StatisticsBox>
        <StatisticsContent>
          <Typography>
            Completed Tasks
          </Typography>
          <Typography>
            {completedTasks.length}
          </Typography>
        </StatisticsContent>
      </StatisticsBox>
    </>
  );
};

export default StatisticsCard;
