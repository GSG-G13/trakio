import {
  CardActions,
  CardMedia,
  CardContent,
  Card,
  Box,
  Button,
  Typography,
} from '@mui/material';
import myImage from './welcome.svg';

const BasicCard = () => (
  <Box sx={{
    position: 'relative',
    display: 'flex',
    width: '740px',
    background: '#343537',
    justifyContent: 'space-between',
    borderRadius: '20px',
    padding: '30px',
  }}
  >
    <Card sx={{ background: 'transparent', boxShadow: 'none', borderRadius: '0px' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontSize: '36px', color: '#FFDA3C' }}>
          Welcome Amal
        </Typography>
        <Typography sx={{
          lineHeight: '2', letterSpacing: '.5px', fontWeight: 'light', fontSize: '14px', color: '#FFDA3C',
        }}
        >
          Check your daily tasks and schedules.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            width: '193px',
            color: '#455A64',
            fontWeight: '400',
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: '#FFDA3C',
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card sx={{
      background: 'transparent',
      boxShadow: 'none',
      position: 'absolute',
      right: '32px',
      bottom: '15px',
    }}
    >
      <CardMedia
        sx={{ width: '290px', height: '250px' }}
        component="img"
        alt="My Image"
        height="200"
        image={myImage}
      />
    </Card>
  </Box>
);

export default BasicCard;
