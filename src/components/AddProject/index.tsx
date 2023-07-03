import {
  Button, Modal, Box, Typography, TextField,
} from '@mui/material';
import axios from 'axios';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { useState } from 'react';
import { ErrorAlert, SuccessAlert } from '..';
import THEME from '../../theme';
import { addProjectSchema } from '../../helper/validation/schema';
import { Props2 } from '../../interfaces';

const AddProjectModal = ({ open, handleClose }:Props2) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleSubmit = (values: any) => {
    axios
      .post('/api/project', values)
      .then((res) => {
        setOpenSuccess(true);
        setMessageSuccess(res.data.message);
      })
      .catch((err) => {
        setOpenError(true);
        setMessageError(err.response.data.message);
      }); handleClose();
  };

  return (
    <Box>
      <SuccessAlert
        open={openSuccess}
        message={messageSuccess}
        setOpen={setOpenSuccess}
      />
      <ErrorAlert
        open={openError}
        message={messageError}
        setOpen={setOpenError}
      />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'custom.background',
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
          }}
        >
          <Typography variant="h6" mb={2} color="custom.white">
            Add Project
          </Typography>

          <Formik
            initialValues={{ title: '', description: '' }}
            validationSchema={addProjectSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field
                as={TextField}
                name="title"
                label="Title"
                fullWidth
                required
                sx={{ marginBottom: '1rem', color: 'custom.gray' }}
              />
              <ErrorMessage name="title" component="div" color="custom.white" />

              <Field
                as={TextField}
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={4}
                required
                sx={{ marginBottom: '1rem', color: 'custom.gray' }}
              />
              <ErrorMessage name="description" component="div" color={THEME.palette.custom.white} />

              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddProjectModal;
