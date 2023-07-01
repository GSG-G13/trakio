import { CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  WrappBtnDone,
  Wrapper2,
  WrapperBtnUD,
  WrapperDes,
  WrapperPN,
  WrappBtn,
} from './cards.styled';
import { iProjects, iProjectTasks } from '../../interfaces';
import { ErrorAlert } from '..';

const ProjectsCard = () => {
  const [userProjects, setUserProjects] = useState<iProjects[]>([]);
  const [projectTasks, setProjectTasks] = useState<iProjectTasks[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    axios.get('/api/projects')
      .then((res) => {
        setUserProjects(res.data.data);
        setLoading(false);

        const fetchProjectTasks = res.data.data.map((project: iProjects) => axios.get(`/api/project/${project.project_id}/task`)
          .then((task) => task.data.data));

        Promise.all(fetchProjectTasks)
          .then((tasks) => {
            setProjectTasks(tasks);
          })
          .catch((error) => {
            setOpenError(true);
            setMessageError(error.response.data.message);
          });
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      { userProjects.map((project: iProjects, index:number) => {
        const todoTasks = (projectTasks[index])?.filter((task: iProjectTasks) => task.section === 'To-Do')?.length;
        const doneTasks = (projectTasks[index])?.filter((task: iProjectTasks) => task.section === 'Done')?.length;
        return (
          <Wrapper2>
            <CardContent>
              <WrapperPN>{project.role}</WrapperPN>
              <Typography gutterBottom variant="h6" component="div">
                {project.title}
              </Typography>
              <WrapperDes variant="body2" color="text.secondary">
                {project.description}
              </WrapperDes>
            </CardContent>
            <WrappBtn>
              <WrapperBtnUD>
                {`${todoTasks} Todo`}
              </WrapperBtnUD>
              <WrappBtnDone>
                {`${doneTasks} Done`}
              </WrappBtnDone>
            </WrappBtn>
          </Wrapper2>
        );
      })}
    </>
  );
};

export default ProjectsCard;
