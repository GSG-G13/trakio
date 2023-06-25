import { styled, TextareaAutosize, Box } from '@mui/material';

const DesTextArea = styled(TextareaAutosize)(({ theme: { palette: { custom } } }) => ({
  background: custom.divider,
  color: custom.white,
  marginTop: '1vw',
}));
const WrapBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30vh',
}));
export { DesTextArea, WrapBox };
