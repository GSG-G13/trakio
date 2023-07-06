import {
  Box, styled, Typography, Autocomplete, TextField,
} from '@mui/material';

export const TaskBox = styled(Box)(() => ({
  width: '500px',
  height: '75vh',
  position: 'absolute',
  transition: 'width 2s, height 2s, transform 2s',
  bottom: 0,
  right: 0,
  paddingTop: '2rem',
  paddingLeft: '2rem',
  background: '#232426',
  borderRadius: '24px 0px 0px 0px',
}));

export const Section = styled(Autocomplete)(({ theme: { palette: { custom } } }) => ({
  borderColor: custom.white,
  width: '50%',
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
  fontWeight: '300',
  lineHeight: '20px',
  fontSize: '15px',
}));

export const Date = styled('input')(({ theme: { palette: { custom } } }) => ({
  backgroundColor: '#232426',
  border: 'none',
  fontFamily: 'Montserrat',
  color: custom.white,
}));

export const Textarea = styled(TextField)(({ theme: { palette: { custom } } }) => ({
  width: '80%',
  backgroundColor: '#232426',
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
