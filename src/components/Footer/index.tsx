import {
  Box,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import ReactLogo from '../../assets/logo.svg';
import THEME from '../../theme';

const Footer = () => (
  <div>
    <Container sx={{ color: 'white' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" sx={{ margin: '1vw' }}>
            <CardMedia
              component="img"
              alt="Trackio"
              image={ReactLogo}
              sx={{ marginTop: '15px', width: '70%', marginLeft: '9px' }}
            />
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            +62(21)3456 7891
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            PT.Trackio Tipes
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Earphone
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Programming
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Javascript
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" sx={{ margin: '1vw' }}>
            Service
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Computer
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            CPU
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Earphone
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Programming
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Javascript
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" sx={{ margin: '1vw' }}>
            About US
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Computer
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            CPU
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Earphone
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Programming
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Javascript
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" sx={{ margin: '1vw' }}>
            Social Media
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Computer
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            CPU
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Earphone
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Programming
          </Typography>
          <Typography variant="h6" sx={{ margin: '1vw' }}>
            {' '}
            Javascript
          </Typography>
        </Grid>
      </Grid>
    </Container>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <LinearProgress sx={{ color: THEME.palette.primary.main, marginTop: '5vh', width: '45vw' }} />
    </Box>
    <Typography sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2vh',
      color: THEME.palette.primary.main,
    }}
    >
      Landing Page Trackio Created By Team 5
    </Typography>
  </div>
);

export default Footer;
