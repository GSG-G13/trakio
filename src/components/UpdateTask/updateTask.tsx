import {
  Box, styled, Typography, Autocomplete,
} from '@mui/material';
import { TextareaAutosize } from '@mui/base';

export const TaskBox = styled(Box)(() => ({
  position: 'absolute',
  width: '600px',
  height: '80vh',
  left: '870px',
  top: '175px',
  background: '#232426',
  borderRadius: '24px 0px 0px 0px',

}));
export const Section = styled(Autocomplete)(({ theme: { palette: { custom } } }) => ({
  borderColor: custom.white,
  width: '140px',
  position: 'absolute',
  top: '335px',
  left: '270px',
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: custom.white,
    },
    '& fieldset': {
      borderColor: custom.white,
    },
    '&.Mui-focused fieldset': {
      borderColor: custom.white,
    },
    '& input': {
      color: custom.white,
      fontSize: '12px',
      fontWeight: 'normal',
    },
    '& .MuiSvgIcon-root': {
      fill: custom.white,
    },
  },
  '& .MuiInputLabel-root': {
    color: custom.white,
    fontSize: '12px',
    fontWeight: 'normal',
  },
  '&:focus': {
    borderColor: custom.white,
    '& .MuiSvgIcon-root': {
      fill: custom.white,
    },
  },
}));

export const Label = styled(Typography)(({ theme: { palette: { custom } } }) => ({

  color: custom.white,
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '20px',
  marginLeft: '60px',
  fontSize: '15px',
  marginTop: '40px',

}));

export const Date = styled('input')(({ theme: { palette: { custom } } }) => ({
  position: 'absolute',
  backgroundColor: '#232426',
  border: 'none',
  top: '230px',
  fontFamily: 'Montserrat',
  left: '270px',
  color: custom.white,
}));

export const Textarea = styled(TextareaAutosize)(() => ({
  marginLeft: '60px',
  marginTop: '20px',
  minWidth: '400px',
  minHeight: '80px',
  backgroundColor: '#232426',
}));
