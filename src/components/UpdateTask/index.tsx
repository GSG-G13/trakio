/* eslint-disable no-unused-vars */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  TextField, Modal, Box, Button,
} from '@mui/material';
import {
  Formik, Form,
} from 'formik';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PRIORITIES } from '../../constants';
import { ErrorAlert, SuccessAlert } from '..';
import { task, ISection } from '../../interfaces';
import {
  TaskBox, Label, Date, Section, Textarea,
} from './updateTask.styled';

interface IProps {
   data: task, open: boolean, handleClose: () => void,
}

const EditTaskForm = ({ data, open, handleClose }:IProps) => {
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
    sectionId: 1,
    priorityId: 1,
    description: data.description,
    taskId: data.id,
  });

  const handleChange = ({ id, value }:any) => {
    if (id === 'section') {
      const selectedSection = sections.filter((section) => section.section === value);
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
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = () => {
    axios.put(`/api/project/${formData.projectId}/task`, formData)
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
    setLoading(true);
    axios.get('/api/sections')
      .then((values) => {
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
      <Modal open={open} onClose={handleClose}>
        <TaskBox>
          <Formik
            initialValues={formData}
            onSubmit={handleSubmit}
          >
            <Form>
              <Label sx={{ marginTop: '100px', fontSize: '20px', fontWeight: '600' }}>
                {data.title.toUpperCase()}
              </Label>
              <Label sx={{ marginTop: '50px' }}> Assignee </Label>
              <Box>
                <AccountCircleIcon sx={{
                  position: 'absolute', fontSize: 24, color: 'custom.white', top: '174px', left: '270px',
                }}
                />
                <Label sx={{ marginTop: '-15px', marginLeft: '300px' }}>
                  {data.name}
                </Label>
              </Box>
              <Label> Due Date </Label>
              <Date
                type="date"
                defaultValue={data.due_date.split('T')[0]}
                value={formData.dueDate}
                onChange={(event) => {
                  handleChange(event);
                }}
                name="dueDate"
                id="dueDate"
              />
              <Label> Project </Label>
              <Label sx={{
                position: 'absolute', top: '240px', left: '210px', fontSize: '14px',
              }}
              >
                {data.project}
              </Label>
              <Label> Section </Label>
              <Section
                id="section"
                options={sections}
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
                  />
                )}
              />
              <Label> Priority </Label>
              <Section
                disablePortal
                id="priority"
                sx={{ top: '400px' }}
                options={PRIORITIES}
                autoHighlight
                onSelect={(event) => {
                  handleChange(event);
                }}
                getOptionLabel={(option:any) => option.priority}
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
                  />
                )}
              />
              <Label> Description </Label>
              <Textarea
                value={formData.description}
                onChange={(event) => {
                  handleChange(event);
                }}
                name="description"
                id="description"
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

export default EditTaskForm;
