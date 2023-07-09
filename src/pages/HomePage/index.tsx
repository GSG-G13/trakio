import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {
  StatisticsCard,
  WelcomeCard,
  DescriptionCard,
  Charts,
  ErrorAlert,
} from '../../components';

const HomePage = () => {
  const location = useLocation();
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    if (location.state && location.state.error && location.state.error.length) {
      setOpenError(true);
    }
  }, []);

  return (
    <>
      {location.state && location.state.error && (
        <ErrorAlert
          open={openError}
          message={location.state.error}
          setOpen={setOpenError}
        />
      )}

      <Box sx={{ display: 'flex', marginTop: '5rem' }}>
        <Box>
          <WelcomeCard />
          <Box sx={{ display: 'flex', gap: '.75rem', width: '48.75rem' }}>
            <StatisticsCard section="To-Do" />
            <StatisticsCard section="Doing" />
            <StatisticsCard section="Reviewing" />
            <StatisticsCard section="Done" />
          </Box>
        </Box>
        <DescriptionCard />
      </Box>
      <Charts />
    </>
  );
};

export default HomePage;
