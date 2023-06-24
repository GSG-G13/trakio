import { Box, Typography } from '@mui/material';
import DesTextArea from './addProject.styled';
import THEME from '../../theme';
import { AccountInput } from '..';
import { WrappBtn } from '../AccountInput/acount.styled';

const AddProject = () => (
  <Box>
    <Typography color={THEME.palette.custom.white} sx={{ fontWeight: 'bold', fontSize: '2vw', marginBottom: '2vw' }}>
      Add Project
    </Typography>
    <AccountInput label="Title" />
    <Typography sx={{ marginTop: '1vw', color: THEME.palette.custom.white }}>
      Description
      <br />
      <DesTextArea />
    </Typography>
    <WrappBtn sx={{ marginTop: '1vw' }}>
      Add Project
    </WrappBtn>
  </Box>
);

export default AddProject;
