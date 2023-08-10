import {
  Typography, Container,
} from '@mui/material';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import {
  TextContainer,
  BigBox,
} from './error';
import error from '../../lotties/error.json';

const ClientError = () => (
  <BigBox>
    <Container>
      <Lottie
        height={350}
        width={190}
        style={{ marginTop: '-6rem' }}
        options={{
          animationData: error,
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
      />
      <TextContainer>
        <Typography variant="h1" component="h1" sx={{ color: 'primary.main', fontSize: '2rem' }}>
          Error 404 - Page Not Found
        </Typography>
      </TextContainer>
      <Typography variant="body1" component="div" sx={{ color: 'custom.white', textAlign: 'center', marginTop: '1rem' }}>
        <Link to="/">
          <Typography sx={{
            marginLeft: '.3rem', display: 'inline-block', color: 'primary.main',
          }}
          >
            {' '}
            Return to the Home Page
          </Typography>
        </Link>
      </Typography>
    </Container>
  </BigBox>
);
export default ClientError;
