import { Box } from '@mui/material';
import PermanentAppBar from '../AppBar';
import MainComponent from './layout.styled';
import Sidebar from '../Sidebar';
import { AccountPage } from '../../pages';
// import BasicCard from '../WelcomeCard';
// import StatisticsCard from '../StatisticsCard';
// import { TaskTable } from '../TaskTable/TaskTable';

const PermanentDrawerLeft = () => (
  <Box sx={{ display: 'flex' }}>
    <PermanentAppBar />
    <Sidebar />
    <MainComponent component="main">
      <AccountPage />
    </MainComponent>
  </Box>
);

export default PermanentDrawerLeft;
