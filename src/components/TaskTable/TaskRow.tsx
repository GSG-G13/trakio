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
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { task } from '../../interfaces';
import THEME from '../../theme';
import EditTaskForm from '../../components/UpdateTask';
import { UploadModal } from '..';

const TaskRow = ({ data }: { data: task }) => {
  const [open, setOpen] = useState(false);
  const [openUplad, setOpenUpload] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleCloseUpload = () => setOpenUpload(false);
  const handleOpenUpload = () => setOpenUpload(true);
  return (
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
          <Typography fontSize={11} fontWeight={700} color="custom.white">
            {data.priority.toUpperCase()}
          </Typography>
        </Box>
      </TableCell>

      <TableCell align="center">
        <Typography fontSize={12} color="custom.white" fontWeight={700}>
          {data.section}
        </Typography>
      </TableCell>

      <TableCell align="center">
        <Typography fontSize={12} color="custom.fontGray">
          {data.due_date.split('T')[0]}
        </Typography>
      </TableCell>

      <TableCell align="center">
        <IconButton onClick={handleOpenUpload}>
          <Box bgcolor="rgba(77,250,62,.2)" borderRadius={2} padding={1}>
            <AttachFileIcon sx={{ fontSize: 16, color: '#3EFA94' }} />
          </Box>
        </IconButton>
        <IconButton onClick={handleOpen}>
          <Box bgcolor="rgba(62, 123, 250, 0.2)" borderRadius={2} padding={1}>
            <MdOutlineEdit
              style={{ fontSize: 16, color: THEME.palette.custom.editIcon }}
            />
          </Box>
        </IconButton>

        <EditTaskForm open={open} handleClose={handleClose} data={data} />
        <UploadModal open={openUplad} handleClose={handleCloseUpload} taskId={data.id!} />

        <IconButton>
          <Box bgcolor="rgba(255, 46, 38, 0.2)" borderRadius={2} padding={1}>
            <RiDeleteBinLine
              style={{ color: THEME.palette.custom.deleteIcon, fontSize: 16 }}
            />
          </Box>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;
