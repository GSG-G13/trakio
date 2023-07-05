import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField, Modal } from '@mui/material';
import { Props2 } from '../../interfaces';
import {
  TaskBox, Label, Date, Section, Textarea,
} from './updateTask';

const EditTaskForm = ({ open, handleClose }:Props2) => (
  <Modal open={open} onClose={handleClose}>
    <TaskBox>
      <form>
        <Label sx={{ marginTop: '100px', fontSize: '20px', fontWeight: '600' }}> Task Title </Label>
        <Label sx={{ marginTop: '50px' }}> Assignee </Label>
        <AccountCircleIcon sx={{
          position: 'absolute', fontSize: 24, color: 'custom.white', top: '174px', left: '270px',
        }}
        />
        <Label> Due Date </Label>
        <Date type="date" />
        <Label> Project </Label>
        <Label sx={{
          position: 'absolute', top: '240px', left: '210px', fontSize: '14px',
        }}
        >
          Project Name
        </Label>
        <Label> Section </Label>
        <Section
          disablePortal
          id="combo-box-demo"
          options={['To-Do', 'Doing', 'Reviewing', 'Done']}
          renderInput={(params:any) => <TextField {...params} label="Add to section" />}
        />
        <Label> Priority </Label>
        <Section
          disablePortal
          sx={{ top: '400px' }}
          id="combo-box-demo"
          options={['To-Do', 'Doing', 'Reviewing', 'Done']}
          renderInput={(params:any) => <TextField {...params} label="Add Priority " />}
        />
        <Label> Description </Label>
        <Textarea />
      </form>
    </TaskBox>
  </Modal>
);
export default EditTaskForm;
