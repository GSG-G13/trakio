/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { StatisticsBox, StatisticsContent } from './statistics.styed';
import { task } from '../../interfaces';
import { ErrorAlert } from '..';

const StatisticsCard = ({ section }:any) => {
  const [tasks, setTasks] = useState<task[]>([]);
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    axios
      .get('/api/tasks')
      .then((response) => {
        const tasks: task[] = response.data.data;
        const filteredTasks = tasks.filter((task: task) => task.section === section);
        setTasks(filteredTasks);
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
            {section}
            {' '}
            Tasks
            {' '}
          </Typography>
          <Typography>
            {tasks.length}
          </Typography>
        </StatisticsContent>
      </StatisticsBox>
    </>
  );
};

export default StatisticsCard;
