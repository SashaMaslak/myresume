import { ContentStyled, TitleExperiences } from './Content.styled';
import ExperienceProjects from './ExperienceProjects/ExperienceProjects';

const Content = ({
  titleExProjects,
  experienceProjects,
  titleExWorks,
  experienceWork,
  titleExEducations,
  experienceEduction,
}) => {
  return (
    <ContentStyled>
      <TitleExperiences>{titleExProjects}</TitleExperiences>
      <ExperienceProjects experiences={experienceProjects} />
      <TitleExperiences>{titleExWorks}</TitleExperiences>
      <ExperienceProjects experiences={experienceWork} />
      <TitleExperiences>{titleExEducations}</TitleExperiences>
      <ExperienceProjects experiences={experienceEduction} />
    </ContentStyled>
  );
};

export default Content;
