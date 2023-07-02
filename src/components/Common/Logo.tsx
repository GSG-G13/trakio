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
  </Link>
));

export default Logo;
