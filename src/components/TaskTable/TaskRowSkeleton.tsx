import { Skeleton, TableCell, TableRow } from '@mui/material';

const TaskRowSkeleton = () => {
  const cells = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 8; i++) {
    cells.push(
      <TableCell key={i}>
        <Skeleton variant="rectangular" height="20px" animation="wave" sx={{ borderRadius: 2 }} />
      </TableCell>,
    );
  }

  return <TableRow sx={{ backgroundColor: 'transparent' }}>{cells}</TableRow>;
};

export default TaskRowSkeleton;
