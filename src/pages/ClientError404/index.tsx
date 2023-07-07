import {
  Typography, Container, Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  TextContainer,
  AstronautContainer, Image, BigBox,
} from './client.styled';
import { WrappBtn } from '../../components/AccountInput/acount.styled';

const ClientError = () => (
  <BigBox>
    <Container>
      <TextContainer>
        <Typography variant="h4" component="div" sx={{ color: 'primary.main' }}>ERROR</Typography>
        <Typography variant="h1" component="h1" sx={{ color: 'primary.main', fontSize: '20rem' }}>404</Typography>
        <Divider />
        <Typography variant="body1" component="div" sx={{ color: 'primary.main' }}>
          Page Not Found
          <Link to="/">
            <WrappBtn sx={{ marginLeft: '1rem' }}> Home Page</WrappBtn>
          </Link>
        </Typography>
      </TextContainer>
      <AstronautContainer>
        <Image
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt=""
          className="src"
        />
      </AstronautContainer>
    </Container>
  </BigBox>
);
export default ClientError;
