import { useState, useEffect } from 'react';
import {
  Grid, Box, Typography,
} from '@mui/material';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LuFolderX } from 'react-icons/lu';
import { TaskCard } from '../../components';
import { task } from '../../interfaces/task';
import { ISection } from '../../interfaces';

const TaskBoard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [tasks, setTasks] = useState<task[]>([]);
  const [sections, setSections] = useState<ISection[]>([]);
  const { id } = useParams();
  const endpoint = pathname.includes('project')
    ? `/api/project/${id}/task`
    : '/api/tasks';

  useEffect(() => {
    axios.get('/api/sections').then((res) => {
      setSections(res.data.data);
    });

    axios
      .get(endpoint)
      .then((res) => {
        setTasks(res.data.data);
      })
      .catch((err) => {
        navigate('/', { state: { error: err.response.data.message } });
      });
  }, [pathname]);

  return (
    <Grid container spacing={2}>
      {tasks.length ? (
        sections.map((section) => (
          <Grid item xs={3}>
            <Box>
              <Typography
                variant="subtitle1"
                color="custom.white"
                paddingBottom={2}
              >
                {section.section}
              </Typography>
              <Box
                bgcolor="transparent"
                sx={{
                  overflow: 'scroll',
                  height: '80vh',
                  '&::-webkit-scrollbar-track': {
                    borderColor: 'transparent',
                    borderRadius: '1rem',
                  },
                  '&::-webkit-scrollbar': {
                    width: '0px',
                    backgroundColor: 'transparent',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#323239',
                    borderRadius: '1rem',
                  },
                }}
              >
                {tasks
                  ?.filter((item: task) => item.section === section.section)
                  .map((object: task) => (
                    <TaskCard key={object.id} task={object} />
                  ))}
              </Box>
            </Box>
          </Grid>
        ))
      ) : (
        <Box width="100%">
          <LuFolderX style={{ fontSize: '320px', color: 'custom.gray' }} />
          <Typography>No Tasks</Typography>
        </Box>
      )}
    </Grid>
  );
};

export default TaskBoard;
