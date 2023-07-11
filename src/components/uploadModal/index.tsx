import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Modal,
  Box,
  Stack,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import { FileUploader } from 'react-drag-drop-files';
import { Buffer } from 'buffer';
import axios, { AxiosResponse } from 'axios';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { ErrorAlert, SuccessAlert } from '..';

window.Buffer = window.Buffer || Buffer;

const UploadModal = ({
  open,
  handleClose,
  taskId,
}: {
  open: boolean;
  handleClose: () => void;
  taskId: number;
}) => {
  const fileTypes = ['JPG', 'PNG', 'GIF', 'PDF', 'TXT'];
  const [uploadedFile, setFile] = useState<File | null>(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState('');
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  const { VITE_ACCESS_KEY, VITE_SECRET_ACCESS_KEY } = import.meta.env;

  const s3Client = new S3Client({
    region: 'eu-central-1',
    credentials: {
      accessKeyId: VITE_ACCESS_KEY,
      secretAccessKey: VITE_SECRET_ACCESS_KEY,
    },
  });

  const handleChange = (file: File) => {
    setFile(file);
  };

  const fileUpload = (file: File) => {
    setLoading(true);

    const params = {
      ACL: 'public-read',
      Bucket: 'trackio',
      Key: `${id}/${file.name}`,
      Body: file,
    };

    s3Client
      .send(new PutObjectCommand(params))
      .then(() => axios.post(`/api/project/${id}/attachments?taskId=${taskId}`, {
        attachS3: `https://trackio.s3.amazonaws.com/${id}/${file.name}`,
        attachmentName: uploadedFile?.name,
      }))
      .then((res: AxiosResponse) => {
        setLoading(false);
        setOpenSuccess(true);
        setMessageSuccess(res.data.message);
        setFile(null);
        handleClose();
      }).catch(() => {
        setLoading(false);
        setOpenError(true);
        setMessageError('Something went wrong, try again later!');
      });
  };

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
        onClose={() => {
          handleClose();
          setFile(null);
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
          <Stack>
            <Typography color="custom.white" fontSize={16} marginY={1}>
              Add Attachments
            </Typography>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            >
              <Box
                sx={{
                  borderStyle: 'dashed',
                  borderColor: 'custom.gray',
                  padding: '2rem',
                  borderRadius: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <UploadFileIcon sx={{ fontSize: 28, color: 'custom.gray' }} />
                <Typography marginTop={1} color="custom.gray" fontSize={12}>
                  Click to add a file or drop them here
                </Typography>
              </Box>
            </FileUploader>
            {uploadedFile && (
              <Box margin={1} display="flex" alignItems="center">
                <CheckCircleIcon sx={{ fontSize: 12, color: 'custom.green' }} />
                <Typography marginLeft={1} fontSize={12} color="custom.green">
                  {uploadedFile.name}
                </Typography>
              </Box>
            )}

            <Button
              sx={{ marginTop: '1rem' }}
              variant="contained"
              onClick={() => {
                if (uploadedFile) {
                  fileUpload(uploadedFile!);
                } else {
                  setOpenError(true);
                  setMessageError('No File chosen Yet');
                }
              }}
            >
              {!loading ? (
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  color="custom.background"
                >
                  Upload
                </Typography>
              ) : (
                <CircularProgress sx={{ color: 'custom.background' }} />
              )}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default UploadModal;
