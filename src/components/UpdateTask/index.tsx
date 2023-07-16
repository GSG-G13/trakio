/* eslint-disable no-unused-vars */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  TextField,
  Modal,
  Box,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LoadingButton } from '@mui/lab';
import dayjs from 'dayjs';
import { PRIORITIES, SECTIONS } from '../../constants';
import { ErrorAlert, SuccessAlert } from '..';
import { task, ISection } from '../../interfaces';
// import { TaskBox, Label, Date, Section, Textarea } from './updateTask.styled';
import {
  Title,
  TaskBox,
  Label,
  Section,
  Textarea,
  ProjectTitleBox,
  InputBox,
  StyledDatePicker,
  TextFieldInput,
  TitleField,
} from '../AddTask/addTask.styled';

interface IProps {
  data: task;
  open: boolean;
  handleClose: () => void;
}

const EditTaskForm = ({ data, open, handleClose }: IProps) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [sections, setSections] = useState<ISection[]>([]);
  const [formData, setFormData] = useState({
    title: data.title,
    userId: data.user_id,
    projectId: data.project_id,
    dueDate: data.due_date.split('T')[0],
    sectionId: SECTIONS.find((item) => item.section === data.section)?.id,
    priorityId: PRIORITIES.find((item) => item.priority === data.priority)?.id,
    description: data.description,
  });

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    if (id === 'section') {
      const selectedSection = sections.filter(
        (section) => section.section === value,
      );
      const sectionId = selectedSection ? selectedSection[0].id : null;
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
    } else if (id === 'dueDate') {
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        dueDate: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .put(
        `/api/project/${formData.projectId}/task?taskId=${data.id}`,
        formData,
      )
      .then((response) => {
        setLoading(false);
        setOpenSuccess(true);
        setMessageSuccess(response.data.message);
        handleClose();
      })
      .catch((error) => {
        setLoading(false);
        setOpenError(true);
        setMessageError(error.response.data.message);
        handleClose();
      });
  };

  const handleDateChange = (date: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      dueDate: dayjs(date).format('YYYY-MM-DD'),
    }));
  };

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
              <Title> Update Task </Title>
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
                  {data.project}
                </Typography>
              </ProjectTitleBox>
              <ProjectTitleBox>
                <Label>Assignee</Label>
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
                  {data.name}
                </Typography>
              </ProjectTitleBox>
              <InputBox>
                <Label>Due Date</Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <StyledDatePicker
                      label="Basic date picker"
                      onChange={handleDateChange}
                      sx={{ width: '90%' }}
                      format="YYYY-MM-DD"
                      value={dayjs(formData.dueDate)}
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
                    defaultValue={sections.find(
                      (item) => item.section === data.section,
                    )}
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
                    defaultValue={PRIORITIES.find(
                      (item) => item.priority === data.priority,
                    )}
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
                {isLoading ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <Typography>Submit</Typography>
                )}
              </LoadingButton>
            </Form>
          </Formik>
        </TaskBox>
      </Modal>
    </>
  );
};

export default EditTaskForm;
