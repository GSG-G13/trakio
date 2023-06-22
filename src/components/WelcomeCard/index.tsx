import {
  CardActions,
  CardContent,
} from '@mui/material';
import myImage from '../../assets/welcome.svg';
import {
  BasicCardBox, CardText, ContentCard, CardTitle, CardButton, ImageCard, CardImage,
} from './card.styled';

const BasicCard = () => (
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
        <CardButton variant="contained">
          Learn More
        </CardButton>
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

export default BasicCard;
