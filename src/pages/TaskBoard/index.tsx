import { useState, useEffect } from 'react';
import {
  Grid, Box, Typography, Skeleton, Paper,
} from '@mui/material';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'react-lottie';
import { TaskCard } from '../../components';
import { task } from '../../interfaces/task';
import { ISection } from '../../interfaces';
import empty from '../../lotties/empty.json';

const TaskBoard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [tasks, setTasks] = useState<task[]>([]);
  const [sections, setSections] = useState<ISection[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [emptyList, setEmptyList] = useState<boolean>(false);
  const { id } = useParams();
  const endpoint = pathname.includes('project')
    ? `/api/project/${id}/task`
    : '/api/tasks';

  useEffect(() => {
    axios.get('/api/sections').then((res) => {
      setSections(res.data.data);
    });
    setLoading(true);
    axios
      .get(endpoint)
      .then((res) => {
        setLoading(false);
        setTasks(res.data.data);
        if (!res.data.data.length) {
          setEmptyList(true);
        }
      })
      .catch((err) => {
        setLoading(false);
        navigate('/', { state: { error: err.response.data.message } });
      });
  }, [pathname]);

  return (
    <Grid container spacing={2}>
      {!emptyList ? (
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
                  height: '73vh',
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
                {loading ? (
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
                ) : (
                  tasks
                    ?.filter((item: task) => item.section === section.section)
                    .map((object: task) => (
                      <TaskCard key={object.id} task={object} />
                    ))
                )}
              </Box>
            </Box>
          </Grid>
        ))
      ) : (
        <Box
          width="100%"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography fontSize={24} fontWeight={700} mb={4} color="custom.gray">
            No Tasks
          </Typography>
          <Lottie
            height={500}
            width={500}
            options={{
              animationData: empty,
              loop: true,
              autoplay: true,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
        </Box>
      )}
    </Grid>
  );
};

export default TaskBoard;
