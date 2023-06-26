import { Alert, Snackbar, AlertTitle } from '@mui/material';
import React from 'react';

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
