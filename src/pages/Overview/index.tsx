import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Lottie from 'react-lottie';
import { OverviewTaskCard, TitleAndDesc } from '../../components';
import { IProjectDetails, ISection, task } from '../../interfaces';
import presenation from '../../lotties/presentation.json';

const Overview = () => {
  const { id } = useParams();
  const [project, setProject] = useState<IProjectDetails>({});
  const [sections, setSections] = useState<ISection[]>([]);
  const [tasks, setTasks] = useState<task[]>([]);

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
  }, [id]);
  console.log(sections);

  return (
    <Grid container spacing={2}>
      <TitleAndDesc project={project} />
      <Grid item xs={4}>
        <Lottie
          height={180}
          width={320}
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
          section={item.section}
          tasks={tasks.filter((taskItem) => taskItem.section === item.section).length}
        />
      ))}
    </Grid>
  );
};

export default Overview;
