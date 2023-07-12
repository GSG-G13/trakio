import { useEffect, useState } from 'react';
import {
  Modal, Box, TextField, Typography,
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import {
  TaskBox,
  Label,
  Section,
  Textarea,
  Title,
  StyledDatePicker,
  InputBox,
  ProjectTitleBox,
  TitleField,
  TextFieldInput,
} from './addTask.styled';
import { ErrorAlert, SuccessAlert } from '..';
import { IMember, ISection, Props2 } from '../../interfaces';
import { PRIORITIES } from '../../constants';

const AddTaskModal = ({ open, handleClose }: Props2) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [sections, setSections] = useState<ISection[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [members, setMembers] = useState<IMember[]>([]);
  const [projectTitle, setProjectTitle] = useState('');
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

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    if (id === 'section') {
      const selectedSection = sections.filter(
        (section: any) => section.section === value,
      );
      const sectionId = selectedSection.length ? selectedSection[0].id : null;
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        sectionId,
      }));
    } else if (id === 'priority') {
      const selectedPriority = PRIORITIES.find(
        (priority) => priority.priority === value,
      );
      const priorityId = selectedPriority ? selectedPriority.id : null;
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        priorityId,
      }));
    } else if (id === 'description') {
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        description: value,
      }));
    } else if (id === 'member') {
      const selectedmember = members.filter(
        (member: any) => member.email === value,
      );
      const memberId = selectedmember.length ? selectedmember[0].id : null;
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        userId: memberId,
      }));
    } else if (id === 'title') {
      setFormData((prevFormData: any) => ({
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

  const handleDateChange = (date: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      dueDate: date,
    }));
  };

  const handleSubmit = () => {
    axios
      .post(`/api/project/${formData.projectId}/task`, formData)
      .then((response) => {
        setOpenSuccess(true);
        setMessageSuccess(response.data.message);
        handleClose();
      })
      .catch((error) => {
        setOpenError(true);
        setMessageError(error.response.data.message);
      });
  };

  useEffect(() => {
    axios
      .get(`/api/project/${projectId}`)
      .then((response) => setProjectTitle(response.data.data[0].title));
  });

  useEffect(() => {
    axios
      .get(`/api/project/${projectId}/members`)
      .then((response) => setMembers(response.data.data));
  }, [open]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/sections')
      .then((values) => {
        setLoading(false);
        setSections(values.data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Box>Loading...</Box>;

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
      <Modal open={open} onClose={handleClose}>
        <TaskBox>
          <Formik initialValues={formData} onSubmit={handleSubmit}>
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                justifyContent: 'center',
              }}
            >
              <Title> Add Task </Title>
              <ProjectTitleBox>
                <Label>Project </Label>
                <Typography
                  color="custom.white"
                  sx={{
                    overflow: 'hidden',
                    '-webkit-line-clamp': '1',
                    display: '-webkit-box',
                    '-webkit-box-orient': 'vertical',
                    textAlign: 'left',
                  }}
                >
                  {projectTitle}
                </Typography>
              </ProjectTitleBox>
              <InputBox>
                <Label>Assignee</Label>
                <Section
                  id="member"
                  options={members}
                  onSelect={(event) => {
                    handleChange(event);
                  }}
                  sx={{ width: '90%' }}
                  autoHighlight
                  getOptionLabel={(option: any) => option.email}
                  renderOption={(props, option: any) => (
                    <Box component="li" {...props}>
                      {option.email}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextFieldInput
                      {...params}
                      label="Choose Member"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  )}
                />
              </InputBox>
              <InputBox>
                <Label>Due Date</Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <StyledDatePicker
                      label="Basic date picker"
                      onChange={handleDateChange}
                      sx={{ width: '90%' }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </InputBox>
              <Box sx={{ display: 'flex', width: '90%', gap: '0.5rem' }}>
                <InputBox sx={{ width: '50%' }}>
                  <Label>Section</Label>
                  <Section
                    id="section"
                    options={sections}
                    sx={{ width: '100%' }}
                    autoHighlight
                    onSelect={(event) => handleChange(event)}
                    getOptionLabel={(option: any) => option.section}
                    renderOption={(props, option: any) => (
                      <Box component="li" {...props}>
                        {option.section}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextFieldInput
                        {...params}
                        label="Select Section"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password',
                        }}
                      />
                    )}
                  />
                </InputBox>
                <InputBox sx={{ width: '50%' }}>
                  <Label> Priority </Label>
                  <Section
                    id="priority"
                    options={PRIORITIES}
                    autoHighlight
                    onSelect={(event) => {
                      handleChange(event);
                    }}
                    getOptionLabel={(option: any) => option.priority}
                    sx={{ width: '100%' }}
                    renderOption={(props, option: any) => (
                      <Box component="li" {...props}>
                        {option.priority}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextFieldInput
                        {...params}
                        label="Select Priority"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password',
                        }}
                      />
                    )}
                  />
                </InputBox>
              </Box>
              <InputBox>
                <Label>Title</Label>
                <TitleField
                  value={formData.title}
                  onChange={(event: any) => handleChange(event)}
                  id="title"
                  as={TextField}
                  name="title"
                  label="Title"
                  required
                />
              </InputBox>
              <InputBox>
                <Label> Description </Label>
                <Field
                  value={formData.description}
                  onChange={(event: any) => {
                    handleChange(event);
                  }}
                  name="description"
                  id="description"
                  as={Textarea}
                  label="Description"
                  multiline
                  rows={3}
                  required
                  sx={{
                    marginBottom: '1rem',
                    color: 'custom.gray',
                    width: '90%',
                  }}
                />
              </InputBox>
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ marginTop: 0, width: '90%', fontWeight: '600' }}
              >
                Submit
              </LoadingButton>
            </Form>
          </Formik>
        </TaskBox>
      </Modal>
    </>
  );
};

export default AddTaskModal;
