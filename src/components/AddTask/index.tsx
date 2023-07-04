import { useState } from 'react';
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Checkbox,
  Autocomplete,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { top100Films } from '../../fake';
import THEME from '../../theme';
import { Props2 } from '../../interfaces';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AddTaskModal = ({ open, handleClose }: Props2) => {
  const [section, setSection] = useState('');
  const [priority, setPriority] = useState('');

  const handleSectionChange = (event: SelectChangeEvent) => {
    setSection(event.target.value);
  };

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value);
  };
  const handleSubmit = () => {
    const projectId = 12;
    axios.post(`/api/project/${projectId}/task`)
      .then((data) => console.log(data));
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
            borderRadius: 1,
          }}
        >
          <Typography variant="h6" mb={2} color="custom.white">
            Add Task
          </Typography>

          <Formik initialValues={{ title: '', description: '' }} onSubmit={handleSubmit}>
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
              <FormControl sx={{ m: 1, minWidth: '46%' }} size="small">
                <InputLabel id="demo-select-small-label">Section</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={section}
                  label="Section"
                  onChange={handleSectionChange}
                >
                  <MenuItem value={4}>Done</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: '46%' }} size="small">
                <InputLabel id="demo-select-small-label">Priority</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={priority}
                  label="priority"
                  onChange={handlePriorityChange}
                >
                  <MenuItem value={1}>High</MenuItem>
                </Select>
              </FormControl>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                style={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField {...params} label="Checkboxes" placeholder="Favorites" />
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
  );
};

export default AddTaskModal;
