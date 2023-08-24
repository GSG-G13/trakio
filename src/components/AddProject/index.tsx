import {
  Button, Modal, Box, Typography, TextField,
} from '@mui/material';
import axios from 'axios';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert, SuccessAlert } from '..';
import { addProjectSchema } from '../../helper/validation/schema';
import { Props2 } from '../../interfaces';
import ENDPOINTS from '../../constants/endpoints';

const AddProjectModal = ({ open, handleClose }: Props2) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const navigator = useNavigate();

  const handleSubmit = (values: any) => {
    axios
      .post(ENDPOINTS.PROJECT, values, {
        withCredentials: true,
      })
      .then((res) => {
        setOpenSuccess(true);
        setMessageSuccess(res.data.message);
        navigator(`/project/${res.data.data[0].id}`);
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
                sx={{
                  marginBottom: '2vh',
                  color: 'custom.gray',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'custom.gray',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'custom.fontGray',
                    fontFamily: 'Montserrat',
                    fontWeight: '300',
                    fontSize: '12px',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'custom.fontGray',
                    fontFamily: 'Montserrat',
                    fontWeight: '300',
                    fontSize: '14px',
                  },
                }}
              />
              <ErrorMessage name="title">
                {(msg) => (
                  <Typography
                    fontSize={12}
                    marginBottom={1}
                    color="custom.deleteIcon"
                  >
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>

              <Field
                as={TextField}
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={4}
                required
                sx={{
                  marginBottom: '2vh',
                  color: 'custom.gray',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'custom.gray',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'custom.fontGray',
                    fontFamily: 'Montserrat',
                    fontWeight: '300',
                    fontSize: '12px',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'custom.fontGray',
                    fontFamily: 'Montserrat',
                    fontWeight: '300',
                    fontSize: '14px',
                  },
                }}
              />
              <ErrorMessage name="description">
                {(msg) => (
                  <Typography
                    fontSize={12}
                    marginBottom={1}
                    color="custom.deleteIcon"
                  >
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>

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
