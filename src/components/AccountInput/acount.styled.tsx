import { styled } from '@mui/material/styles';
import { Input } from '@mui/material';

const WrapInput = styled(Input)(({ theme }) => ({
  height: '3vw',
  borderRadius: '0.5vw',
  color: theme.palette.custom.white,
  background: theme.palette.custom.divider,
}));

export default WrapInput;
