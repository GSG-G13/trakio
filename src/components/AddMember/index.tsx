import {
  Modal, Typography, Box, Stack, Autocomplete, TextField,
} from '@mui/material';
import { Props2 } from '../../interfaces';

const usersName = [
  { name: 'Khaled' },
  { name: 'Mohammed' },
  { name: 'Nada' },
  { name: 'Aya' },
  { name: 'Amal' },
];
const AddMemberModal = ({ open, handleClose }:Props2) => (
  <Modal open={open} onClose={handleClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        bgcolor: 'custom.background',
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
      }}
    >
      <Typography variant="h6" mb={2} color="custom.white">
        Add Members
      </Typography>
      <Stack>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={usersName}
          getOptionLabel={(option) => option.name}
          defaultValue={[usersName[1]]}
          filterSelectedOptions
          sx={{
            '& .MuiAutocomplete-inputRoot': {
              color: 'custom.white',
              background: 'custom.black',
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Add Members"
            //   placeholder="Members..."
            />
          )}
        />
      </Stack>
    </Box>
  </Modal>
);

export default AddMemberModal;
