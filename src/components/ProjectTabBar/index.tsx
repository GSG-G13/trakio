import {
  Avatar, Box, Grid, Typography,
} from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import THEME from '../../theme';
import { IProjectDetails } from '../../interfaces';

const ProjectTabBar = () => {
  const tabs = ['Overview', 'List', 'Board', 'Calendar', 'Files'];
  const { id } = useParams();
  const [project, setProject] = useState<IProjectDetails>({});

  useEffect(() => {
    axios.get(`/api/project/${id}`)
      .then((res) => {
        setProject(res.data.data[0]);
      });
  }, [id]);

  return (
    <Grid container paddingY={5}>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', color: 'custom.white' }}>
          <Avatar
            sx={{
              width: 36, height: 36, padding: '8px', backgroundColor: 'blue',
            }}
          >
            KH
          </Avatar>
          <Box
            marginLeft={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography variant="h6">{project.title}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {tabs.map((tab, index) => (
                <NavLink
                  to={index === 0 ? `project/${id}` : `project/${id}/${tab.toLowerCase()}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography color={THEME.palette.custom.gray} fontSize={13}>{tab}</Typography>
                </NavLink>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectTabBar;
