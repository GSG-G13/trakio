import {
  CardContent, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  WrappBtnDone,
  Wrapper2,
  WrapperBtnUD,
  WrapperDes,
  WrapperPN,
  WrappBtn,
  Wrapper,
} from './cards.styled';
import { iProjects, iProjectTasks } from '../../interfaces';
import { ErrorAlert } from '..';
import Loader from './Loader';

const ProjectsCard = () => {
  const [userProjects, setUserProjects] = useState<iProjects[]>([]);
  const [projectTasks, setProjectTasks] = useState<iProjectTasks[]>([]);
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/projects')
      .then((res) => {
        setUserProjects(res.data.data);

        const fetchProjectTasks = res.data.data.map((project: iProjects) => axios.get(`/api/project/${project.project_id}/task`)
          .then((task) => task.data.data));

        return Promise.all(fetchProjectTasks);
      })
      .then((tasks) => {
        setProjectTasks(tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loader userProjets={userProjects} />
      </Wrapper>
    );
  }

  return (
    <>
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      {userProjects.map((project: iProjects, index: number) => {
        const todoTasks = (projectTasks[index] as unknown as iProjectTasks[])?.filter((task: iProjectTasks) => task.section === 'To-Do')?.length;
        const doneTasks = (projectTasks[index] as unknown as iProjectTasks[])?.filter((task: iProjectTasks) => task.section === 'Done')?.length;
        return (
          <Wrapper2 key={project.project_id}>
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
