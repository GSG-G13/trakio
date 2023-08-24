import { Typography } from '@mui/material';
import Lottie from 'react-lottie';
import working from '../../lotties/working.json';
import {
  DescriptionCardBox,
  DescriptionImageCard,
  // CardImage,
  ContentCard,
} from './description.styled';

const DescriptionCard = () => (
  <DescriptionCardBox>
    <DescriptionImageCard>
      <Lottie
        height={140}
        width={210}
        options={{
          animationData: working,
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
      />
    </DescriptionImageCard>
    <ContentCard>
      <Typography
        sx={{ textAlign: 'left', marginTop: '1.25rem', color: 'primary.main' }}
      >
        Simplify tasks, enhance productivity with our Trackio app.
      </Typography>
    </ContentCard>
  </DescriptionCardBox>
);

export default DescriptionCard;
