/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import {
  FloatingButton, Member, OverviewTaskCard, TitleAndDesc,
} from '../../components';
import AddTaskModal from '../../components/AddTask';
import presenation from '../../lotties/presentation.json';
import {
  IMember, IProjectDetails, ISection, task,
} from '../../interfaces';

const Overview = () => {
  const { id } = useParams();
  const [project, setProject] = useState<IProjectDetails>({});
  const [sections, setSections] = useState<ISection[]>([]);
  const [tasks, setTasks] = useState<task[]>([]);
  const [members, setMembers] = useState<IMember[]>([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    axios.get(`/api/project/${id}`).then((res) => {
      setProject(res.data.data[0]);
    });

    axios.get('/api/sections').then((res) => {
      setSections(res.data.data);
    });

    axios.get(`/api/project/${id}/task`).then((res) => {
      setTasks(res.data.data);
    });

    axios.get(`/api/project/${id}/members`).then((res) => {
      setMembers(res.data.data);
    });
  }, [id]);

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
        <Grid item xs={12}>
          <Typography
            color="primary.main"
            fontSize={22}
            fontWeight={700}
            paddingY={2}
          >
            Project Roles
          </Typography>
        </Grid>
        {members.map((item) => (
          <Member member={item} key={item.id} />
        ))}
      </Grid>
<<<<<<< HEAD
      <FloatingButton onClick={handleOpen} />
      <AddTaskModal open={open} handleClose={handleClose} />
    </>

=======
      {sections.map((item, index) => (
        <OverviewTaskCard
          section={item}
          key={index}
          tasks={
            tasks.filter((taskItem) => taskItem.section === item.section).length
          }
        />
      ))}
      <Grid item xs={12}>
        <Typography
          color="primary.main"
          fontSize={22}
          fontWeight={700}
          paddingY={2}
        >
          Project Roles
        </Typography>
      </Grid>
      {members.map((item, index) => (
        <Member member={item} key={index} />
      ))}
    </Grid>
>>>>>>> main
  );
};

export default Overview;
