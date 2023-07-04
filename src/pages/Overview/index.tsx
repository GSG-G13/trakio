import { useState } from 'react';
import { Box } from '@mui/material';
import OverviewContent from '../../components/OverviewContent';
import { FloatingButton } from '../../components';
import AddTaskModal from '../../components/AddTask';

const Overview = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box marginTop={5}>
      <OverviewContent />
      <FloatingButton onClick={handleOpen} />
      <AddTaskModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Overview;
