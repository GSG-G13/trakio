import {
  TableRow, TableCell, IconButton, Box, Typography,
} from '@mui/material';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import iTask from '../../interfaces';
import theme from '../../theme';

function TaskRow({ task }: iTask) {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="h6" color={theme.palette.custom.white}>
          {task.title.toUpperCase()}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <Typography variant="body1" color={theme.palette.custom.fontGray}>
          {task.project}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <Box component="div" bgcolor={task.color} sx={{ padding: 1, borderRadius: 1.5 }}>
          <Typography fontSize={12} fontWeight={700} color={theme.palette.custom.white}>
            {task.priority.toUpperCase()}
          </Typography>
        </Box>
      </TableCell>

      <TableCell align="right">
        <Typography variant="body1" color={theme.palette.custom.white} fontWeight={700}>
          {task.section}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <Typography variant="body1" color={theme.palette.custom.fontGray}>
          {task.due_date.split('T')[0]}
        </Typography>
      </TableCell>

      <TableCell align="right">

        <IconButton>
          <Box bgcolor="rgba(62, 123, 250, 0.2)" borderRadius={2} padding={0.7}>
            <MdOutlineEdit style={{ fontSize: 18, color: '#3E7BFA' }} />
          </Box>
        </IconButton>

        <IconButton>
          <Box bgcolor="rgba(255, 46, 38, 0.2)" borderRadius={2} padding={0.7}>
            <RiDeleteBinLine style={{ color: '#FF3333', fontSize: 18 }} />
          </Box>
        </IconButton>

      </TableCell>

    </TableRow>
  );
}

export default TaskRow;
