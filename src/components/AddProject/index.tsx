import { Box, Typography, Modal } from '@mui/material';
import { DesTextArea, WrapBox } from './addProject.styled.tsx';
import THEME from '../../theme';
import { AccountInput } from '..';
import { WrappBtn } from '../AccountInput/acount.styled';

interface Props {
  open: boolean;
  handleClose : ()=>void;
}

const AddProjectModal = ({ open, handleClose }:Props) => (
  <Box>
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

export default AddProjectModal;
