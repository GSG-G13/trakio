import { useState } from 'react';
import { Box, Typography, Modal } from '@mui/material';
import axios from 'axios';
import { DesTextArea, WrapBox } from './addProject.styled.tsx';
import THEME from '../../theme';
import { AccountInput, ErrorAlert } from '..';
import { WrappBtn } from '../AccountInput/acount.styled';
import { addProjectSchema } from '../../helper/validation/schema.ts';

interface Props {
  open: boolean;
  handleClose : ()=>void;
}

interface addProject {
  title: string,
  description: string,
}

const AddProjectModal = ({ open, handleClose }:Props) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');

  const handleAddProject = (values: addProject) => {
    axios
      .post('/api/project', values)
      .then((res) => console.log(res.data.data))
      .catch((err) => {
        setOpenError(true);
        setMessageError(err.response.data.message);
      });
  };
  return (
    <Box>
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WrapBox>
          <Box>
            <AccountInput label="Title" />
            <Typography sx={{ marginTop: '1vw', color: THEME.palette.custom.white }}>
              Description
              <br />
              <DesTextArea cols={67} minRows={8} maxRows={15} sx={{ resize: 'none' }} />
            </Typography>
            <WrappBtn onClick={handleAddProject} addProjectSchema={addProjectSchema} sx={{ marginTop: '1vw' }}>
              Add
            </WrappBtn>
          </Box>
        </WrapBox>
      </Modal>
    </Box>
  );
};

export default AddProjectModal;
