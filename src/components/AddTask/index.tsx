import { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Autocomplete,
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ErrorAlert, SuccessAlert } from '..';
import THEME from '../../theme';
import { IMember, Props2 } from '../../interfaces';
import { PRIORITIES } from '../../constants';
import IIntialValues from '../../interfaces/initialValues';

const AddTaskModal = ({ open, handleClose }: Props2) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [sections, setSections] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [members, setMembers] = useState<IMember[]>([]);
  const projectId = useParams().id;
  const initailValues = {
    title: '',
    description: '',
    projectId: Number(projectId),
    sectionId: 1,
    dueDate: new Date(Date.now()).toString(),
    priorityId: 1,
    userId: 1,
  } as IIntialValues;

  const handleSubmit = (values:IIntialValues) => {
    axios.post(`/api/project/${values.projectId}/task`, values)
      .then((response) => {
        setOpenSuccess(true);
        setMessageSuccess(response.data.message);
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  };

  useEffect(() => {
    axios.get(`/api/project/${projectId}/members`)
      .then((response) => setMembers(response.data.data));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/sections').then((values) => {
      setLoading(false);
      setSections(values.data.data);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
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
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" mb={2} color="custom.white">
              Add Task
            </Typography>

            <Formik
              initialValues={initailValues}
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
                    marginBottom: '1rem',
                    color: 'custom.gray',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
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
                  sx={{
                    marginBottom: '1rem',
                    color: 'custom.gray',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />
                <ErrorMessage name="description" component="div" color={THEME.palette.custom.white} />
                <FormControl sx={{ m: 1, minWidth: '46%' }} size="small">
                  <InputLabel id="demo-select-small-label">Section</InputLabel>
                  <Field as="select" name="sectionId">
                    <option value="Select Section" disabled>
                      Select Section
                    </option>
                    {!isLoading && sections.map(({ section, id }) => (
                      <option value={id} key={id}>
                        {section}
                      </option>
                    ))}
                  </Field>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: '46%' }} size="small">
                  <InputLabel id="demo-select-small-label">Priority</InputLabel>
                  <Field as="select" name="priorityId">
                    <option value="Select Priority" disabled>
                      Select Priority
                    </option>
                    {!isLoading && PRIORITIES.map(({ priority, id }) => (
                      <option value={id} key={id}>
                        {priority}
                      </option>
                    ))}
                  </Field>
                </FormControl>
                <Autocomplete
                  id="member-select"
                  sx={{ width: 300 }}
                  options={members}
                  autoHighlight
                  getOptionLabel={(option) => option.email}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      {option.email}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a member"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  )}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Basic date picker" />
                  </DemoContainer>
                </LocalizationProvider>
                <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
                  Submit
                </Button>
              </Form>
            </Formik>
          </Box>
        </Modal>
      </Box>
    </>

  );
};

export default AddTaskModal;
