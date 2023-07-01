import {
  Avatar, Box, Grid, Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import THEME from '../../theme';

const TaskTabBar = () => {
  const tabs = ['List', 'Board', 'Calendar', 'Files'];

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
            <Typography variant="h6">My Tasks</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {tabs.map((tab, index) => (
                <NavLink
                  to={index === 0 ? '/mytask' : `/mytask/${tab.toLowerCase()}`}
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

export default TaskTabBar;
