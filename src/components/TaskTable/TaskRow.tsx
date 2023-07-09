import { useState } from 'react';
import {
  TableRow,
  TableCell,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import axios from 'axios';
import { task } from '../../interfaces';
import { ErrorAlert, SuccessAlert, ConfirmDialog } from '..';
import THEME from '../../theme';
import EditTaskForm from '../../components/UpdateTask';

const TaskRow = ({ data }: {data: task}) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleDeleteTask = () => {
    axios
      .delete(`/api/project/${data.project_id}/task?taskId=${data.id}`)
      .then((response) => {
        setMessageSuccess(response.data.message);
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  };

  const handleConfirmDelete = () => {
    setConfirmOpen(false);
    handleDeleteTask();
  };

  return (

    <>
      <SuccessAlert
        open={openSuccess}
        message={messageSuccess}
        setOpen={setOpenSuccess}
      />
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      <TableRow>
        <TableCell>
          <Typography fontSize={12} fontWeight={600} color="custom.white">
            {data.title.toUpperCase()}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Typography fontSize={12} color="custom.fontGray">
            {data.project.split(' ')[0]}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Typography fontSize={12} color="custom.fontGray">
            {data.name}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Box
            component="div"
            bgcolor={data.color}
            sx={{ paddingX: 1, borderRadius: 1.5, display: 'inline-block' }}
          >
            <Typography
              fontSize={11}
              fontWeight={700}
              color="custom.white"
            >
              {data.priority.toUpperCase()}
            </Typography>
          </Box>
        </TableCell>

        <TableCell align="center">
          <Typography
            fontSize={12}
            color="custom.white"
            fontWeight={700}
          >
            {data.section}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <Typography fontSize={12} color="custom.fontGray">
            {data.due_date.split('T')[0]}
          </Typography>
        </TableCell>

        <TableCell align="center">
          <IconButton onClick={handleOpen}>
            <Box bgcolor="rgba(62, 123, 250, 0.2)" borderRadius={2} padding={1}>
              <MdOutlineEdit style={{ fontSize: 16, color: THEME.palette.custom.editIcon }} />
            </Box>
          </IconButton>

          <EditTaskForm open={open} handleClose={handleClose} data={data} />

          <IconButton onClick={() => setConfirmOpen(true)}>
            <Box bgcolor="rgba(255, 46, 38, 0.2)" borderRadius={2} padding={1}>
              <RiDeleteBinLine
                style={{ color: THEME.palette.custom.deleteIcon, fontSize: 16 }}
              />
            </Box>
          </IconButton>
        </TableCell>
      </TableRow>
      <ConfirmDialog
        title="Delete Task"
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={handleConfirmDelete}
      >
        Are you sure you want to delete this task?
      </ConfirmDialog>
    </>
  );
};

export default TaskRow;
