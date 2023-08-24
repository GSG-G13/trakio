import { styled } from '@mui/material/styles';
import { Input, Button } from '@mui/material';

const WrapInput = styled(Input)(({ theme }) => ({
  width: '30vw',
  height: '8vh',
  padding: '1rem',
  borderRadius: '0.5vw',
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: theme.palette.custom.gray,
  },
  background: theme.palette.secondary.main,
}));

const WrappBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.custom.deleteIcon,
  color: theme.palette.custom.background,
  fontWeight: 'bold',
}));

export { WrapInput, WrappBtn };
