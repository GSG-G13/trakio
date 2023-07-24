import { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { addProjectSchema } from '../../helper/validation/schema';
import ENDPOINTS from '../../constants/endpoints';

const UpdateProjectModal = ({
  open,
  handleClose,
  project,
  setProject,
  setOpenSuccess,
  setOpenError,
  setMessageSuccess,
  setMessageError,
}: {
  open: boolean;
  handleClose: () => void;
  project: any;
  setProject: any;
  setOpenSuccess: any;
  setOpenError: any;
  setMessageSuccess: any;
  setMessageError: any;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState({
    title: project.title,
    description: project.description,
  });

  useEffect(() => {
    if (project) {
      setInitialValues({
        title: project.title,
        description: project.description,
      });
    }
  }, [project]);

  const handleSubmit = (values: any) => {
    setLoading(true);
    axios
      .put(`${ENDPOINTS.PROJECT}/${project.project_id}`, values, {
        withCredentials: true,
      })
      .then((res) => {
        setLoading(false);
        setOpenSuccess(true);
        setMessageSuccess(res.data.message);
        setProject(res.data.data[0]);
      })
      .catch((err) => {
        setLoading(false);
        setOpenError(true);
        setMessageError(err.response.data.message);
      });
    handleClose();
  };

  return (
    <Box>
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
                {loading ? (
                  <CircularProgress />
                ) : (
                  <Typography>Update</Typography>
                )}
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
};

export default UpdateProjectModal;
