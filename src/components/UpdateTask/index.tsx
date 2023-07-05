import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField, Modal, Box } from '@mui/material';
import { task } from '../../interfaces';
import {
  TaskBox, Label, Date, Section, Textarea,
} from './updateTask.styled';

interface IProps {
   data: task, open: boolean, handleClose: () => void,
}

const EditTaskForm = ({ data, open, handleClose }:IProps) => (
  <Modal open={open} onClose={handleClose}>
    <TaskBox>
      <form>
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
        <Date type="date" defaultValue={data.due_date.split('T')[0]} />
        <Label> Project </Label>
        <Label sx={{
          position: 'absolute', top: '240px', left: '210px', fontSize: '14px',
        }}
        >
          { data.project}
        </Label>
        <Label> Section </Label>
        <Section
          disablePortal
          id="combo-box-demo"
          defaultValue={data.section}
          options={['To-Do', 'Doing', 'Reviewing', 'Done']}
          renderInput={(params: any) => <TextField {...params} label="Add to section" />}
        />
        <Label> Priority </Label>
        <Section
          disablePortal
          sx={{ top: '400px' }}
          id="combo-box-demo"
          defaultValue={data.priority}
          options={['To-Do', 'Doing', 'Reviewing', 'Done']}
          renderInput={(params: any) => <TextField {...params} label="Add Priority " />}
        />
        <Label> Description </Label>
        <Textarea
          defaultValue={data.description}
        />
      </form>
    </TaskBox>
  </Modal>
);
export default EditTaskForm;
