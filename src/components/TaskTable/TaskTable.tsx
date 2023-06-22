import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from '@mui/material';
import { TaskRow } from '../index';
import Theme from '../../theme';

const TaskTable = () => {
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
  const COLS = [
    'Task name',
    'Project',
    'Priority',
    'Status',
    'Due date',
    'Actions',
  ];
  return (
    <TableContainer component={Box} bgcolor="transparent">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {COLS.map((col, index) => (
              <TableCell>
                <Typography
                  variant="subtitle2"
                  align={index !== 0 ? 'right' : 'left'}
                  color={Theme.palette.custom.fontGray}
                >
                  {col}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
