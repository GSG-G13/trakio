import {
  CardContent, Skeleton,
} from '@mui/material';
import {
  WrappBtnDone,
  Wrapper2,
  WrapperBtnUD,
  WrappBtn,
  WrapCards,
} from './cards.styled';
import { Props } from '../../interfaces';

const Loader = ({ userProjets }: Props) => {
  const skeletonCards = Array.from({ length: userProjets.length }, (_, index) => (
    <Wrapper2 key={index}>
      <CardContent>
        <Skeleton variant="text" width="50%" height={24} animation="wave" />
        <Skeleton variant="text" width="100%" height={58} animation="wave" />
      </CardContent>
      <WrappBtn>
        <WrapperBtnUD>
          <Skeleton variant="text" width="30%" height={16} animation="wave" />
        </WrapperBtnUD>
        <WrappBtnDone>
          <Skeleton variant="text" width="30%" height={16} animation="wave" />
        </WrappBtnDone>
      </WrappBtn>
    </Wrapper2>
  ));

  return (
    <WrapCards>
      {skeletonCards}
    </WrapCards>
  );
};

export default Loader;
