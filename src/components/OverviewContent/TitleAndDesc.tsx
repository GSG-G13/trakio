import {
  Grid, Box, Typography, Skeleton,
} from '@mui/material';
import { IProjectDetails } from '../../interfaces';

const TitleAndDesc = ({ project, loading }: { project: IProjectDetails, loading: boolean }) => (
  <Grid item xs={8}>
    <Box
      padding={3}
      borderRadius={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'secondary.main',
        justifyContent: 'space-evenly',
        height: '20vh',
      }}
    >
      <Typography
        fontSize={16}
        textTransform="capitalize"
        fontWeight={600}
        color="primary.main"
      >
        {!loading ? project.title : <Skeleton variant="rectangular" height={16} width="50%" />}
      </Typography>
      <Typography
        fontSize={13}
        color="custom.gray"
        sx={{
          overflow: 'scroll',
          maxHeight: '96px',
          '&::-webkit-scrollbar-track': {
            borderColor: 'transparent',
            borderRadius: '1rem',
          },
          '&::-webkit-scrollbar': {
            width: '0px',
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'custom.gray',
            borderRadius: '1rem',
          },
        }}
      >
        {!loading ? project.description : (
          <Box>
            <Skeleton variant="rectangular" height={13} width="100%" sx={{ marginY: '0.5rem' }} />
            <Skeleton variant="rectangular" height={13} width="100%" sx={{ marginY: '0.5rem' }} />
            <Skeleton variant="rectangular" height={13} width="100%" sx={{ marginY: '0.5rem' }} />
          </Box>
        )}
      </Typography>
    </Box>
  </Grid>
);

export default TitleAndDesc;
