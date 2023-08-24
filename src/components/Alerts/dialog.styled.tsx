/* eslint-disable max-len */
import { styled } from '@mui/material';
import {
  DialogContent, DialogTitle,
} from '@material-ui/core';

export const StyledDialogTitle = styled(DialogTitle)(({ theme: { palette: { custom }, typography } }) => ({
  color: custom.white,
  fontStyle: 'bold',
  fontFamily: typography.fontFamily,

}));

export const StyledDialogContent = styled(DialogContent)(({ theme: { palette: { custom }, typography } }) => ({
  color: custom.white,
  fontFamily: typography.fontFamily,
}));
