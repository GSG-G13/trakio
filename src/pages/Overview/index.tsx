/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import {
  FloatingButton, Member, OverviewTaskCard, TitleAndDesc,
} from '../../components';
import AddTaskModal from '../../components/AddTask';
import presenation from '../../lotties/presentation.json';
import {
  IMember, IProjectDetails, ISection, task,
} from '../../interfaces';
import AddMemberModal from '../../components/AddMember';

const Overview = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const { id } = useParams();
  const [project, setProject] = useState<IProjectDetails>({});
  const [manager, setManager] = useState<boolean>(false);
  const [sections, setSections] = useState<ISection[]>([]);
  const [tasks, setTasks] = useState<task[]>([]);
  const [members, setMembers] = useState<IMember[]>([]);
  const navigator = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/project/${id}`)
      .then((res) => {
        setProject(res.data.data[0]);
        setManager(res.data.manager);
      })
      .catch((err) => {
        navigator('/', { state: { error: err.response.data.message } });
      });

    axios.get('/api/sections').then((res) => {
      setSections(res.data.data);
    });

    axios
      .get(`/api/project/${id}/task`)
      .then((res) => {
        setTasks(res.data.data);
      })
      .catch((err) => {
        navigator('/', { state: { error: err.response.data.message } });
      });

    axios
      .get(`/api/project/${id}/members`)
      .then((res) => {
        setMembers(res.data.data);
      })
      .catch((err) => {
        navigator('/', { state: { error: err.response.data.message } });
      });
  }, [id, open]);

  return (
    <>
      <Grid container marginBottom={5} spacing={2}>
        <TitleAndDesc project={project} />
        <Grid item xs={4}>
          <Lottie
            height={180}
            width={300}
            options={{
              animationData: presenation,
              loop: true,
              autoplay: true,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
        </Grid>
        {sections.map((item) => (
          <OverviewTaskCard
            section={item}
            key={item.section}
            tasks={
              tasks.filter((taskItem) => taskItem.section === item.section).length
            }
          />
        ))}
        <Grid item xs={10}>
          <Typography
            color="primary.main"
            fontSize={22}
            fontWeight={700}
            paddingY={2}
          >
            Project Roles
          </Typography>
        </Grid>
        {manager && (
          <Grid marginTop={2} item xs={2}>
            <Button variant="outlined" onClick={handleOpen} endIcon={<AddIcon />}>
              Add Members
            </Button>
          </Grid>
        )}
        <AddMemberModal open={open} handleClose={handleClose} />
        {members.map((item) => (
          <Member member={item} key={item.id} />
        ))}
      </Grid>
      <FloatingButton onClick={handleOpen} />
      <AddTaskModal open={open} handleClose={handleClose} />
    </>

  );
};

export default Overview;
