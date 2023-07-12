import {
  Box,
  styled,
  Typography,
  Autocomplete,
  TextField,
} from '@mui/material';
import { Field } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const TaskBox = styled(Box)(() => ({
  width: '500px',
  height: '100vh',
  position: 'absolute',
  bottom: 0,
  right: 0,
  paddingLeft: '3rem',
  background: '#232426',
}));

export const Section = styled(Autocomplete)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    borderColor: custom.fontGray,
    width: '50%',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: custom.fontGray,
      },
      '& fieldset': {
        borderColor: custom.fontGray,
      },
      '&.Mui-focused fieldset': {
        borderColor: custom.fontGray,
      },
      '& input': {
        color: custom.fontGray,
        fontSize: '12px',
        fontWeight: 'normal',
      },
      '& .MuiSvgIcon-root': {
        fill: custom.fontGray,
      },
    },
    '& .MuiInputLabel-root': {
      color: custom.fontGray,
      fontSize: '12px',
      fontWeight: 'normal',
    },
    '&:focus': {
      borderColor: custom.fontGray,
      '& .MuiSvgIcon-root': {
        fill: custom.fontGray,
      },
    },
  })
);

export const Label = styled(Typography)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    color: custom.gray,
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '12px',
  })
);

export const Date = styled('input')(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    backgroundColor: '#232426',
    border: 'none',
    fontFamily: 'Montserrat',
    color: custom.fontGray,
  })
);

export const Textarea = styled(TextField)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    width: '80%',
    backgroundColor: '#232426',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: custom.fontGray,
      },
      '& fieldset': {
        borderColor: custom.fontGray,
      },
      '&.Mui-focused fieldset': {
        borderColor: custom.fontGray,
      },
      '& input': {
        color: custom.fontGray,
        fontSize: '12px',
        fontWeight: 'normal',
      },
      '& .MuiSvgIcon-root': {
        fill: custom.fontGray,
      },
    },
    '& .MuiInputLabel-root': {
      color: custom.fontGray,
      fontSize: '12px',
      fontWeight: 'normal',
    },
    '&:focus': {
      borderColor: custom.fontGray,
      '& .MuiSvgIcon-root': {
        fill: custom.fontGray,
      },
    },
    '& .MuiOutlinedInput-input': {
      color: custom.fontGray,
      fontFamily: 'Montserrat',
      fontWeight: '300',
      fontSize: '12px',
    },
  })
);

export const Title = styled(Label)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    fontSize: '18px',
    fontWeight: '600',
    marginTop: '2rem',
    marginBottom: '0.5rem',
    color: custom.white,
  })
);

export const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  '& .MuiInputBase-root': {
    border: '1px solid white',
    color: theme.palette.custom.fontGray,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.custom.fontGray,
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '12px',
  },
  '& .MuiIconButton-root': {
    color: theme.palette.custom.fontGray,
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px',
  }
}));

export const InputBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const ProjectTitleBox = styled(Box)({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  overflow: 'hidden',
  width: '80%',
});

export const TitleField = styled(Field)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    width: '90%',
    color: custom.gray,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: custom.fontGray,
      },
    },
    '& .MuiInputLabel-root': {
      color: custom.fontGray,
      fontFamily: 'Montserrat',
      fontWeight: '300',
      fontSize: '12px',
    },
    '& .MuiOutlinedInput-input': {
      color: custom.fontGray,
      fontFamily: 'Montserrat',
      fontWeight: '300',
      fontSize: '12px',
    },
  })
);

export const TextFieldInput = styled(TextField)(
  ({
    theme: {
      palette: { custom },
    },
  }) => ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: custom.white,
      },
    },
  })
);
