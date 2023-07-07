import { useState, useEffect } from 'react';
import {
  Modal,
  Typography,
  Box,
  Stack,
  Autocomplete,
  TextField,
  Avatar,
  Button,
} from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Props2 } from '../../interfaces';
import { userData } from '../../interfaces/userData';

const AddMemberModal = ({ open, handleClose }: Props2) => {
  const [allUsers, setAllUsers] = useState<userData[]>([]);
  const [selected, setSelected] = useState<userData[]>([]);
  const { id } = useParams();

  const handleChange = (e, values: userData[]) => {
    setSelected(values);
  };

  useEffect(() => {
    axios.get(`/api/project/${id}/users`).then((res) => {
      setAllUsers(res.data.data);
    });
  }, [id]);

  return (
    <Modal
      open={open}
      onClose={() => {
        setSelected([]);
        handleClose();
      }}
    >
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
        <Box display="flex" alignItems="center">
          <Stack width="80%">
            <Autocomplete
              value={selected}
              onChange={handleChange}
              multiple
              id="tags-outlined"
              options={allUsers}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box
                  bgcolor="custom.background"
                  padding={1}
                  display="flex"
                  flexDirection="row"
                  {...props}
                >
                  <Avatar>{option.name[0].toUpperCase()}</Avatar>
                  <Box marginLeft={1} display="flex" flexDirection="column">
                    <Typography
                      color="custom.gray"
                      fontWeight="bold"
                      fontSize={14}
                    >
                      {option.name}
                    </Typography>
                    <Typography color="custom.gray" fontSize={11}>
                      {option.email}
                    </Typography>
                  </Box>
                </Box>
              )}
              filterSelectedOptions
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: 'custom.white',
                  },
                  '& fieldset': {
                    borderColor: 'custom.white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'custom.white',
                  },
                  '& input': {
                    color: 'custom.white',
                    fontSize: '12px',
                    fontWeight: 'normal',
                  },
                  '& .MuiSvgIcon-root': {
                    fill: 'custom.white',
                    color: 'custom.white',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'custom.gray',
                  fontSize: '12px',
                  fontWeight: 'normal',
                },
                '& .MuiChip-label': {
                  color: 'custom.white',
                  background: 'primary.main',
                },
                '& .MuiChip-filled': {
                  backgroundColor: 'custom.gray',
                },
                '&:focus': {
                  borderColor: 'custom.white',
                  '& .MuiSvgIcon-root': {
                    fill: 'custom.white',
                  },
                },
              }}
              renderInput={(params) => (
                <TextField {...params} label="Add Members" />
              )}
            />
          </Stack>
          <Button
            sx={{ marginLeft: '1rem', height: '48px' }}
            variant="contained"
            onClick={() => {
              axios
                .post(`/api/project/${id}/members`, {
                  users: selected.map((value) => value.id),
                })
                .then(() => {
                  setSelected([]);
                  handleClose();
                });
            }}
          >
            <Typography
              fontSize={16}
              fontWeight="bold"
              color="custom.background"
            >
              Add
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddMemberModal;
