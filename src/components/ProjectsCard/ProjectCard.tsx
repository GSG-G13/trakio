/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  CardContent,
  Typography,
  LinearProgress,
  styled,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import { Link, useOutletContext } from 'react-router-dom';
import empty from '../../lotties/empty.json';
import LongMenu from './Menu';
import { WrapperDes, WrapCards, Wrapper2 } from './cards.styled';
import { iProjects, iProjectTasks } from '../../interfaces';
import { ErrorAlert, ConfirmDialog, SuccessAlert } from '..';
import Loader from './Loader';
import UpdateProjectModal from '../UpdateProject';
import ENDPOINTS from '../../constants/endpoints';

const LinearProgressWithLabel = ({ value }: { value: number }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ width: '100%' }}>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          backgroundColor: 'custom.gray',
        }}
      />
    </Box>
    <Box sx={{ minWidth: 35 }} />
    <Typography variant="body2" color="primary.main">
      {`${Math.round(value)}%`}
    </Typography>
  </Box>
);

export const LinearWithValueLabel = ({ value }: { value: number }) => (
  <Box>
    <LinearProgressWithLabel value={value} />
  </Box>
);

export const Wrapper2Progress = styled(Box)`
  margin-top: 10px;
`;

const ProjectsCard = () => {
  const [userProjects, setUserProjects] = useState<iProjects[]>([]);
  const [projectTasks, setProjectTasks] = useState<iProjectTasks[]>([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [projectId, setProjectId] = useState<number>();
  const [messageError, setMessageError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<iProjects>();
  const [render, setRender] = useOutletContext<any>().render;
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);
  const [messageSuccess, setMessageSuccess] = useState<string>('');

  const handleDeleteProject = (projectId: any) => {
    axios
      .delete(`${ENDPOINTS.PROJECT}/${projectId}`, {
        withCredentials: true,
      })
      .then(() => {
        const updatedProjects = userProjects.filter(
          (project) => project.project_id !== projectId,
        );
        setUserProjects(updatedProjects);
        setRender(!render);
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  };

  const handleEditProject = (projectId: any) => {
    const project: iProjects = userProjects.find(
      (project: iProjects) => project.project_id === projectId,
    )!;
    setSelectedProject(project);
    setOpenUpdateModal(true);
  };

  const OpenConfirmation = () => {
    setConfirmOpen(true);
  };

  useEffect(() => {
    axios
      .get(ENDPOINTS.PROJECTS, {
        withCredentials: true,
      })
      .then((res) => {
        setUserProjects(res.data.data);
        setRender(!render);
        const fetchProjectTasks = res.data.data.map((project: iProjects) => axios.get(`${ENDPOINTS.PROJECT}/${project.project_id}/task`, {
          withCredentials: true,
        })
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
  }, [selectedProject]);

  if (isLoading) {
    return (
      <WrapCards>
        <Loader userProjets={userProjects} />
      </WrapCards>
    );
  }

  return (
    <>
      <SuccessAlert
        open={openSuccess}
        message={messageSuccess}
        setOpen={setOpenSuccess}
      />
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      {!userProjects.length && !isLoading ? (
        <Box
          width="65vw"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography fontSize={24} fontWeight={700} mb={4} color="custom.gray">
            No Projects
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
      ) : (
        userProjects.map((project: iProjects, index: number) => {
          const allTasks = projectTasks[index].length;
          const doneTasks = (
            projectTasks[index] as unknown as iProjectTasks[]
          )?.filter((task: iProjectTasks) => task.section === 'Done')?.length;
          return (
            <WrapCards key={project.project_id}>
              <Wrapper2>
                <CardContent sx={{ flex: 1, padding: '0' }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Link
                      to={`/project/${project.project_id}`}
                      style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit' }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                          overflow: 'hidden',
                          WebkitLineClamp: 1,
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          textAlign: 'left',
                        }}
                      >
                        {project.title.toUpperCase()}
                      </Typography>
                    </Link>
                    {project.role === 'manager' && (
                      <LongMenu
                        handleEditProject={handleEditProject}
                        OpenConfirmation={OpenConfirmation}
                        setProjectId={setProjectId}
                        projectId={project.project_id}
                      />
                    )}
                  </Box>
                  <WrapperDes variant="body2" color="text.secondary">
                    {project.description}
                  </WrapperDes>
                </CardContent>
                <Wrapper2Progress>
                  <LinearWithValueLabel
                    value={allTasks !== 0 ? (doneTasks / allTasks) * 100 : 0}
                  />
                </Wrapper2Progress>
              </Wrapper2>
            </WrapCards>
          );
        })
      )}
      <ConfirmDialog
        title="Delete Task"
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={() => {
          handleDeleteProject(projectId);
        }}
      >
        Are you sure you want to delete this project?
      </ConfirmDialog>
      {openUpdateModal && (
        <UpdateProjectModal
          open={openUpdateModal}
          handleClose={() => setOpenUpdateModal(false)}
          project={selectedProject}
          setProject={setSelectedProject}
          setOpenSuccess={setOpenSuccess}
          setOpenError={setOpenError}
          setMessageSuccess={setMessageSuccess}
          setMessageError={setMessageError}
        />
      )}
    </>
  );
};

export default ProjectsCard;
