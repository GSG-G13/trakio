import { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
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
import axios from 'axios';
import { TaskRow } from '../index';
import { task } from '../../interfaces';
import Theme from '../../theme';
import TaskRowSkeleton from './TaskRowSkeleton';

const TaskTable = () => {
  const [tasks, setTasks] = useState<task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigator = useNavigate();
  const isProject = pathname.includes('project');
  const endpoint = isProject ? `/api/project/${id}/task` : '/api/tasks';
  const COLS = [
    'Task name',
    'Project',
    'Assignee',
    'Priority',
    'Status',
    'Due date',
    'Actions',
  ];
  useEffect(() => {
    setLoading(true);
    axios
      .get(endpoint)
      .then((res) => {
        setLoading(false);
        setTasks(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        navigator('/', { state: { error: err.response.data.message } });
      });
  }, [pathname]);

  return (
    <TableContainer
      component={Box}
      bgcolor="transparent"
      sx={{
        overflow: 'scroll',
        height: '76vh',
        '&::-webkit-scrollbar-track': {
          borderColor: 'transparent',
          borderRadius: '1rem',
        },
        '&::-webkit-scrollbar': {
          width: '0px',
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#323239',
          borderRadius: '1rem',
        },
      }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {COLS.map((col, index) => (
              <TableCell>
                <Typography
                  fontSize={12}
                  align={index !== 0 ? 'center' : 'left'}
                  color={Theme.palette.custom.fontGray}
                >
                  {col}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? <TaskRowSkeleton /> : tasks.map((item) => (
            <TaskRow key={item.id} data={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
