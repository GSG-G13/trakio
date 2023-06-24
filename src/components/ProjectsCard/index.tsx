import { CardContent, Typography } from '@mui/material';
import {
  Wrapper,
  WrappBtnDone,
  Wrapper2,
  WrapperApp,
  WrapperBtnUD,
  WrapperDes,
  WrapperH1,
  WrapperIc,
  WrapperPN,

  WrappBtn,
} from './cards.styled';

const ProjectsCard = () => (
  <WrapperApp>
    <WrapperH1>
      <WrapperIc />
      My Projects
    </WrapperH1>
    <Wrapper>
      <Wrapper2>
        <CardContent>
          <WrapperPN>Project Name</WrapperPN>
          <Typography gutterBottom variant="h6" component="div">
            Title Project
          </Typography>
          <WrapperDes variant="body2" color="text.secondary">
            Brainstorming brings team members diverse experience into play.
          </WrapperDes>
        </CardContent>
        <WrappBtn>
          <WrapperBtnUD>undone</WrapperBtnUD>
          <WrappBtnDone>done</WrappBtnDone>
        </WrappBtn>
      </Wrapper2>
    </Wrapper>
  </WrapperApp>
);

export default ProjectsCard;
