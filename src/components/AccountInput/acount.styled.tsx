import { styled } from '@mui/material/styles';
import { Input, Button } from '@mui/material';

const WrapInput = styled(Input)(({ theme }) => ({
  width: '30vw',
  height: '6vh',
  borderRadius: '0.5vw',
  color: theme.palette.custom.white,
  background: theme.palette.custom.divider,
}));
const WrappBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.custom.black,
  fontWeight: 'bold',
}));
export { WrapInput, WrappBtn };
