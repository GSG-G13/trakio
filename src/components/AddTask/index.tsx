import { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  Box,
  TextField,
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  TaskBox, Label, Section, Textarea,
} from './addTask.styled';
import { ErrorAlert, SuccessAlert } from '..';
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
    dueDate: '2023-03-02',
    priorityId: 1,
    userId: 2,
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

  if (isLoading) <Box>Loading...</Box>;
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
      <Modal
        open={open}
        onClose={handleClose}
      >
        <TaskBox>
          <Formik
            initialValues={initailValues}
            onSubmit={handleSubmit}
          >
            <Form
              style={{
                display: 'flex', flexDirection: 'column', gap: '.5rem', justifyContent: 'center',
              }}
            >
              <Label sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '2rem' }}> Add Task </Label>
              <Box sx={{
                display: 'flex', height: '3rem', gap: '1rem', alignItems: 'center',
              }}
              >
                <Label>Project </Label>
                <Label>
                  Project Name
                </Label>
              </Box>
              <Box sx={{
                display: 'flex', height: '3rem', gap: '1rem', alignItems: 'center',
              }}
              >
                <Label>Assignee</Label>
                <Section
                  id="member-select"
                  options={members}
                  sx={{ width: '65.5%' }}
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'custom.white',
                          },
                        },
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{
                display: 'flex', height: '3rem', gap: '1rem', alignItems: 'center',
              }}
              >
                <Label> Due Date </Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Basic date picker" />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
              <Box sx={{
                display: 'flex', height: '3rem', gap: '1.1rem', alignItems: 'center',
              }}
              >
                <Label> Section </Label>
                <Section
                  id="section-select"
                  options={sections}
                  sx={{ width: '67.2%' }}
                  autoHighlight
                  getOptionLabel={(option) => option.section}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      {option.section}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Section"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'custom.white',
                          },
                        },
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{
                display: 'flex', height: '3rem', gap: '1.2rem', alignItems: 'center',
              }}
              >
                <Label> Priority </Label>
                <Section
                  id="priority-select"
                  options={PRIORITIES}
                  autoHighlight
                  getOptionLabel={(option) => option.priority}
                  sx={{ width: '67.5%' }}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      {option.priority}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Priority"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'custom.white',
                          },
                        },
                      }}
                    />
                  )}
                />
              </Box>
              <Box sx={{
                display: 'flex', height: '3rem', gap: '1.2rem', alignItems: 'center',
              }}
              >
                <Box sx={{
                  display: 'flex', height: '3rem', gap: '1.2rem', alignItems: 'center',
                }}
                >
                  <Label> Title </Label>
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
                          borderColor: 'custom.white',
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
              <ErrorMessage name="title" component="div" color="custom.white" />
              <Label> Description </Label>
              <Field
                as={Textarea}
                name="description"
                label="Description"
                multiline
                rows={3}
                required
                sx={{ marginBottom: '1rem', color: 'custom.gray' }}
              />
              <ErrorMessage name="description" component="div" color="custom.white" />
              <Button type="submit" variant="contained" sx={{ marginTop: 0, width: '30%' }}>
                Submit
              </Button>
            </Form>
          </Formik>
        </TaskBox>
      </Modal>
    </>
  );
};

export default AddTaskModal;
