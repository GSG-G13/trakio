import { useState, useContext } from 'react';
import { CardActions, CardContent } from '@mui/material';
import myImage from '/assets/welcome.svg';
import {
  BasicCardBox,
  CardText,
  ContentCard,
  CardTitle,
  CardButton,
  ImageCard,
  CardImage,
} from './card.styled';
import AddProjectModal from '../AddProject';
import userContext from '../../UserContext/context';

const WelcomeCard = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const user = useContext(userContext);

  return (
    <BasicCardBox>
      <ContentCard>
        <CardContent>
          <CardTitle variant="h5">{`Welcome ${user?.user?.name}`}</CardTitle>
          <CardText>
            Check your daily tasks and schedules.
            <br />
          </CardText>
        </CardContent>
        <CardActions>
          <CardButton onClick={handleOpen} variant="contained">
            Add Project
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
