import { Box, Typography } from '@mui/material';
import { WrapInput } from './acount.styled';
import THEME from '../../theme';

const AccountInput = ({ label, value }: {label: string, value: string}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography color={THEME.palette.custom.white} sx={{ marginBottom: '1vw' }}>
      {label}
    </Typography>
    <WrapInput value={value} />
  </Box>
);
const ProjectInput = ({ label }: {label: string}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography color={THEME.palette.custom.white} sx={{ marginBottom: '1vw' }}>
      {label}
    </Typography>
    <WrapInput />
  </Box>
);

export { AccountInput, ProjectInput };
