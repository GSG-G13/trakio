import ProjectsCard from './Card';
import {
  Wrapper,
  WrapperApp,
  WrapperH1,
  WrapperIc,
} from './cards.styled';

const ProjectsCards = () => (
  <WrapperApp>
    <WrapperH1>
      <WrapperIc />
      My Projects
    </WrapperH1>
    <Wrapper>
      <ProjectsCard />
    </Wrapper>
  </WrapperApp>
);

export default ProjectsCards;
