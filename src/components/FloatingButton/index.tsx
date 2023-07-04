import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const FloatingButton = () => (
  <Box sx={{
    '& > :not(style)': { m: 1 },
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 9999,
  }}
  >
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  </Box>
);
export default FloatingButton;
