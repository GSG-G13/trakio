import { styled, TextareaAutosize } from '@mui/material';

const DesTextArea = styled(TextareaAutosize)(({ theme }) => ({
  background: theme.palette.custom.divider,
  color: theme.palette.custom.white,
  marginTop: '1vw',
}));
export default DesTextArea;
