import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

const Logo = (({ sx }: any) => (
  <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
    <Box
      component="img"
      src="/assets/logo.svg"
      sx={{
        width: 40, height: 40, cursor: 'pointer', ...sx,
      }}
    />
    {/* <Box
      component="img"
      src="../../../public/assets/logoo.png"
      sx={{
        width: 130, height: 35, cursor: 'pointer', ...sx, marginLeft: '-1px',
      }}
    /> */}
  </Link>
));

export default Logo;
