import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  onClick : () => void;
}
const FloatingButton = ({ onClick }: Props) => (
  <Box sx={{
    '& > :not(style)': { m: 1 },
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1,
  }}
  >
    <Fab onClick={onClick} color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  </Box>
);
export default FloatingButton;
