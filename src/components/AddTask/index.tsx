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
  Formik, Field, Form,
} from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  TaskBox, Label, Section, Textarea,
} from './addTask.styled';
import { ErrorAlert, SuccessAlert } from '..';
import { IMember, Props2 } from '../../interfaces';
import { PRIORITIES } from '../../constants';

const AddTaskModal = ({ open, handleClose }: Props2) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [sections, setSections] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [members, setMembers] = useState<IMember[]>([]);
  const projectId = useParams().id;
  const [formData, setFormData] = useState({
    title: '',
    userId: 1,
    projectId,
    dueDate: '2023-03-02',
    sectionId: 1,
    priorityId: 1,
    description: '',
  });

  const handleChange = (event:any) => {
    const { id, value } = event.target;
    if (id === 'section') {
      const selectedSection = sections.filter((section:any) => section.section === value);
      const sectionId = selectedSection ? selectedSection[0].id : null;
      setFormData((prevFormData:any) => ({
        ...prevFormData,
        sectionId,
      }));
    } else if (id === 'priority') {
      const selectedPriority = PRIORITIES.find((priority) => priority.priority === value);
      const priorityId = selectedPriority ? selectedPriority.id : null;
      setFormData((prevFormData:any) => ({
        ...prevFormData,
        priorityId,
      }));
    } else if (id === 'description') {
      setFormData((prevFormData:any) => ({
        ...prevFormData,
        description: value,
      }));
    } else if (id === 'dueDate') {
      setFormData((prevFormData:any) => ({
        ...prevFormData,
        dueDate: value,
      }));
    } else if (id === 'member') {
      const selectedmember = members.filter((member:IMember) => member.email === value);
      const memberId = selectedmember ? selectedmember[0].id : null;
      setFormData((prevFormData:any) => ({
        ...prevFormData,
        userId: memberId,
      }));
    } else if (id === 'title') {
      setFormData((prevFormData:any) => ({
        ...prevFormData,
        title: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = () => {
    axios.post(`/api/project/${formData.projectId}/task`, formData)
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
            initialValues={formData}
            onSubmit={handleSubmit}
          >
            <Form
              style={{
                display: 'flex', flexDirection: 'column', gap: '.5rem', justifyContent: 'center',
              }}
            >
              <Label sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '1rem' }}> Add Task </Label>
              <Box sx={{
                display: 'flex', height: '2rem', gap: '1rem', alignItems: 'center',
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
                  id="member"
                  options={members}
                  onSelect={(event) => {
                    handleChange(event);
                  }}
                  sx={{ width: '65.5%' }}
                  autoHighlight
                  getOptionLabel={(option:any) => option.email}
                  renderOption={(props, option:any) => (
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
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'custom.white',
                            padding: '2px',
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
                    <DatePicker
                      label="Basic date picker"
                      slotProps={{ textField: { size: 'small' } }}
                      sx={{
                        width: '67.2%',
                        '& .MuiInputBase-root': {
                          '& fieldset': {
                            borderColor: '#fff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#fff', // Change border color on hover
                          },
                        },
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>

              </Box>
              <Box sx={{
                display: 'flex', height: '3rem', gap: '1.1rem', alignItems: 'center',
              }}
              >
                <Label> Section </Label>
                <Section
                  id="section"
                  options={sections}
                  sx={{
                    width: '67.2%',
                  }}
                  autoHighlight
                  onSelect={(event) => {
                    handleChange(event);
                  }}
                  getOptionLabel={(option:any) => option.section}
                  renderOption={(props, option:any) => (
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
                      size="small"
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
                  id="priority"
                  options={PRIORITIES}
                  autoHighlight
                  onSelect={(event) => {
                    handleChange(event);
                  }}
                  getOptionLabel={(option:any) => option.priority}
                  sx={{
                    width: '67.5%',
                  }}
                  renderOption={(props, option:any) => (
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
                      size="small"
                    />
                  )}
                />
              </Box>
              <Box sx={{
                display: 'flex', height: '3rem', gap: '1.2rem', alignItems: 'center',
              }}
              >
                <Box sx={{
                  display: 'flex', height: '3rem', gap: '2.5rem', width: '82%',
                }}
                >
                  <Label> Title </Label>
                  <Field
                    value={formData.title}
                    onChange={(event:any) => {
                      handleChange(event);
                    }}
                    inputProps={{
                      style: {
                        padding: 7,
                      },
                    }}
                    id="title"
                    as={TextField}
                    name="title"
                    label="Title"
                    size="small"
                    fullWidth
                    required
                    sx={{
                      width: '100%',
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
              <Label> Description </Label>
              <Field
                value={formData.description}
                onChange={(event:any) => {
                  handleChange(event);
                }}
                name="description"
                id="description"
                as={Textarea}
                label="Description"
                multiline
                rows={2}
                required
                sx={{ marginBottom: '1rem', color: 'custom.gray' }}
              />
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
