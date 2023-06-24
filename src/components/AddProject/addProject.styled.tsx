import { Box, Typography, styled } from '@mui/material';

const WrapBox = styled(Box)(({ theme }) => ({
  background: theme.palette.custom.background,
  color: theme.palette.custom.white,
}));
const WrapTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.white,
}));
export { WrapBox, WrapTypo };
