import {
  Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box,
} from '@mui/material';
import { TaskRow } from '../index.ts';
import theme from '../../theme/index.ts';

export default function TaskTable() {
  const data = [
    {
      id: 1,
      title: 'hello',
      description: 'jndknvlskdksdcscskdn',
      created_at: '2023-06-19T05:36:48.216Z',
      due_date: '2023-07-04T22:00:00.000Z',
      project: 'PROJECT2',
      priority: 'hight',
      color: '#F8524B',
      section: 'To-Do',
    },
    {
      id: 2,
      title: 'hello',
      description: 'jndknvlskdksdcscskdn',
      created_at: '2023-06-19T05:36:48.216Z',
      due_date: '2023-07-04T22:00:00.000Z',
      project: 'PROJECT2',
      priority: 'hight',
      color: '#F8524B',
      section: 'To-Do',
    },
    {
      id: 3,
      title: 'hello',
      description: 'jndknvlskdksdcscskdn',
      created_at: '2023-06-19T05:36:48.216Z',
      due_date: '2023-07-04T22:00:00.000Z',
      project: 'PROJECT2',
      priority: 'medium',
      color: '#FF8800',
      section: 'To-Do',
    },
    {
      id: 4,
      title: 'hello',
      description: 'jndknvlskdksdcscskdn',
      created_at: '2023-06-19T05:36:48.216Z',
      due_date: '2023-07-04T22:00:00.000Z',
      project: 'PROJECT2',
      priority: 'low',
      color: '#06C270',
      section: 'To-Do',
    },
  ];
  return (
    <TableContainer component={Box} bgcolor="transparent">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>

            <TableCell>
              <Typography variant="subtitle2" color={theme.palette.custom.fontGray}>Task name</Typography>
            </TableCell>

            <TableCell align="right">
              <Typography variant="subtitle2" color={theme.palette.custom.fontGray}>Project</Typography>
            </TableCell>

            <TableCell align="right">
              <Typography variant="subtitle2" color={theme.palette.custom.fontGray}>Priority</Typography>
            </TableCell>

            <TableCell align="right">
              <Typography variant="subtitle2" color={theme.palette.custom.fontGray}>Status</Typography>
            </TableCell>

            <TableCell align="right">
              <Typography variant="subtitle2" color={theme.palette.custom.fontGray}>Due date</Typography>
            </TableCell>

            <TableCell align="right">
              <Typography variant="subtitle2" color={theme.palette.custom.fontGray}>Actions</Typography>
            </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((task) => <TaskRow key={task.id} task={task} />)
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
