import { Box, Typography } from '@mui/material';
import { WrapInput } from './acount.styled';

const AccountInput = ({ label, value }: { label: string, value: string | undefined }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography color="custom.white" sx={{ marginBottom: '0.5rem' }}>
      {label}
    </Typography>
    <WrapInput value={value} disabled />
  </Box>
);
const ProjectInput = ({ label }: { label: string }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography color="custom.white" sx={{ marginBottom: '1vw' }}>
      {label}
    </Typography>
    <WrapInput type="title" name="title" />
  </Box>
);

export { AccountInput, ProjectInput };
