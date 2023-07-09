import React from 'react';
import {
  Alert, Snackbar, AlertTitle, Button, Dialog, DialogActions,
} from '@mui/material';
import { StyledDialogTitle, StyledDialogContent } from './dialog.styled';

export const SuccessAlert = ({
  open,
  message,
  setOpen,
}: {
  open: boolean;
  message: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <Snackbar
    open={open}
    autoHideDuration={3000}
    onClose={() => setOpen(false)}
    sx={{ width: '40%' }}
  >
    <Alert severity="success" sx={{ width: '100%' }} variant="filled">
      <AlertTitle>Success</AlertTitle>
      {message}
    </Alert>
  </Snackbar>
);

export const ErrorAlert = ({
  open,
  message,
  setOpen,
}: {
  open: boolean;
  message: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <Snackbar
    open={open}
    autoHideDuration={3000}
    onClose={() => setOpen(false)}
    sx={{ width: '40%' }}
  >
    <Alert severity="error" sx={{ width: '100%' }} variant="filled">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  </Snackbar>
);

export const ConfirmDialog = ({
  title, children, open, setOpen, onConfirm,
}:any) => (
  <Dialog
    sx={{ '& .MuiPaper-rounded': { backgroundColor: 'custom.background', padding: '10px' } }}
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="confirm-dialog"
  >
    <StyledDialogTitle
      id="confirm-dialog"
    >
      {title}

    </StyledDialogTitle>
    <StyledDialogContent>{children}</StyledDialogContent>
    <DialogActions>
      <Button
        variant="contained"
        onClick={() => setOpen(false)}
      >
        No
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setOpen(false);
          onConfirm();
        }}
        color="secondary"
      >
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);
