import { useState } from 'react';
import { Box, Typography, Modal } from '@mui/material';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { DesTextArea, WrapBox } from './addProject.styled.tsx';
import THEME from '../../theme';
import { AccountInput, ErrorAlert, SuccessAlert } from '..';
import { WrappBtn } from '../AccountInput/acount.styled';
import { addProjectSchema } from '../../helper/validation/schema.ts';

interface Props {
  open: boolean;
  handleClose : ()=>void;
}

interface addProject {
  title: string,
  description: string,
}

const AddProjectModal = ({ open, handleClose }:Props) => {
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleAddProject = (values: addProject) => {
    axios
      .post('/api/project', values)
      .then((res) => {
        console.log(res.data);
        setOpenSuccess(true);
        setMessageSuccess(res.data.message);
      })
      .catch((err) => {
        setOpenError(true);
        setMessageError(err.response.data.message);
      });
  };
  return (
    <Box>
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Formik
          initialValues={{
            title: '',
            description: '',
          }}
          validationSchema={addProjectSchema}
          onSubmit={handleAddProject}
        >
          <Form>
            <WrapBox>
              <Box>
                <AccountInput label="Title" />
                <Typography sx={{ marginTop: '1vw', color: THEME.palette.custom.white }}>
                  Description
                  <br />
                  <DesTextArea name="description" cols={67} minRows={8} maxRows={15} sx={{ resize: 'none' }} />
                </Typography>
                <WrappBtn type="submit" sx={{ marginTop: '1vw' }}>
                  Add
                </WrappBtn>
              </Box>
            </WrapBox>
          </Form>
        </Formik>
      </Modal>
    </Box>
  );
};

export default AddProjectModal;
