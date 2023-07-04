import {
  TextField, Button, Box, styled, Typography,
} from '@mui/material';

export const TaskBox = styled(Box)(() => ({
  position: 'absolute',
  width: '600px',
  height: '630px',
  left: '870px',
  top: '175px',
  background: '#232426',
  borderRadius: '24px 0px 0px 0px',

}));

export const Label = styled(Typography)(({ theme: { palette: { custom } } }) => ({

  color: custom.white,
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '20px',
  marginLeft: '60px',
  fontSize: '15px',
  marginTop: '30px',

}));
export const StatisticsContent = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
}));
