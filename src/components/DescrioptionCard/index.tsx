import { Typography } from '@mui/material';
import myImage from '/assets/description.svg';
import {
  DescriptionCardBox, DescriptionImageCard, CardImage, ContentCard,
} from './description.styled';

const DescriptionCard = () => (
  <DescriptionCardBox>
    <DescriptionImageCard>
      <CardImage
        component="img"
        alt="My Image"
        height="200"
        image={myImage}
      />
    </DescriptionImageCard>
    <ContentCard>
      <Typography sx={{ textAlign: 'left', marginTop: '1.25rem', color: 'primary.main' }}>
        Simplify tasks, enhance productivity with our  Trackio app.
      </Typography>
    </ContentCard>
  </DescriptionCardBox>
);

export default DescriptionCard;
