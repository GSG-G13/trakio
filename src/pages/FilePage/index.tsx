import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Grid, IconButton, Typography,
} from '@mui/material';
import axios from 'axios';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import DownloadIcon from '@mui/icons-material/Download';
import { IFile } from '../../interfaces';

const handleDownloadClick = async (attach: string) => {
  try {
    const response = await axios.get(attach, {
      headers: {
        'Access-Control-Allow-Origin': 'true',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      responseType: 'blob',
    });
    const blob = new Blob([response.data], {
      type: response.headers['content-type'],
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'image.png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.log('Error downloading file:', error);
  }
};

const FilePage = () => {
  const { id } = useParams();
  const [files, setFiles] = useState<IFile[]>([]);

  useEffect(() => {
    axios.get(`/api/project/${id}/attachments`).then((res) => {
      setFiles(res.data.data);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      {files.map((item) => (
        <Grid key={item.id} item xs={6}>
          <Box
            padding={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderRadius={2}
            bgcolor="secondary.main"
          >
            <Box display="flex">
              <Box
                padding={2}
                bgcolor="custom.gray"
                display="flex"
                alignItems="center"
                borderRadius={1}
              >
                {item.attachment_name.split('.')[1] === 'pdf' ? (
                  <PictureAsPdfIcon
                    sx={{ color: 'custom.white', fontSize: 48 }}
                  />
                ) : (
                  <PhotoSizeSelectActualIcon
                    sx={{ color: 'custom.white', fontSize: 48 }}
                  />
                )}
              </Box>
              <Box
                marginLeft={2}
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Box display="flex">
                  <Typography fontSize={12} color="custom.gray" marginRight={2}>
                    name:
                  </Typography>
                  <Typography fontSize={16} color="custom.white">
                    {item.attachment_name.split('.')[0]}
                  </Typography>
                </Box>

                <Box display="flex">
                  <Typography fontSize={12} color="custom.gray" marginRight={2}>
                    Task:
                  </Typography>
                  <Typography fontSize={14} color="custom.white">
                    {item.title}
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography fontSize={12} color="custom.gray" marginRight={2}>
                    uploaded By:
                  </Typography>
                  <Typography fontSize={14} color="custom.white">
                    {item.name}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <IconButton onClick={() => handleDownloadClick(item.attach_s3)}>
              <DownloadIcon sx={{ color: 'custom.gray' }} />
            </IconButton>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FilePage;
