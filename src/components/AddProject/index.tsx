import React from 'react';
import { Box, Typography, Modal } from '@mui/material';
import { DesTextArea, WrapBox } from './addProject.styled';
import THEME from '../../theme';
import { AccountInput } from '..';
import { WrappBtn } from '../AccountInput/acount.styled';

const AddProject = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <WrappBtn onClick={handleOpen} sx={{ marginTop: '1vw' }}>
        Add Project
      </WrappBtn>
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
            <WrappBtn sx={{ marginTop: '1vw' }}>
              Add
            </WrappBtn>
          </Box>
        </WrapBox>
      </Modal>
    </Box>
  );
};

export default AddProject;
