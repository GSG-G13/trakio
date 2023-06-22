import { Box } from '@mui/material';
import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import BasicCard from '../WelcomeCard';
// import { TaskTable } from '../TaskTable';

const PermanentDrawerLeft = () => (
  <Box sx={{ display: 'flex' }}>
    <PermanentAppBar />
    <Sidebar />
    <MainComponent component="main">
      {/* OUTLET GOES HERE */}
      <BasicCard />
      {/* <TaskTable /> */}
    </MainComponent>
  </Box>
);

export default PermanentDrawerLeft;
