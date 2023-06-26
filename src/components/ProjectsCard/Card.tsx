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
import { iProjects } from '../../interfaces';
import { ErrorAlert } from '..';

const ProjectsCard = () => {
  const [userProjects, setUserProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    axios.get('/api/projects')
      .then((res) => {
        setUserProjects(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setOpenError(true);
        setMessageError(err.response.data.message);
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
      {userProjects.map((project: iProjects) => (
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
            <WrapperBtnUD>undone</WrapperBtnUD>
            <WrappBtnDone>done</WrappBtnDone>
          </WrappBtn>
        </Wrapper2>
      ))}
    </>
  );
};

export default ProjectsCard;
