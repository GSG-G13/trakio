import ProjectsCard from './ProjectCard';
import {
  WrapCards, WrapperApp, WrapperH1, WrapperIc,
} from './cards.styled';

const ProjectsCards = () => (
  <WrapperApp>
    <WrapperH1>
      <WrapperIc />
      My Projects
    </WrapperH1>
    <WrapCards>
      <ProjectsCard />
    </WrapCards>
  </WrapperApp>
);

export { ProjectsCards, ProjectsCard };
