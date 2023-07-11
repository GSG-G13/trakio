import { useState, useEffect } from 'react';
import {
  Button, Modal, Box, Typography, TextField,
} from '@mui/material';
import axios from 'axios';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { ErrorAlert, SuccessAlert } from '..';
import THEME from '../../theme';
import { addProjectSchema } from '../../helper/validation/schema';

const UpdateProjectModal = (
  { open, handleClose, project }: {open:boolean, handleClose:()=> void, project:any},
) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [initialValues, setInitialValues] = useState({ title: '', description: '' });

  useEffect(() => {
    if (project) {
      setInitialValues({ title: project.title, description: project.description });
    }
  }, [project]);

  const handleSubmit = (values: any) => {
    axios
      .put(`/api/project/${project.project_id}`, values)
      .then((res) => {
        setOpenSuccess(true);
        setMessageSuccess(res.data.message);
      })
      .catch((err) => {
        setOpenError(true);
        setMessageError(err.response.data.message);
      });
    handleClose();
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
            Update Project
          </Typography>

          <Formik
            initialValues={initialValues}
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
                Update
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
};

export default UpdateProjectModal;
