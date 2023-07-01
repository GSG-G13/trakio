import {
  CardContent, Typography, Skeleton,
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

        Promise.all(fetchProjectTasks)
          .then((tasks) => {
            setProjectTasks(tasks);
            setIsLoading(false);
          })
          .catch((error) => {
            setOpenError(true);
            setMessageError(error.response.data.message);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    const skeletonCards = Array.from({ length: userProjects.length }, (_, index) => (
      <Wrapper2 key={index}>
        <CardContent>
          <Skeleton variant="text" width="50%" height={24} animation="wave" />
          <Skeleton variant="text" width="100%" height={58} animation="wave" />
        </CardContent>
        <WrappBtn>
          <WrapperBtnUD>
            <Skeleton variant="text" width="30%" height={16} animation="wave" />
          </WrapperBtnUD>
          <WrappBtnDone>
            <Skeleton variant="text" width="30%" height={16} animation="wave" />
          </WrappBtnDone>
        </WrappBtn>
      </Wrapper2>
    ));

    return (
      <Wrapper>
        {skeletonCards}
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
