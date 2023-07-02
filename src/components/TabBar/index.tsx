import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Avatar, Box, Grid, Typography,
} from '@mui/material';
import { IProjectDetails } from '../../interfaces';

const TabBar = () => {
  const isProjectTab = useLocation().pathname.includes('project');
  const TAPS_ARRAY = ['Overview', 'List', 'Board', 'Calendar', 'Files'];
  const tabs = isProjectTab ? TAPS_ARRAY : TAPS_ARRAY.splice(1, 4);
  const { id } = useParams();
  const [project, setProject] = useState<IProjectDetails>({});
  const title = isProjectTab ? project.title : 'My Tasks';
  const endpoint: string = isProjectTab ? `project/${id}` : 'mytask';

  useEffect(() => {
    if (isProjectTab) {
      axios.get(`/api/project/${id}`)
        .then((res) => {
          setProject(res.data.data[0]);
        });
    }
  }, [isProjectTab, id]);

  return (
    <Grid container paddingY={5}>
      <Grid item xs={isProjectTab ? 3 : 2.5}>
        <Box sx={{ display: 'flex', color: 'custom.white' }}>
          <Avatar
            sx={{
              width: 36, height: 36, padding: '8px', backgroundColor: 'custom.green',
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
            <Typography variant="h6">{title}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {tabs.map((tab, index) => (
                <NavLink
                  to={index === 0 ? endpoint : `/${endpoint}/${tab.toLowerCase()}`}
                  style={{ textDecoration: 'none' }}
                  key={tab}
                  end
                >
                  {({ isActive }) => (
                    <Typography
                      color={isActive ? 'custom.white' : 'custom.gray'}
                      fontSize={13}
                      fontWeight={isActive ? 'bold' : 'normal'}
                    >
                      {tab}
                    </Typography>
                  )}
                </NavLink>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TabBar;