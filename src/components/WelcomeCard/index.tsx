import { useState } from 'react';
import {
  CardActions,
  CardContent,
} from '@mui/material';
import myImage from '/assets/welcome.svg';
import {
  BasicCardBox, CardText, ContentCard, CardTitle, CardButton, ImageCard, CardImage,
} from './card.styled';
import AddProjectModal from '../AddProject';

const WelcomeCard = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <BasicCardBox>
      <ContentCard>
        <CardContent>
          <CardTitle variant="h5">
            Welcome Amal
          </CardTitle>
          <CardText>
            Check your daily tasks and schedules.
            <br />
          </CardText>
        </CardContent>
        <CardActions>
          <CardButton onClick={handleOpen} variant="contained">
            Today&apos;s Scedule
          </CardButton>
          <AddProjectModal open={open} handleClose={handleClose} />
        </CardActions>
      </ContentCard>
      <ImageCard>
        <CardImage
          component="img"
          alt="My Image"
          height="200"
          image={myImage}
        />
      </ImageCard>
    </BasicCardBox>
  );
};

export default WelcomeCard;
